import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../hooks/useAxiosPublic";
import useAuth from "../hooks/useAuth";

const SocialLogin = () => {
    const { googleSignIn } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        googleSignIn().then((result) => {
            console.log(result.user);
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName,
            };
            axiosPublic.post("/users", userInfo).then((res) => {
                console.log(res.data);
                navigate("/");
            });
        });
    };

    return (
        <div className="px-8 mb-4">
            <div>
                <button onClick={handleGoogleSignIn} className="btn w-full">
                    <FaGoogle className="mr-4 text-2xl text-orange-600"></FaGoogle>
                    Google
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;
