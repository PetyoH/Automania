import { createContext } from "react";
import { useUser } from "../hooks/useUser";



export const AuthContext = createContext();


export const AuthProvider = ({
    children
}) => {
    

    const user = useUser();

    return (
        <AuthContext.Provider value={{
            user
        }}>
            {children}
        </AuthContext.Provider>
    );

}