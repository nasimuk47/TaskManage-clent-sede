/* eslint-disable no-unused-vars */
import React from "react";
import AboutBanner from "../../../src/assets/banner/depositphotos_253496422-stock-illustration-task-management-concept-banner-header.jpg";

import Memories from "./Memories";
import OurTeem from "./OurTeem";

const About = () => {
    return (
        <div>
            <div>
                <img
                    className="h-[300px] w-full relative"
                    src={AboutBanner}
                    alt=""
                />

                <h2 className="absolute bottom-36 ml-9 text-5xl font-bold text-white"></h2>
            </div>
            <Memories></Memories>
            <OurTeem></OurTeem>
        </div>
    );
};

export default About;
