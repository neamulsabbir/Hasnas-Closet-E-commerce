import React, { useContext, useState } from "react";
import logo from "../../../../Images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../AuthProvider/AuthProvider";
import { toast } from "react-hot-toast";

const SignUp = () => {
  const [passwordErr,setPasswordErr] = useState("")
  const { signUp,updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate()

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    const joiningDate = new Date().toLocaleDateString();
    const userName = name
    const data ={
      name, email, password, joiningDate
    }

    setPasswordErr("")

    if(password !== confirmPassword){
      setPasswordErr("Passwrod not matched")
    }

    signUp(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        if(user){
          toast.success("SignUp successfully")
          const userInfo = {
            displayName : userName
          }
          updateUserProfile(userInfo)
          .then(() => {})
          .catch((err) => console.log(err))
          navigate('/signin')
        }
      })
      .catch((error) => {
        console.log(error);
      });
      
      fetch(`http://localhost:5000/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then( data => console.log(data))
  };

  return (
    <div className="flex flex-col items-center w-11/12 mx-auto h-full my-10">
      <div
        style={{
          boxShadow:
            "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
        }}
        className="bg-white p-7 rounded-md md:w-96"
      >
        <form onSubmit={handleSignUp}>
          <div className="flex flex-col items-center">
            <img className="w-36 mb-5" src={logo} alt="" />
            <div className="text-center">
              <h1 className="text-xl font-bold">Sign Up Now</h1>
              <p className="mb-5">Please fill the details and create account</p>
            </div>
          </div>
          <div className="mb-3">
            <h1 className="font-medium mb-1">Name</h1>
            <input
              className="w-full py-1 px-2 rounded-md border-2 border-gray-300"
              type="text"
              name="name"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-3">
            <h1 className="font-medium mb-1">Email</h1>
            <input
              className="w-full py-1 px-2 rounded-md border-2 border-gray-300"
              type="text"
              name="email"
              placeholder="Enter email"
            />
          </div>
          <div className="mb-3">
            <h1 className="font-medium mb-1">Password</h1>
            <input
              className="w-full py-1 px-2 rounded-md border-2 border-gray-300"
              type="password"
              name="password"
              placeholder="Password"
            />
          </div>
          <div className="mb-3">
            <h1 className="font-medium mb-1">Confirm Password</h1>
            <input
              className="w-full py-1 px-2 rounded-md border-2 border-gray-300"
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
            />
          <div>
              {passwordErr && <p className="text-xs text-red-500 mb-2">{passwordErr}</p>}
            </div>
          </div>
          <input
            className="cursor-pointer text-center bg-black py-2 w-full text-white font-bold mb-3 rounded-md"
            type="submit"
            value="Sign Up"
          />
          <h1 className="text-center text-sm">
            Already have an account?{" "}
            <span>
              <Link className="underline" to="/signin">
                Sign In
              </Link>
            </span>
          </h1>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
