import { useContext } from "react";
import { AuthContext } from "../Security/AuthProvider";

const useAuth = () => {
    const auth = useContext(AuthContext);
    return auth;
};

export default useAuth;
