/* eslint-disable no-unused-vars */
import React from "react";
import teem1 from "../../assets/banner/teem1Girl.jpg";
import teem2 from "../../assets/banner/team2.jpg";
import teem3 from "../../assets/banner/teem3.jpg";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const OurTeam = () => {
    return (
        <div className="mb-7">
            <div className="text-center w-[50%] mx-auto">
                <h1 className="text-3xl font-bold">Our Team</h1>
                <p className="font-bold mt-2">
                    We have a team of professionals, dedicated to providing
                    excellent service to ensure the enjoyment of your vacation.
                </p>
            </div>

            <div className="flex flex-wrap gap-9 mt-10 ml-10">
                <div className="relative">
                    <div className="card w-[350px] h-[500px]  bg-base-100 rounded-none shadow-xl">
                        <figure>
                            <img
                                className="w-full h-[650px]   object-cover"
                                src={teem1}
                                alt="Package Image"
                            />
                        </figure>

                        <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center bg-base-200 w-[300px] ">
                            <div className="card-body flex flex-col items-center">
                                <p className="text-2xl font-bold">
                                    jolea jones
                                </p>
                                <p className="font-serif">marketing</p>

                                <div className="flex gap-3">
                                    <Link to="https://web.facebook.com/profile.php?id=100065618652112">
                                        {" "}
                                        <FaFacebook className="text-2xl text-blue-500"></FaFacebook>
                                    </Link>
                                    <Link to="https://www.instagram.com">
                                        {" "}
                                        <FaInstagram className="text-2xl text-red-500"></FaInstagram>
                                    </Link>
                                    <Link to=" https://twitter.com/?lang=en">
                                        {" "}
                                        <FaTwitter className="text-2xl text-blue-500"></FaTwitter>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <div className="card w-[350px] h-[500px] bg-base-100 rounded-none shadow-xl">
                        <figure>
                            <img
                                className="w-full h-[650px] object-cover"
                                src={teem2}
                                alt="Package Image"
                            />
                        </figure>

                        <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center bg-base-200 w-[300px] ">
                            <div className="card-body flex flex-col items-center">
                                <p className="text-2xl font-bold">
                                    Recadro anje
                                </p>
                                <p className="font-serif">Tour oparator</p>

                                <div className="flex gap-3">
                                    <Link to="https://web.facebook.com/profile.php?id=100065618652112">
                                        {" "}
                                        <FaFacebook className="text-2xl text-blue-500"></FaFacebook>
                                    </Link>
                                    <Link to="https://www.instagram.com">
                                        {" "}
                                        <FaInstagram className="text-2xl text-red-500"></FaInstagram>
                                    </Link>
                                    <Link to=" https://twitter.com/?lang=en">
                                        {" "}
                                        <FaTwitter className="text-2xl text-blue-500"></FaTwitter>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <div className="card w-[350px] h-[500px] bg-base-100 rounded-none shadow-xl">
                        <figure>
                            <img
                                className="w-full h-[650px] object-cover"
                                src={teem3}
                                alt="Package Image"
                            />
                        </figure>

                        <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center bg-base-200 w-[300px] ">
                            <div className="card-body flex flex-col items-center">
                                <p className="text-2xl font-bold">
                                    Lorena Smith
                                </p>
                                <p className="font-serif">
                                    Vacation condrinator
                                </p>
                                <div className="flex gap-3">
                                    <Link to="https://web.facebook.com/profile.php?id=100065618652112">
                                        {" "}
                                        <FaFacebook className="text-2xl text-blue-500"></FaFacebook>
                                    </Link>
                                    <Link to="https://www.instagram.com">
                                        {" "}
                                        <FaInstagram className="text-2xl text-red-500"></FaInstagram>
                                    </Link>
                                    <Link to=" https://twitter.com/?lang=en">
                                        {" "}
                                        <FaTwitter className="text-2xl text-blue-500"></FaTwitter>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurTeam;
