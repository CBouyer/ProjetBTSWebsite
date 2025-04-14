import {useNavigate} from "react-router";
import { motion } from "framer-motion";
import logoSite from "./../assets/Logo_Enerdis3-removebg-preview.png"

export const Header = () => {
    const navigate = useNavigate();

    const goToHome = () => {
        navigate("/home");
    };
    return (
        <header
            style={{
                backgroundColor : "#1e2b48",
                height: 100
            }}
        >
            <img src={logoSite} className="logo"/>
            <ul className="navlist">
                <motion.li
                    whileHover={{scale: 1.2}}
                    whileTap={{scale: 0.8}}
                >
                    <a onClick={goToHome} className="active" >Home</a>
                </motion.li>
                <motion.li
                    whileHover={{scale: 1.2}}
                    whileTap={{scale: 0.8}}
                >
                    <a href="/">Déconnexion</a>
                </motion.li>
            </ul>
        </header>
    );
};