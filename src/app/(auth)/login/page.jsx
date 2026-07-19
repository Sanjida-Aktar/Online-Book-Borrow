'use client';
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const loginPage = () => {
  const {register, handleSubmit, formState: { errors }}= useForm();
  
    const handleLoginFunc =async(data)=> {
      console.log(data);
      const { data:res, error } = await authClient.signIn.email({
    email: data.email, // required
    password: data.password, // required
    rememberMe: true,
    callbackURL: "/",
});
console.log(res,error)
    }
  return (
    <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100">
      <div className="p-4 rounded-xl bg-white shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6">
          Login Your Account
        </h1>
        <form className="space-y-4"onSubmit={handleSubmit(handleLoginFunc)}>
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
            Login
          </button>
        </form>
        <p className="text-center mt-4"> Don't have an account?
          <Link href="/register" className="text-blue-500 hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default loginPage;