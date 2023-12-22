/* eslint-disable no-unused-vars */
import React from "react";
import { FaHeadset } from "react-icons/fa";
import { LuBadgeCheck } from "react-icons/lu";

import Guiderimgphoto from "../../../src/assets/banner/aboutGuide.jpg";

const Memories = () => {
    return (
        <div className="flex flex-col md:flex-row mt-5 p-6">
            <div className="md:w-1/2">
                <h1 className="text-4xl font-bold">
                    Memories Made Together Last a Lifetime
                </h1>

                <h2 className="text-xl font-bold">
                    Growing community by inspiring healthy is our commitment
                    with farmers, the abundant living on the field.
                </h2>
                <p className="mt-2 font-serif">
                    Your satisfaction with your experience that your
                    recommendation. Sed ut perspiciatis unde omnis iste natus
                    error sit voluptatem accusantium doloremque laudantium.
                </p>

                <div className="flex gap-5 mt-5 items-center">
                    <div>
                        <LuBadgeCheck className="text-6xl"></LuBadgeCheck>
                    </div>

                    <div>
                        <h1 className="text-2xl font-bold">
                            Satisfaction Guarantee
                        </h1>
                        <h2>
                            Despite the variety of fish you could catch, no fish
                            is more desirable than the bluefin tuna.
                        </h2>
                    </div>
                </div>
                <div className="flex gap-5 mt-5 items-center">
                    <div>
                        <FaHeadset className="text-6xl"></FaHeadset>
                    </div>

                    <div>
                        <h1 className="text-2xl font-bold">Online Support</h1>
                        <h2>
                            Some anglers have even battled to reel in bluefin
                            tuna weighing trips travel a maximum.
                        </h2>
                    </div>
                </div>
            </div>

            <div className="md:w-1/2 mt-5 md:mt-0">
                <img
                    className="w-full md:w-3/4  mx-auto md:ml-0 lg:w-full"
                    src={Guiderimgphoto}
                    alt=""
                />
            </div>
        </div>
    );
};

export default Memories;
