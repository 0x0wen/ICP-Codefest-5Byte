"use client";
import Scroll from "./Scroll";
import { useState, useCallback, useEffect } from "react";
import { useAuth } from "../../authContext";
import { makeAzleActor } from "../../../service/actor";
import { _SERVICE as AZLE } from "../../../azle/declarations/dfx_generated/azle.did";

import { Button } from "@mui/material";
import ICLogo from "../../../../public/assets/icons/ic-logo.png";
import Image from "next/image";
import DigiSignLogo from "../../../../public/assets/icons/DigiSignID.png";
import { Link } from "react-scroll";
import { useRouter } from "next/navigation";
import Roll from "../../../../public/assets/icons/Roll.png";
import Home from "../../../../public/assets/icons/Home.png";
import Signature from "../../../../public/assets/icons/Signature.png";
import Logout from "../../../../public/assets/icons/Out.png";
import Links from "next/link";

const Navbar = () => {
  const [navbarBG, setNavbarBG] = useState(false);
  const { isAuthenticated, login, logout, principal } = useAuth();
  const router = useRouter();

  const setColoredNavbar = useCallback(() => {
    setNavbarBG(true);
  }, []);

  const setTransparentNavbar = useCallback(() => {
    setNavbarBG(false);
  }, []);

  const handleLoginClick = () => {
    if (isAuthenticated) {
      logout();
    } else {
      login();
      router.push("/revalidate");
    }
  };

  return isAuthenticated ? (
    <div className="text-white bg-color5 fixed left-0 h-full z-50 w-72">
      <div className="grid grid-cols-1 place-items-center">
        <h2 className="font-bold mx-auto py-4 text-2xl">DigiSignID</h2>
        <ul className="grid grid-cols-1 place-items-center gap-2 mt-20">
          <li>
            <Links
              href="/dashboard"
              className="bg-white bg-opacity-20 w-60 flex items-center gap-4 rounded-md"
            >
              <Image src={Home} alt="" />
              <p>Dashboard</p>
            </Links>
          </li>
          <li>
            <Links
              href="/signature"
              className="bg-white bg-opacity-20 w-60 flex items-center gap-4 rounded-md"
            >
              <Image src={Signature} alt="" />
              <p>Signature</p>
            </Links>
          </li>
          <li>
            <Links
              href="/my-document"
              className="bg-white bg-opacity-20 w-60 flex items-center gap-4 rounded-md"
            >
              <Image src={Roll} alt="" />
              <p>My Documents</p>
            </Links>
          </li>
        </ul>
      </div>
      <Links
        href="/"
        className="absolute left-1/2 bottom-5 -translate-x-1/2 flex items-center gap-4 w-60 border border-white border-opacity-50 rounded-md"
        onClick={(e) => {
          // Your custom logout logic here
          e.preventDefault(); // Prevent the default navigation behavior
          logout();
          // Add your logout logic here
        }}
      >
        <Image src={Logout} alt="" />
        <p>Log out</p>
      </Links>
    </div>
  ) : (
    <ul
      className={
        navbarBG
          ? "fixed w-full top-0 z-50 flex justify-evenly items-center text-white  bg-gradient-to-r from-color5 via-color2  to-color3 bg-opacity-70"
          : "fixed w-full top-0 z-50 flex justify-evenly items-center text-white "
      }
    >
      <Scroll colored={setColoredNavbar} transparent={setTransparentNavbar} />
      <li>
        <Link to={"/"} className="  text-xl px-4 py-2 rounded-lg">
          <Image src={DigiSignLogo} alt="" className="w-32" />
        </Link>
      </li>
      <li>
        <Link
          duration={1000}
          to="usp"
          smooth={true}
          className="bg-white bg-opacity-0 hover:bg-opacity-100 hover:text-color2 cursor-pointer text-lg  px-4 py-2 rounded-md"
        >
          Why Us?
        </Link>
      </li>
      <li>
        <Link
          duration={1000}
          to="features"
          smooth={true}
          className="bg-white bg-opacity-0 hover:bg-opacity-100 hover:text-color2 cursor-pointer text-lg  px-4 py-2 rounded-md"
        >
          Features
        </Link>
      </li>
      <li>
        <Link
          duration={1000}
          to="plan"
          smooth={true}
          className="bg-white bg-opacity-0 hover:bg-opacity-100 hover:text-color2 cursor-pointer text-lg  px-4 py-2 rounded-md"
        >
          Plan
        </Link>
      </li>
      <li>
        <Link
          duration={1000}
          to="footer"
          smooth={true}
          className="bg-white bg-opacity-0 hover:bg-opacity-100 hover:text-color2 cursor-pointer text-lg  px-4 py-2 rounded-md"
        >
          Contact us
        </Link>
      </li>
      <li>
        <Button
          onClick={handleLoginClick}
          className="bg-white hover:text-color2 shadow-lg drop-shadow-xl hover:bg-slate-100 px-5"
        >
          {isAuthenticated ? (
            <>
              Logout&nbsp;
              <Image src={ICLogo} alt="" className="w-8" />
            </>
          ) : (
            <>
              Login&nbsp;
              <Image src={ICLogo} alt="" className="w-8" />
            </>
          )}
        </Button>
      </li>
    </ul>
  );
};

export default Navbar;
