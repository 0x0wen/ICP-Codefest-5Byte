"use client";
import { useState } from "react";
import { Fab } from "@mui/material";
import Image from "next/image";
import Validate from "../../../public/assets/icons/Validate.png";
import Close from "../../../public/assets/icons/ClosePurple.svg";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import UploadIcon from "../../../public/assets/icons/Upload.svg";
import { useEffect } from "react";
import { useAuth } from "../authContext";
import { makeAzleActor } from "../../service/actor";
import { _SERVICE as AZLE } from "../../azle/declarations/dfx_generated/azle.did";
import { Principal } from "@dfinity/principal";
const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

interface User {
  id: Principal;
  docssigned: bigint;
  docsvalidated: bigint;
  name: string;
  pdfs: PDF[];
}

interface PDF {
  owner: Principal;
  PDFDesc: string;
  PDFName: string;
  encryptedData: string;
}
const Validation = ({
  styling,
  onClose,
}: {
  styling: string;
  onClose: () => void;
}) => {
  const { isAuthenticated, principal, login } = useAuth();
  const [selectedFile, setSelectedFile] = useState<File>();
  const [selectedUser, setSelectedUser] = useState<Principal | null>(null);
  const [publisher, setPublisher] = useState("");
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState<User[]>([]);
  const submitHandler = (e: any) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const azle: AZLE = await makeAzleActor();
        const users = await azle.getUsers();
        console.log(users);
        if ("Ok" in users) {
          setUsers(users.Ok);
        }
      } catch (error) {
        return;
      }
    };

    fetchData();
  }, [isAuthenticated, principal, login]);
  return (
    <div
      className={` fixed bottom-0 right-0  bg-white  transition-all z-[99999] duration-500 overflow-y-auto ${styling} `}
    >
      <button onClick={onClose} className="absolute top-5 right-5 w-10">
        <Image src={Close} alt="" />
      </button>
      <section className="py-10 px-10">
        <h1 className="text-4xl font-bold text-color2">Validate Document</h1>
        <p className="w-[60%]">
          On this platform, you can verify digitally signed documents. Check if
          a document you find online is authentic or not!
        </p>
      </section>
      <form onSubmit={submitHandler}>
        <ul className="py-10 px-10 flex gap-10 ">
          <li className="space-y-5">
            <div className="flex items-center gap-5">
              <div className="w-10 aspect-square font-semibold text-color2 border-2 border-color2 rounded-full flex justify-center items-center">
                1
              </div>
              <h2 className="font-semibold text-color2">Upload the document</h2>
            </div>
            <div className="w-[30rem] h-96 border border-color7 rounded-lg flex items-center justify-center">
              <Button component="label" className="w-full h-full">
                {selectedFile ? (
                  <div className="text-justify">
                    <h2>Name: {selectedFile.name}</h2>
                    <h2>Type: {selectedFile.type}</h2>
                    <h2>Size: {selectedFile.size}</h2>
                  </div>
                ) : (
                  <Image src={UploadIcon} alt="" />
                )}
                <VisuallyHiddenInput
                  type="file"
                  onChange={(e) => {
                    if (!e.target.files) return;
                    setSelectedFile(e.target.files[0]);
                  }}
                />
              </Button>
            </div>
          </li>
          <li className="space-y-5">
            <div className="flex items-center gap-5">
              <div className="w-10 aspect-square font-semibold text-color2 border-2 border-color2 rounded-full flex justify-center items-center">
                2
              </div>
              <h2 className="font-semibold text-color2">
                Choose the publisher
              </h2>
            </div>

            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={users.map((user) => user.id)}
              getOptionLabel={(user) =>
                users.find((u) => u.id === user)?.name || ""
              }
              sx={{ width: 300 }}
              value={selectedUser}
              onChange={(_, newValue) => setSelectedUser(newValue)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Publisher"
                  required
                  onChange={(e) => setPublisher(e.target.value)}
                />
              )}
              noOptionsText={users.length === 0 ? "No users yet" : "No options"}
            />
          </li>
          <li className="space-y-5">
            <div className="flex items-center gap-5">
              <div className="w-10 aspect-square font-semibold text-color2 border-2 border-color2 rounded-full flex justify-center items-center">
                3
              </div>
              <h2 className="font-semibold text-color2">Check document</h2>
            </div>

            <Button
              variant="outlined"
              className="border-color3 bg-color2 text-white hover:border-color3 hover:bg-color2 hover:bg-opacity-80 mx-auto"
              type="submit"
            >
              Check
            </Button>
          </li>
        </ul>
      </form>
    </div>
  );
};

const ValidationButton = () => {
  const [open, setOpen] = useState(false);
  const onOpen = () => {
    setOpen(true);
    document.body.style.overflow = "hidden";
  };
  const onClose = () => {
    setOpen(false);
    document.body.style.overflow = "unset";
  };
  const styling = open
    ? " w-full h-full rounded-none "
    : " h-0 w-0  rounded-lt-xl ";
  return (
    <>
      <Fab
        variant="extended"
        className="text-color2 space-x-2 fixed bottom-10 right-10 bg-white"
        onClick={onOpen}
      >
        <Image src={Validate} alt="" className="w-8" />
        <p>VALIDATE</p>
      </Fab>
      <Validation styling={styling} onClose={onClose} />
    </>
  );
};

export default ValidationButton;
