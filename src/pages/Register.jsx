import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { ContextValue } from "../context/ContextValue";

const Register = () => {
  const {
    registerUser,
    setLoading,
    updateUser
  } = useContext(ContextValue);

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');


  const navigate = useNavigate()

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoUrl = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;

    setSuccess(false);
    setError('')

    registerUser(email, password).then(() => {
        // user registered successfully
        setSuccess(true);
        setLoading(false);
        updateUser({ displayName: name, photoURL: photoUrl })
        .then(() => {
          navigate("/category/0");
        }).catch((error) => {
          console.log(error);
        });

      })
      .catch((error) => {
        setError(error?.message);
      });

  };


  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto py-12">
      <div className="card-body">
        <h1 className="text-5xl font-bold">Register now!</h1>
        <form onSubmit={handleRegister} className="fieldset">
          <label className="label">Name</label>
          <input type="text" name="name" className="input" placeholder="Name" />
          <label className="label">Photo URL</label>
          <input
            type="text"
            name="photoUrl"
            className="input"
            placeholder="Photo Url"
          />
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
          />
          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            className="input"
            placeholder="Password"
          />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">register</button>
        </form>
        <p>
          Already have an account ? Please{" "}
          <Link to={"/login"} className="text-green-500">
            login
          </Link>{" "}
          here{" "}
        </p>
        <p>{error ? error : ""}</p>
        <p>{success && "User have registered successfully"}</p>
      </div>
    </div>
  );
};

export default Register;
