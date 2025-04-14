import './App.css'
import {useAuthentificationJWTStore} from "./store/AuthentificationJWT.ts";
import {Outlet} from "react-router";
import {motion} from 'framer-motion';
import {Header} from "./component/Header.tsx";


export const App = () => {
    const {token} = useAuthentificationJWTStore()
    if (!token) {
        return <Outlet/>; // Affiche seulement la connexion
    }

    return (
        <>
            <motion.div
                initial={{opacity: 0}} // Départ invisible
                animate={{opacity: 1}} // Arrive en fondu
                transition={{duration: 0.8}} // Durée d'1 seconde
            >
                <Header/>
                <Outlet/>
                {/* <Footer /> */}
            </motion.div>
        </>


    )
}

