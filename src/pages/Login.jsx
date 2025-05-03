import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { ContextValue } from '../context/ContextValue';

const Login = () => {

  const {loginUser} = useContext(ContextValue);
  const location = useLocation();
  const navigate = useNavigate();

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

    const handleLogin = e => {
        e.preventDefault();
        const form =  e.target;
        const email = form.email.value;
        const password = form.password.value;
        setSuccess(false);
        setError('')
        
        loginUser(email, password)
        .then(()=>{
        setSuccess(true);
        navigate(location.state ? location.state : "/category/0")
        })
        .catch(error => {
        setError(error.message)
        })

    }
    return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto py-12">  
      <div className="card-body">
      <h1 className="text-5xl font-bold">Login now!</h1>
        <form onSubmit={handleLogin} className="fieldset">
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </form>
        <p>New to our site ? Please <Link to={'/register'} className='text-green-500'>register</Link> here </p>
        {/* <p className={`${notification.includes("success") ? "text-green-400" : "text-red-400"}`}>{notification? notification : ""}</p> */}
      {success ? <p>user logged in successfully</p> : ""}
      {error && <p>{error}</p>}
      </div>
    </div>
    );
};

export default Login;