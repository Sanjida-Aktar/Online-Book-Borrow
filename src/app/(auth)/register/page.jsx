'use client';
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const registerPage = () => {
  const {register, handleSubmit, formState: { errors }}= useForm();
  
    const handleRegisterFunc =async(data)=> {
      console.log(data);

    const { data: res, error } = await authClient.signUp.email({
    name: data.name, // required
    phone: data.phone,
    email: data.email,
    password: data.password, // required
    callbackURL: "/",
});
console.log("Response:", res);
console.log("Error:", error);

if (error) {
  alert(error.message);
}
if(res){
  alert("Singup Successfully")
}

console.log("SUCCESS:", res);
    }

    
  return (
    <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100">
      <div className="p-4 rounded-xl bg-white shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6">
          Register Your Account
        </h1>
        <form className="space-y-4"onSubmit={handleSubmit(handleRegisterFunc)}>
            <fieldset className="fieldset">
            <legend className="fieldset-legend font-bold">Enter your Name</legend>
            <input
              type="text"
              className="input"
              placeholder="Type your name"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </fieldset>
            <fieldset className="fieldset">
            <legend className="fieldset-legend font-bold">Add your phone number</legend>
            <input
              type="text"
              className="input"
              placeholder="Type your phone number"
              {...register("phone", { required: "Phone number is required" })}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone.message}</p>
            )}  
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend font-bold">Type your Email</legend>
            <input
              type="email"
              className="input"
              placeholder="Type your email"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend font-bold">Type your Password</legend>
            <input
              type="password"
              className="input"
              placeholder="Type your password"
              {...register("password", { required: "Password is required" } )}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </fieldset>
          <button type="submit" className="btn w-full btn-primary" >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default registerPage;