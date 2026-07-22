"use client";

import Link from "next/link";
import Navlink from "./Navlink";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="navbar py-3">
          {/* Navbar Start */}
          <div className="navbar-start">
            {/* Mobile Menu */}
            <div className="dropdown lg:hidden">
              <div tabIndex={0} role="button" className="btn btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </div>

              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[100] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Navlink href="/">Home</Navlink>
                </li>

                <li>
                  <Navlink href="/books">All Books</Navlink>
                </li>

                <li>
                  <Navlink href="/profile">My Profile</Navlink>
                </li>

                {!user && (
                  <li>
                    <Navlink href="/login">Login</Navlink>
                  </li>
                )}
              </ul>
            </div>

            {/* Logo */}
            <Link
              href="/"
              className="text-2xl md:text-3xl font-extrabold text-emerald-600"
            >
              BookLibrary
            </Link>
          </div>

          {/* Desktop Menu */}
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

          {/* Navbar End */}
          <div className="navbar-end flex items-center gap-2 md:gap-4">
            {user ? (
              <>
                <div className="avatar">
                  <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
                    <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
                  </div>
                </div>

                <p className="hidden md:block font-medium">{user?.name}</p>

                <button
                  className="btn btn-error btn-sm md:btn-md rounded-2xl"
                  onClick={async () => await authClient.signOut()}
                >
                  Logout
                </button>
              </>
            ) : (
              <Link href="/login">
                <button className="btn btn-outline btn-success btn-sm md:btn-md">
                  Login
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
