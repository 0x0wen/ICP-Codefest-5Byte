import { Canister, Principal, Record, text, StableBTreeMap, Vec , Variant, update, Result, Err, Ok, query} from "azle";

let Data = Record({
    id: Principal,
    PDFName: text,
    PDFDesc: text,
    encryptedData: text,
    owner: Principal,
  });

type Data = typeof Data.tsType;

let User = Record({
  id:Principal,
  name:text,
  pdfs: Vec(Data),
})

type User = typeof User.tsType;

const UserPayload = Record({
  name: text,
  id: Principal,
})

const PDFPayload = Record({
  PDFName: text,
  PDFDesc: text,
  encryptedData: text,
  owner: Principal,
})

const ValidatePayload = Record({
  encrypteddata : text,
  owner : Principal,
})

const Error = Variant({
  NotFound: text,
  Unauthorized: text,
  Forbidden: text,
  Internal: text,
  BadPayload: text,
  BadPrincipal: text,
})


let users = StableBTreeMap<Principal, User>(0);
let data = StableBTreeMap<Principal, Data>(1);

export default Canister({
  //users
  createUser: update([UserPayload], Result(User, Error), (payload) =>{
    if (!payload.name || !payload.id) {
      return Err({BadPayload: "Bad payload"});
    }

    const newAcc : User = {
      id: payload.id,
      name: payload.name,
      pdfs: [],
    };

    users.insert(payload.id, newAcc);
    return Ok(newAcc);
  }),

  getUser : query([Principal], Result(User, Error), (id) => {
    if (!id) {
      return Err({BadPayload: "Bad payload"});
    }

    const user = users.get(id);
    if ("None" in user) {
      return Err({NotFound: "User not found"});
    }

    const found : User = user.Some;

    return Ok(found);
  }),

  getHistory: query([Principal], Result(Vec(Data), Error), (id) => {
    if (!id) {
      return Err({BadPayload: "Bad payload"});
    }

    const user = users.get(id);
    if ("None" in user) {
      return Err({NotFound: "User not found"});
    }

    const found : User = user.Some;

    return Ok(found.pdfs);
  }
  ),

  addPDF: update([PDFPayload], Result(Data, Error), (payload) => {
    if (!payload.PDFName || !payload.PDFDesc || !payload.encryptedData || !payload.owner) {
      return Err({BadPayload: "Bad payload"});
    }

    const generateid = Principal.fromText(payload.owner+payload.encryptedData);
    const newPDF : Data = {
      id: generateid,
      PDFName: payload.PDFName,
      PDFDesc: payload.PDFDesc,
      encryptedData: payload.encryptedData,
      owner: payload.owner,
    };

    data.insert(payload.owner, newPDF);

    const user = users.get(payload.owner);
    if ("None" in user) {
      return Err({NotFound: "User not found"});
    }

    const found : User = user.Some;
    found.pdfs.push(newPDF);

    return Ok(newPDF);
  }),

  validate : query([ValidatePayload], Result(Data, Error), (payload) => {
    if (!payload.encrypteddata || !payload.owner) {
      return Err({BadPayload: "Bad payload"});
    }

    const user = users.get(payload.owner);
    if ("None" in user) {
      return Err({NotFound: "User not found"});
    }

    const found : User = user.Some;

    for (let i = 0; i < found.pdfs.length; i++) {
      if (found.pdfs[i].encryptedData === payload.encrypteddata) {
        return Ok(found.pdfs[i]);
      }
    }
    return Err({NotFound: "PDF not found"});
  }),

});


