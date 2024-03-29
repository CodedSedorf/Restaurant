import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { useForm } from "react-hook-form";
import Modal from "./Modal";
import { AuthContext } from "./contexts/AuthProvider";

const Signup = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm();

  const { createUser, sendEmailVerificationToCurrentUser } = useContext(
    AuthContext
  );

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    createUser(email, password).then((result) => {
      sendEmailVerificationToCurrentUser();
      // Signed up
      const user = result.user;
      alert("signup successful");
      navigate("/");
        document.getElementById("my_modal_5").close();
      // ...
    })
    .catch((error) => {
      // const errorCode = error.code;
      // const errorMessage = error.message;
      // ..
    });
      // .then(() => {
      //   // Send email verification after user creation
      //   sendEmailVerificationToCurrentUser();
      //   alert("Signup successful. Please verify your email.");
      //   navigate("/");
      //   document.getElementById("my_modal_5").close();
      // })
      // .catch((error) => {
      //   console.log(error);
      //   // Handle error
      //   // For example, display an error message to the user
      //   alert("Signup failed. Please try again.");
      // });
  };

  const handlePasswordChange = async () => {
    await trigger("password");
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
          {/* Form inputs */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">First Name</span>
            </label>
            <input
              type="text"
              placeholder="First Name"
              className="input input-bordered"
              {...register("firstName", { required: true })}
            />
            {errors.firstName && (
              <span className="text-red-500">First Name is required</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Last Name</span>
            </label>
            <input
              type="text"
              placeholder="Last Name"
              className="input input-bordered"
              {...register("lastName", { required: true })}
            />
            {errors.lastName && (
              <span className="text-red-500">Last Name is required</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-red-500">Email is required</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered"
              {...register("password", { required: true, minLength: 8 })}
              onChange={handlePasswordChange}
            />
            {errors.password && (
              <span className="text-red-500">
                Password is required (min 8 characters)
              </span>
            )}
          </div>
          {/* Submit button */}
          <div className="form-control mt-6">
            <input
              type="submit"
              value="Signup"
              className="btn bg-green text-white"
            />
          </div>
          {/* Link to login */}
          <p className="text-center my-2">
            Already have an account?{" "}
            <Link to="/">
              <button className="btn flex items-center gap-2 rounded-full px-6 bg-green text-white">
                Login <Modal />
              </button>
            </Link>
          </p>
        </form>
        {/* Social login buttons */}
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
