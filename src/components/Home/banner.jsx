import { motion } from "framer-motion";
import TaskManagementImage from "../../assets/photo/pexels-mikhail-nilov-7988079.jpg";
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
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-sky-500">
                <h1 className="text-6xl font-bold">Task Management Platform</h1>

                <Link to="Login">
                    <button className="btn btn-primary mt-5">
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
