import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="bg-white-800 nav-col">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="navbar-brand">Capstone Project Portal</div>
            <div className="flex items-center">
              <div className="flex-shrink-0"></div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link
                    to="/resetpassword"
                    className="text-white px-3 py-2 rounded-md text-sm font-medium"
                  > 
                    Reset Password
                  </Link>
                  <Link
                    to="/displaycourse"
                    className="text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Display Project Course
                  </Link>
                  <Link
                    to="/updatefaculty"
                    className="text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Update/Delete Faculty List
                  </Link>
                  <Link
                    to="/displayfaculty"
                    className=" text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Display Faculty List
                  </Link>
                  <Link
                    to="/insertfaculty"
                    className=" text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Insert Faculty List
                  </Link>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                <svg
                  class="fill-current h-3 w-3"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
              </button>
              {/* <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-white-900 inline-flex items-center justify-center p-2 rounded-md text-white-400 "
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button> */}
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                    to="/insertfaculty"
                    className=" text-white block px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Insert Faculty List
                  </Link>

                  <Link
                    to="/displayfaculty"
                    className=" text-white block px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Display Faculty List
                  </Link>

                  <Link
                    to="/updatefaculty"
                    className="text-white block px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Update/Delete Faculty List
                  </Link>

                  <Link
                    to="/displaycourse"
                    className="text-white block px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Display Project Course
                  </Link>

                  <Link
                    to="/"
                    className="text-white block px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Circulars
                  </Link>
                  <Link
                    to="/resetpassword"
                    className="text-white block px-3 py-2 rounded-md text-sm font-medium"
                  > 
                    Reset Password
                  </Link>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Navbar;
