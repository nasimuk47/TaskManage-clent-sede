/* eslint-disable no-unused-vars */
import React from "react";
import contactBanner from "../../assets/banner/contact.jpg";
import { FiPhoneCall } from "react-icons/fi";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
    return (
        <div>
            <div>
                <div>
                    <img
                        className="h-[500px] w-full relative"
                        src={contactBanner}
                        alt=""
                    />
                </div>

                <div className="h-[250px] flex flex-wrap justify-evenly text-center  bg-gray-200">
                    <div className="mt-20 text-center">
                        <FaLocationDot className="text-6xl text-blue-400 ml-24 mb-6 "></FaLocationDot>

                        <h3>837 Castle Hill Ave. Bronx NY 33195</h3>
                        <h4>United States</h4>
                    </div>
                    <div className="mt-20">
                        <FiPhoneCall className="text-6xl text-blue-400 ml-10 mb-6 "></FiPhoneCall>

                        <h3>718-825-3320</h3>
                        <h4>212-632-4120</h4>
                    </div>
                    <div className="mt-20">
                        <FaLocationDot className="text-6xl text-blue-400 ml-10 mb-6 "></FaLocationDot>

                        <h3>info@travi.com</h3>
                        <h4>sales@travi.com</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
