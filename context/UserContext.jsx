import { createContext, useEffect, useState } from "react";
import { account } from "../lib/appwrite";
import { ID } from "react-native-appwrite";

export const UserContext = createContext();

export function UserProvider ({ children }){
    const [ user, setUser ] = useState(null);
    const [ authChecked, setAuthChecked ] = useState(false);

    async function login ( email, password) {
        try{
            await account.createEmailPasswordSession(email, password);
            const response = await account.get();
            setUser(response);
        }catch (error) {
            throw new Error(error.message || "An error occurred during login");
        }
    }

    async function register ( email, password) {
        try{
            await account.create( ID.unique(), email, password);
            await login(email, password);
        }catch (error) {
            throw new Error(error.message || "An error occurred during registration");
        }
    }

    async function logout () {
        try {
            await account.deleteSession('current');
            setUser(null);
        } catch (error) {
            throw new Error(error.message || "An error occurred during logout");
        }
    }

    async function checkUser () {
        try{
            const response = await account.get();
            setUser(response);
        }catch (error) {
            setUser(null);
        }finally{
            setAuthChecked(true);
        }
    }

    useEffect(() => {
        checkUser();
    }, []);


    return(
        <UserContext.Provider value={{user, login, register, logout, authChecked}}>
            {children}
        </UserContext.Provider>
    )
}
