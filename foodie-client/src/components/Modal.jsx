import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { AuthContext } from "./contexts/AuthProvider";

const Modal = () => {
  const {
    register,
    handleSubmit,
    // watch,
    reset,
    formState: { errors },
  } = useForm();


  //Implementing signinWithGoogle & email&password
  //Go to AuthProvider.jsx to copy the name in the curly braces
  const {signUpWithGoogle, login} = useContext(AuthContext);
  const [errorMessage, seterrorMessage] = useState("")

  //
  //redirecting to home page or specific page
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.pathname || "/"







  const onSubmit = (data) => {
    console.log(data);
    const email = data.email;
    const password = data.password
    // console.log(email, password);
    console.log(email, password)
    login(email, password).then((result)=>{
      const user = result.user;
      alert("login successful")
      document.getElementById("my_modal_5").close();
      navigate(from, {replace: true})
      reset();
    }).catch((error)=>{
      const errorMessage = error.message;
      seterrorMessage("Provide valid email and password")
    })
    // document.getElementById("my_modal_5").close();
  };
  const closebtn = ()=>{
    document.getElementById("my_modal_5").close();
  }
  //onClick of signinWithGoogle button function
  const handlelogin = ()=>{
    signUpWithGoogle()
    .then((result)=>{
      const user = result.user;
      alert("Login successful");
      document.getElementById("my_modal_5").close();
    }).catch((error)=>{
      console.log(error);
    })
  }
  return (
    <dialog id="my_modal_5" className="modal modal-middle sm:modal-middle">
      <div className="modal-box">
        <h3 className="font-bold text-lg text-green">Please login!</h3>
        <div className="modal-action mt-0 flex flex-col justify-center">
          {/* {form} */}
          <form
            className="card-body"
            method="dialog"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              {/* {email} */}
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                {...register("email")}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                {...register("password")}
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>

            {/* {error message} */}
            {
              errorMessage ? <p className="text-red text-xs italic">{errorMessage}</p> : ""
            }

            {/* {login button} */}
            <div className="form-control mt-6">
              <input
                type="submit"
                value="login"
                className="btn bg-green text-white"
              />
            </div>
            <p className="text-center my-2">
              Don't have an account?
              <Link
                to="/signup"
                className="underline text-red ml-1"
                onClick="submit"
              >
                Signup Now
              </Link>
            </p>

            {/* {close button} */}
            <button className="btn btn-sm btn-circle btn-ghost text-black absolute right-2 top-2" onClick={closebtn}>✕</button>
          </form>
          <div className="text-center space-mx-3 mb-5">
            <button className="btn btn-circle hover:bg-green hover:text-white" onClick={handlelogin}>
              <FaGoogle />
            </button>
            <button className="btn btn-circle hover:bg-green hover:text-white">
              <BsFacebook />
            </button>
            <button className="btn btn-circle hover:bg-green hover:text-white">
              <FaGithub />
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
