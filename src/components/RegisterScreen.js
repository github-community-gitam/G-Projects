import React from "react";
import image_1 from "../images/image_1.png";
import github_logo_2 from "../images/github_logo_2.png";
import google_small from "../images/google_small.png";
import github_small from "../images/github_small.png";

export default function RegisterScreen() {
  return (
    <div className="bg-black h-screen w-screen flex place-content-center items-center">
      <div className="bg-white h-4/5 w-2/3 rounded-lg grid grid-cols-2">
        <div className="image-part flex place-content-center items-center ml-16">
          <img src={image_1} style={{ height: "261px", width: "379px" }}></img>
        </div>
        <div className="register-part">
          <img
            className="mx-auto mt-12"
            src={github_logo_2}
            style={{ height: "125px", width: "125px" }}
          ></img>
          <p className="text-left ml-16 text-base font-normal">
            Register with Email
          </p>
          <div className="flex flex-col justify-start ml-16">
            <input
              type="text"
              className="border-2 p-2 mt-3 text-sm w-5/6 rounded"
              placeholder="Name"
            ></input>
            <input
              type="text"
              className="border-2 p-2 mt-3 text-sm w-5/6 rounded"
              placeholder="Email"
            ></input>
            <input
              type="text"
              className="border-2 p-2 mt-3 text-sm w-5/6 rounded"
              placeholder="Password"
            ></input>
          </div>
          <button className="bg-black text-white font-medium px-8 py-1.5 rounded my-4">
            Register
          </button>
          <p className="text-left ml-16 text-base font-normal">
            Register with Social
          </p>
          <div className="socials text-slate-500 flex justify-center mt-2">
            <button className="flex text-xs mr-8 shadow-lg p-1">
              <img
                src={google_small}
                style={{ height: "25px", width: "25px" }}
              ></img>
              <div className="mt-1">Register in with Google</div>
            </button>
            <button className="flex text-xs shadow-lg p-1">
              <img
                src={github_small}
                style={{ height: "23px", width: "23px" }}
              ></img>
              <div className="mt-1">Register in with GitHub</div>
            </button>
          </div>
          <div className="flex justify-start ml-16 mt-4 text-slate-500">
            Already have an account? <u><a href="/login">Login</a></u>
          </div>
        </div>
      </div>
    </div>
  );
}
