"use client"
import Link from "next/link";
import Navlink from "./Navlink";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const {data: session} = authClient.useSession();
  const user = session?.user;
  console.log(user,"user");
  return (
    <nav className="bg-white shadow-sm container mx-auto">
      <div className="container mx-auto px-6">
        <div className="navbar py-3">

          {/* Logo */}
          <div className="navbar-start">
            <Link
              href="/"
              className="text-3xl font-extrabold text-emerald-600"
            >
              BookLibrary
            </Link>
          </div>

          {/* Nav Links */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal gap-6 text-lg font-medium">
              <li>
                <Navlink href="/">Home</Navlink>
              </li>

              <li>
                <Navlink href="/books">All Books</Navlink>
              </li>

              <li>
                <Navlink href="/profile">My Profile</Navlink>
              </li>
            </ul>
          </div>

     {user?     <div className="navbar-end flex items-center gap-4">
            <div className="avatar">
  <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
    <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
  </div>
</div>
            <button className="btn btn-error rounded-2xl" onClick={async()=>await authClient.signOut()}>Logout</button>

          </div>:
(
  <div className="navbar-end gap-3">
    <Link href="/login">
            <button className="btn btn-outline btn-success">
              Login
            </button>
            </Link>
  </div>
)}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;