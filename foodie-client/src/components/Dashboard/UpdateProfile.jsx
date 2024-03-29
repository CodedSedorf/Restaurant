import React, { useContext } from "react";
import { useForm } from "react-hook-form"
import { AuthContext } from "../contexts/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const UpdateProfile = () => {
    const {updateUserProfile} = useContext(AuthContext)
    const {
        register,
        handleSubmit,
        // watch,
        formState: { errors },
      } = useForm()

      const navigate = useNavigate();
      const location = useLocation()
      const from = location.state?.pathname || "/"

      const onSubmit = (data) => {
        const name = data.name;
        const photoURL = data.photoURL;
        updateUserProfile(name, photoURL).then(() => {
            // Profile updated!
            console.log(data);
            alert("Profile updated!")
            navigate("/")
            window.location.reload()
            // navigate(from, {replace:true})

            // ...
          }).catch((error) => {
            alert("An error occurred")
            // An error occurred
            // ...
            console.log(error.message);
          });
      }
  return (
    <div className="flex items-center h-screen justify-center">
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
            <h3 className="font-bold">Update your profile</h3>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="your name"
              className="input input-bordered"
              required
              {...register("name")}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Upload photo</span>
            </label>
            <input
              type="text"
              placeholder="photoURL"
              className="input input-bordered"
              required
              {...register("photoURL")}
            />
          </div>
          {/* {Temporary for uploading image until backend is set up} */}
          <input type="file" className="file-input w-full max-w-xs" />
          <div className="form-control mt-6">
            <button className="btn bg-green text-white">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
