import React from "react";
import left_1 from "../images/left_1.png";
import github_logo from "../images/GITHUB.png";
import google_icon from "../images/google_icon.svg";
import github_icon from "../images/github_icon.svg"

function LoginScreen() {
    return(
        <div className="bg-black h-screen w-screen flex place-content-center items-center">
            <div className="bg-white h-4/5 w-2/3 rounded-lg grid grid-cols-2">
                <div className="image-part flex place-content-center items-center ml-16">
                    <img src={left_1} style={{height:"299px", width:"418px"}} alt="img"/>
                </div>
                <div className="login-part">
                    <img className="mx-auto mt-16" src={github_logo} style={{height:"145px", width:"145px"}} alt="logo"/>
                    <p className="text-left ml-16 text-base font-poppins">Login With Email</p>
                    <form action="" className="space-y-6">
                    <div className="flex flex-col justify-start ml-16">
                          <input type="email" placeholder="Email" className="border-2 p-2 mt-3 text-sm w-5/6 rounded" required/>
                    </div>

                    <div className="flex flex-col justify-start ml-16">
                        <input type="password" placeholder="Password" className="border-2 p-2 mt-3 text-sm w-5/6 rounded" required/>
                    </div>
                    <div>
                        <button className="bg-black text-white font-Roboto px-8 py-1 rounded">
                          Login
                        </button>

                    </div>
                </form>
                
          <p className="text-left ml-16 text-base font-normal">
            Login with Social
          </p>
          <div className="text-slate-500 flex justify-center mt-2">
            <button className="flex text-xs mr-8 shadow-lg p-1">
              <img src={google_icon} className="mt-4"  alt="google_icon"/>
              <span className="mt-7">Sign in with Google</span>
            </button>
            <button className="flex text-xs shadow-lg p-1">
              <img src={github_icon} className="mt-5" style={{ height: "23px", width: "23px" }} alt="github_icon"/>
              <div className="mt-6">Sign in with GitHub</div>
            </button>
          </div>
          <div className="flex justify-start ml-16 mt-4 text-slate-500">
          Don't have an account? <u><a href="/register">Register</a></u>
          </div>
        </div>
      </div>
    </div>
  )
}
export default LoginScreen;