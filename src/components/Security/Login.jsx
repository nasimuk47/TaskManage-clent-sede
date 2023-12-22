import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Lottie from "lottie-react";
import loginAnimation from "../../assets/login-animation.json";
import { AuthContext } from "./AuthProvider";
import SocialLogin from "./SocialLogin";

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/dashboard";
    console.log("state in the location login page", location.state);

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password).then((result) => {
            const user = result.user;
            console.log(user);
            Swal.fire({
                title: "User Login Successful.",
                showClass: {
                    popup: "animate__animated animate__fadeInDown",
                },
                hideClass: {
                    popup: "animate__animated animate__fadeOutUp",
                },
            });
            navigate(from, { replace: true });
        });
    };

    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col md:flex-row-reverse space-x-10 gap-16">
                    <div className="text-center md:w-1/2 lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <Lottie animationData={loginAnimation} autoPlay loop />
                    </div>
                    <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="email"
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="password"
                                    className="input input-bordered"
                                />
                            </div>

                            <div className="form-control mt-4">
                                {/* TODO: apply disabled for re captcha */}
                                <input
                                    disabled={false}
                                    className="btn bg-orange-500 "
                                    type="submit"
                                    value="Login"
                                />
                            </div>
                        </form>
                        <SocialLogin></SocialLogin>
                        <p className="mb-6 flex justify-center">
                            <p>
                                New Here?{" "}
                                <span className="text-red-500 font-bold">
                                    <Link to="/signup">Create an account</Link>{" "}
                                </span>
                            </p>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
