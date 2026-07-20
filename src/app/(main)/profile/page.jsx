"use client";
import Navbar from "@/components/shared/Navbar";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React from "react";

const profilePage = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  console.log(user);

  return (
    <>
      <Navbar></Navbar>
      <div>
        <div className="card w-96 bg-base-100 card-xs drop-shadow-lg mx-auto flex flex-col items-center mt-10 p-8">
          <div className="avatar">
            <div className="ring-primary ring-offset-base-100 w-20 rounded-full ring-2 ring-offset-2">
              <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
            </div>
          </div>
          <h2 className="text-2xl font-bold">{user?.name}</h2>
          <h2 className="text-gray-700">{user?.email}</h2>
          <Link href="/profile/update">
    <button className="btn btn-primary mt-3 rounded-3xl">
        Update Information
    </button>
</Link>
        </div>
      </div>
    </>
  );
};

export default profilePage;
