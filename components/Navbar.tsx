import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      {/* Menue Items */}
      {isOpen && (
        <div className="fixed z-10 w-screen h-full bg-black opacity-80">
          <div>
            <svg
              onClick={() => setIsOpen(false)}
              className="absolute opacity-100 fill-white top-4 right-4"
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              viewBox="0 0 24 24"
            >
              <path d="M21 5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5zm-4.793 9.793-1.414 1.414L12 13.414l-2.793 2.793-1.414-1.414L10.586 12 7.793 9.207l1.414-1.414L12 10.586l2.793-2.793 1.414 1.414L13.414 12l2.793 2.793z"></path>
            </svg>
          </div>
          <div className="flex flex-col items-center justify-center h-full gap-4">
            <Link href="/">
              <a className="text-2xl text-white underline decoration-sea-300">
                Home
              </a>
            </Link>
            <Link href="/">
              <a className="text-2xl text-white underline decoration-sea-300">
                Login
              </a>
            </Link>
          </div>
        </div>
      )}

      <div className="flex justify-between px-3 py-4">
        <Link href="/">
          <a className="text-2xl dark:font-light dark:text-white">
            Time Submit
          </a>
        </Link>
        {!isOpen && (
          <svg
            onClick={() => setIsOpen(true)}
            className=" dark:fill-white"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
          </svg>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
