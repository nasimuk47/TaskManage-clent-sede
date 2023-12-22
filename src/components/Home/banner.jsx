import { motion } from "framer-motion";
import TaskManagementImage from "../../assets/banner/pngtree-business-team-banner-task-management-image_1312343.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
    const bannerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    return (
        <div className="relative">
            <img src={TaskManagementImage} alt="" className="w-full" />

            <motion.div
                variants={bannerVariants}
                initial="hidden"
                animate="visible"
                className="absolute top-[80%] left-[70%] transform -translate-x-1/2 -translate-y-1/2 text-center text-sky-500">
                <Link to="Login">
                    <button className="btn btn-accent mt-5">
                        Let’s Explore
                    </button>
                </Link>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0, transition: { delay: 0.5 } }}
                    className="text-xl text-black mt-5"></motion.p>
            </motion.div>
        </div>
    );
};

export default Banner;
