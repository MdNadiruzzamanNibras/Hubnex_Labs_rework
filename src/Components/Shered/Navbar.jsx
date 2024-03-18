import logo from "../../assets/images/logo/logo.png";

const Navbar = () => {
  return (
    <div className="navbar mt-2">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li className="hover:text-custom-purple text-gray-400 cursor-pointer px-4 text-lg">
              Talent Finder
            </li>
            <li className="hover:text-custom-purple cursor-pointer text-gray-400 px-4 text-lg">
              For Recruiters
            </li>
            <li className="hover:text-custom-purple text-gray-400 cursor-pointer px-4 text-lg">
              For Employers
            </li>
            <li className="hover:text-custom-purple text-gray-400 cursor-pointer px-4 text-lg">
              About Us
            </li>
            <li className="hover:text-custom-purple text-gray-400 cursor-pointer px-4 text-lg">
              Company
            </li>
          </ul>
        </div>
        <img src={logo} alt="" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1  font-bold ">
          <li className="hover:text-custom-purple text-gray-400 cursor-pointer px-4 text-lg">
            Talent Finder
          </li>
          <li className="hover:text-custom-purple text-gray-400 cursor-pointer px-4 text-lg">
            For Recruiters
          </li>
          <li className="hover:text-custom-purple text-gray-400 cursor-pointer px-4 text-lg">
            For Employers
          </li>
          <li className="hover:text-custom-purple text-gray-400 cursor-pointer px-4 text-lg">
            About Us
          </li>
          <li className="hover:text-custom-purple text-gray-400 cursor-pointer px-4 text-lg">
            Company
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <button className="rounded-lg px-8 py-2 text-xl mr-9 text-custom-purple border-2 border-custom-purple">
          Log In
        </button>
        <button className="rounded-xl px-8 py-3 text-xl bg-custom-purple text-white">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Navbar;
