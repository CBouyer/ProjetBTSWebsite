import erreur404 from '../assets/erreur404.png';
import {useNavigate} from "react-router";
import {Button} from "@mui/material";
import { motion } from 'framer-motion';

export const PageNotFound = () => {
    const navigate = useNavigate();
    const goToHome = () => {
        navigate("/home");
    };
    return (
        <>
            <title>Page Introuvable</title>

            <div className="center">
                <img src={erreur404} alt="Cette page n'existe pas"/>
                <h2>Hey, cette page n'existe pas ou n'est plus disponible!</h2>
            </div>
            <div>
                <Button>
                    <motion.li
                        whileHover={{scale: 1.2}}
                        whileTap={{scale: 0.8}}
                    >
                        <a onClick={goToHome} className="active">Retourner a l'acceuil</a>
                    </motion.li>
                </Button>
            </div>

        </>
    )
}