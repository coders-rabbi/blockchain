import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo/sanna coin.png";

const NavBar = () => {
  const NavItems = (
    <>
      <li>
        <Link>Home</Link>
      </li>
      <li>
        <Link>Download</Link>
      </li>
      <li>
        <Link>Coin Market</Link>
      </li>
      <li>
        <Link>Login</Link>
      </li>
      <li>
        <Link>Register</Link>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {NavItems}
            </ul>
          </div>
          <div>
            <Link className="flex items-center gap-2">
              <img className="h-16" src={logo} alt="" />
              <span className="text-5xl font-semibold font-serif">Coin</span>
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{NavItems}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
