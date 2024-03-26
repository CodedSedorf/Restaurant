import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { useForm } from "react-hook-form";
import Modal from "./Modal";

const Signup = () => {
    const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    navigate("/")
    // document.getElementById("my_modal_5").close();
  };

  
  return (
    <div className="max-w-md bg-white shadow w-full mx-auto flex item-center justify-center my-14">
      <div className="modal-action flex flex-col justify-center">
        <form
          className="card-body"
          method="dialog"
          onSubmit={handleSubmit(onSubmit)}
        >
            <h3 className="font-bold text-lg text-green">Create an account!</h3>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Firstname</span>
            </label>
            <input
              type="text"
              placeholder="firstName"
              className="input input-bordered"
              {...register("firstName")}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Lastname</span>
            </label>
            <input
              type="text"
              placeholder="lastName"
              className="input input-bordered"
              {...register("lastName")}
            />
          </div>
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
          </div>

          {/* {error message} */}

          {/* {login button} */}
          <div className="form-control mt-6">
            <input
              type="submit"
              value="Signup"
              className="btn bg-green text-white"
            />
          </div>
          <p className="text-center my-2">
            Already have an account?
            <Link to="/">
              <button
                className='btn flex item-center gap-2 rounded-full px-6 bg-green text-white' 
                onClick={()=>document.getElementById('my_modal_5').showModal()}
                >

                Login
                <Modal/>
              </button>
            </Link>
          </p>
        </form>
        <div className="text-center space-mx-3 mb-5">
          <button className="btn btn-circle hover:bg-green hover:text-white">
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
  );
};

export default Signup;
