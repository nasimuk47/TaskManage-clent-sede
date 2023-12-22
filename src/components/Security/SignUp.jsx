import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Lottie from "lottie-react";
import loginAnimation from "../../assets/login-animation.json";
import SocialLogin from "./SocialLogin";
import { AuthContext } from "./AuthProvider";
import useAxiosPublic from "../hooks/useAxiosPublic";

const SignUp = () => {
    const axiosPublic = useAxiosPublic();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = (data) => {
        createUser(data.email, data.password).then((result) => {
            const loggedUser = result.user;
            console.log(loggedUser);
            updateUserProfile(data.name, data.photoURL)
                .then(() => {
                    // create user entry in the database
                    const userInfo = {
                        name: data.name,
                        email: data.email,
                        photo: data.photoURL,
                    };
                    axiosPublic.post("/users", userInfo).then((res) => {
                        if (res.data.insertedId) {
                            console.log("user added to the database");
                            reset();
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "User created successfully.",
                                showConfirmButton: false,
                                timer: 1500,
                            });
                            navigate("/dashboard");
                        }
                    });
                })
                .catch((error) => console.log(error));
        });
    };

    return (
        <>
            <div className="hero min-h-screen bg-blue-200">
                <div className="hero-content flex-col lg:flex-row-reverse gap-16">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign up now!</h1>
                        <Lottie animationData={loginAnimation} autoPlay loop />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text"
                                    {...register("name", { required: true })}
                                    name="name"
                                    placeholder="Name"
                                    className="input input-bordered"
                                />
                                {errors.name && (
                                    <span className="text-red-600">
                                        Name is required
                                    </span>
                                )}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">
                                        Photo URL
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    {...register("photoURL", {
                                        required: true,
                                    })}
                                    placeholder="Photo URL"
                                    className="input input-bordered"
                                />
                                {errors.photoURL && (
                                    <span className="text-red-600">
                                        Photo URL is required
                                    </span>
                                )}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    {...register("email", { required: true })}
                                    name="email"
                                    placeholder="email"
                                    className="input input-bordered"
                                />
                                {errors.email && (
                                    <span className="text-red-600">
                                        Email is required
                                    </span>
                                )}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 20,
                                        pattern:
                                            /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                                    })}
                                    placeholder="password"
                                    className="input input-bordered"
                                />
                                {errors.password?.type === "required" && (
                                    <p className="text-red-600">
                                        Password is required
                                    </p>
                                )}
                                {errors.password?.type === "minLength" && (
                                    <p className="text-red-600">
                                        Password must be 6 characters
                                    </p>
                                )}
                                {errors.password?.type === "maxLength" && (
                                    <p className="text-red-600">
                                        Password must be less than 20 characters
                                    </p>
                                )}
                                {errors.password?.type === "pattern" && (
                                    <p className="text-red-600">
                                        Password must have one Uppercase one
                                        lower case, one number and one special
                                        character.
                                    </p>
                                )}
                            </div>
                            <div className="form-control mt-6">
                                <input
                                    className="btn bg-orange-500"
                                    type="submit"
                                    value="Sign Up"
                                />
                            </div>
                        </form>
                        <SocialLogin></SocialLogin>
                        <p className="px-6">
                            <p className="flex justify-center ">
                                Already have an account{" "}
                                <span className="text-red-500 font-bold mb-4 ml-2 ">
                                    {" "}
                                    <Link to="/login">Login</Link>
                                </span>
                            </p>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;
