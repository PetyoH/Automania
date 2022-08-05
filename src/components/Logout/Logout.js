import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as userService from "../../services/authService";

const Logout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        userService.logout()
         .then(navigate('/'));
    }, [])

    return null;
}

export default Logout;