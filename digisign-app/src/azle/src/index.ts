import {
  Canister,
  Principal,
  Record,
  text,
  StableBTreeMap,
  Vec,
  Variant,
  update,
  Result,
  Err,
  Ok,
  query,
  nat64,
} from "azle";

let Data = Record({
  PDFName: text,
  PDFDesc: text,
  encryptedData: text,
  owner: Principal,
});

type Data = typeof Data.tsType;

let User = Record({
  id: Principal,
  name: text,
  pdfs: Vec(Data),
  docssigned: nat64,
  docsvalidated: nat64,
});

type User = typeof User.tsType;

const UserPayload = Record({
  name: text,
  id: Principal,
});

const PDFPayload = Record({
  PDFName: text,
  PDFDesc: text,
  encryptedData: text,
  owner: Principal,
});

const ValidatePayload = Record({
  encrypteddata: text,
  owner: Principal,
});

const Error = Variant({
  NotFound: text,
  Unauthorized: text,
  Forbidden: text,
  Internal: text,
  BadPayload: text,
  BadPrincipal: text,
});

let users = StableBTreeMap<Principal, User>(0);
let data = StableBTreeMap<nat64, Data>(1);
var id = 0n;

export default Canister({
  //users
  createUser: update([UserPayload], Result(User, Error), (payload) => {
    if (!payload.name || !payload.id) {
      return Err({ BadPayload: "Bad payload" });
    }

    const newAcc: User = {
      id: payload.id,
      name: payload.name,
      pdfs: [],
      docssigned: 0n,
      docsvalidated: 0n,
    };

    users.insert(payload.id, newAcc);
    return Ok(newAcc);
  }),

  getUser: query([Principal], Result(User, Error), (id) => {
    if (!id) {
      return Err({ BadPayload: "Bad payload" });
    }

    const user = users.get(id);
    if ("None" in user) {
      return Err({ NotFound: "User not found" });
    }

    const found: User = user.Some;

    return Ok(found);
  }),

  getUsers: query([], Result(Vec(User), Error), () => {
    return Ok(users.values());
  }),

  getHistory: query([Principal], Result(Vec(Data), Error), (id) => {
    if (!id) {
      return Err({ BadPayload: "Bad payload" });
    }

    const user = users.get(id);
    if ("None" in user) {
      return Err({ NotFound: "User not found" });
    }

    const found: User = user.Some;

    return Ok(found.pdfs);
  }),

  addPDF: update([PDFPayload], Result(Data, Error), (payload) => {
    if (
      !payload.PDFName ||
      !payload.PDFDesc ||
      !payload.encryptedData ||
      !payload.owner
    ) {
      return Err({ BadPayload: "Bad payload" });
    }

    const newPDF: Data = {
      PDFName: payload.PDFName,
      PDFDesc: payload.PDFDesc,
      encryptedData: payload.encryptedData,
      owner: payload.owner,
    };

    data.insert(id, newPDF);

    id += 1n;
    const user = users.get(payload.owner);

    if ("None" in user) {
      return Err({ NotFound: "User not found" });
    }
    const found: User = user.Some;
    console.log(found);
    found.pdfs.push(newPDF);
    found.docssigned += 1n;

    users.insert(payload.owner, found);
    return Ok(newPDF);
  }),

  validate: query([ValidatePayload], Result(Data, Error), (payload) => {
    if (!payload.encrypteddata || !payload.owner) {
      return Err({ BadPayload: "Bad payload" });
    }
    console.log(payload.owner)

    const user = users.get(payload.owner);
    console.log(user)
    if ("None" in user) {
      return Err({ NotFound: "User not found" });
    }

    const found: User = user.Some;
    console.log(found)

    for (let i = 0; i < found.pdfs.length; i++) {
      if (found.pdfs[i].encryptedData === payload.encrypteddata) {
        found.docsvalidated += 1n;
        users.insert(payload.owner, found);
        return Ok(found.pdfs[i]);
      }
    }
    return Err({ NotFound: "PDF not found" });
  }),
});
