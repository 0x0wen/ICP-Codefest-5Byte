// Import necessary dependencies
"use client";
import { useEffect, useState } from "react";
import { useAuth } from "../authContext";
import { makeAzleActor } from "../../service/actor";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

// Your existing `addUser` function

// Your component
const AddUserPage = () => {
  const router = useRouter();
  const { principal, isAuthenticated } = useAuth();
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const azle = await makeAzleActor();
        const exist = await azle.getUser(principal);
        if ("Ok" in exist) {
          router.push("/dashboard");
          
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [principal, isAuthenticated]);

  const addUser = async (username: string, principal: any) => {
    try {
      const azle = await makeAzleActor();
      const exist = await azle.getUser(principal);
      if (!("Ok" in exist)) {
        const user = await azle.createUser({
          id: principal,
          name: username,
        });
        if ("Ok" in user) {
          console.log("User added successfully!");
          router.push("/dashboard");
          
        }
      }
    } catch (err) {
      console.log(err);
    }
  };
  const handleButtonClick = () => {
    // Trigger the addUser function with the principal value
    addUser(inputValue, principal);
  };

  return (
    <div className="ml-72 px-10 pt-10 pb-20 h-fit">
      <h1 className="text-4xl font-bold text-color2">Add User</h1>
      <section className="flex gap-5 py-10">
        <div className="w-full space-y-2 bg-gradient-to-br from-color2 to-color3 shadow-md shadow-color2 p-4 rounded-md">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter username..."
            className="w-full h-12 border border-gray-300 p-2 rounded-md mb-4"
          />
          <button
            onClick={handleButtonClick}
            className="bg-blue-500 text-white p-2 rounded-md cursor-pointer"
          >
            Add User
          </button>
        </div>
      </section>
    </div>
  );
};

export default AddUserPage;
