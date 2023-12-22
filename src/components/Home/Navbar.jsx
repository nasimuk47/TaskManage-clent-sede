import { Link } from "react-router-dom";
import Placeholder from "../../assets/photo/placeholder.jpg";
import { useContext } from "react";
import { AuthContext } from "../Security/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {})
            .catch((error) => console.log(error));
    };

    const navOptions = (
        <>
            <li className="active:btn  text-lg  text-black  btn-info tpy-2 px-3">
                <Link to="/">Home</Link>
            </li>
            <li className="active:btn text-lg range-lg  text-black  tpy-2 px-3">
                <Link to="/About">About</Link>
            </li>
            <li className="active:btn text-lg  text-black tpy-2 px-3">
                <Link to="/Contact">Contact</Link>
            </li>
        </>
    );

    return (
        <>
            <div className="navbar fixed  z-10 bg-opacity-30 w-[1280px] h-[90px]  text-black">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-compact z-40 bg-white dropdown-content mt-3 p-2 shadow  rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">{navOptions}</ul>
                </div>
                <div className="navbar-end">
                    {user ? (
                        <div className="dropdown dropdown-end relative">
                            <label
                                tabIndex="0"
                                className="  btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                        alt="User Profile"
                                        src={user.photoURL || Placeholder}
                                    />
                                </div>
                            </label>
                            <ul className="menu menu-sm dropdown-content z-40 mt-3 p-2 shadow bg-base-100 rounded-box w-52 absolute right-0">
                                <li>
                                    <span className="flex justify-center text-xl font-bold">
                                        {user?.displayName}
                                    </span>
                                </li>
                                {user && (
                                    <>
                                        <li>
                                            <Link
                                                to="/dashboard"
                                                className="btn btn-ghos tpy-2 px-4">
                                                Dashboard
                                            </Link>
                                        </li>
                                        <li>
                                            <button
                                                onClick={handleLogOut}
                                                className="btn btn-ghos tpy-2 px-4">
                                                LogOut
                                            </button>
                                        </li>
                                    </>
                                )}
                            </ul>
                        </div>
                    ) : (
                        <label
                            tabIndex="0"
                            className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="User Profile" src={Placeholder} />
                            </div>
                        </label>
                    )}
                </div>
            </div>
        </>
    );
};

export default Navbar;
