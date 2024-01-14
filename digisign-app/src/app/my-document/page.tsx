"use client";
import SearchBar from "../components/forms/SearchBar";
import Document from "../dashboard/Document";
import { makeAzleActor } from "../../service/actor";
import { _SERVICE as AZLE } from "../../azle/declarations/dfx_generated/azle.did";
import { useEffect, useState } from "react";
import { useAuth } from "../authContext";

const MyDocument = () => {
  const [query, setQuery] = useState("");
  const [documentData, setDocumentData] = useState<string[]>([]);
  const { principal, isAuthenticated, login } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const azle: AZLE = await makeAzleActor();
        const users = await azle.getUser(principal);
        console.log(users);
        if ("Ok" in users) {
          const pdfNames = users.Ok.pdfs.map((pdf) => pdf.PDFName);
          setDocumentData(pdfNames);
        }
      } catch (error) {
        return;
      }
    };

    fetchData();
  }, [isAuthenticated, principal, login]);
  const searchHandler = (searchWord: string) => {
    setQuery(searchWord);
  };
  const filteredSearchData = documentData.filter((document) =>
    document.toLowerCase().includes(query)
  );
  return (
    <div className="ml-72 px-10 pt-10 pb-20 h-fit space-y-10">
      <h1 className="text-4xl font-bold text-color2">My Documents</h1>
      <SearchBar onSearch={searchHandler}/>
      <section className="grid grid-cols-1 gap-2 mt-10 w-full place-items-end">
        {filteredSearchData.length === 0 ? (
          <p>No documents data yet</p>
        ) : (
          <>
            {filteredSearchData.map((doc, index) => (
              <Document key={index} name={doc} />
            ))}
          </>
        )}
      </section>
    </div>
  );
};

export default MyDocument;
