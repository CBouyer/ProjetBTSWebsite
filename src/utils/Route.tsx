import {useAuthentificationJWTStore} from "../store/AuthentificationJWT.ts";
import {Navigate, Outlet} from "react-router";

export const PrivateRoute = () => {
    const {token} = useAuthentificationJWTStore()
    return token? <Outlet/>  : <Navigate to="/" replace/>

}