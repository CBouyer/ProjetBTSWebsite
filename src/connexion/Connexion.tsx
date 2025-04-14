import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useAuthentificationJWTStore } from "../store/AuthentificationJWT.ts";
import { TokenJWT } from "../services_REST/serveur/TokenJWT.ts";
import ServiceCheckServeurOnline from "../services_REST/serveur/ServiceCheckServeurOnline.ts";
import { URL_SERVEUR } from "../models/url_rest/Mod-url.ts";
import {ValidationConnexion} from "./VerificationConnexion.ts";

interface FormData {
    login: string;
    password: string;
}

export const Connexion = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
    const [message, setMessage] = useState<string>("Connexion...");
    const navigate = useNavigate();
    const { setToken } = useAuthentificationJWTStore();

    const onSubmit = (data: FormData) => {
        TokenJWT(data.login, data.password).then(token => {
            if (token !== null) {
                setToken(token);
                navigate('/home');
            }
        });
    };

    useEffect(() => {
        const repeter = setInterval(() => {
            ServiceCheckServeurOnline.getCheckServeur(URL_SERVEUR)
                .then((etat) => {
                    if (etat) {
                        setMessage(`⚙️ Serveur distant fonctionnel`);
                    } else {
                        setMessage(`⛓️‍💥 Le serveur distant ne répond pas. Veuillez vous reconnecter plus tard!`);
                    }
                });
        }, 3500);

        return () => clearInterval(repeter);
    }, []);

    useEffect(() => {
        localStorage.removeItem('token-store');
    }, []);

    const setMessageColor = (message: string) => {
        if (message.includes(`⚙️`)) {
            return 'black';
        } else if (message.includes(`⛓️‍💥`)) {
            return 'black';
        }
        return 'text.secondary';
    };

    return (
            <div className="login">
                <h2 style={{
                    color:"black"
                }}>Se Connecter</h2>
                <p style={{ fontWeight: "bold", color: setMessageColor(message) }}>{message}</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="inputBx">
                        <input {...register("login", ValidationConnexion.login)} type="text" placeholder="Username" />
                        {errors.login && <span className="error">{errors.login.message}</span>}
                    </div>
                    <div className="inputBx">
                        <input {...register("password", ValidationConnexion.password)} type="password" placeholder="Password" />
                        {errors.password && <span className="error">{errors.password.message}</span>}
                    </div>
                    <div className="inputBx">
                        <input type="submit" value="Login" />
                    </div>
                </form>
            </div>
    );
};


