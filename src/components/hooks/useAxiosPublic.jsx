import axios from "axios";

const axiosPublic = axios.create({
    baseURL: "https://taskmanagement-server-side.vercel.app",
});
const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;
