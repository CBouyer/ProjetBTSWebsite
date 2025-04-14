import ModToken from "../../models/users/ModToken.ts"
import axios from "axios"
import  parametres from "../../../public/parametres.json"
import {jwtDecode} from "jwt-decode";
const URL_SERVEUR = parametres.URL_SERVEUR
const URL_AUTH = parametres.URL_AUTH

export const TokenJWT = async (username: string, password: string): Promise<ModToken | null> => {
    const response = await axios.post(`${URL_SERVEUR}${URL_AUTH}`, {
        username,
        password,
    });

    const token = response.data.token.toString(); // ← le string JWT
    console.log("Token brut du serveur:", token);

    if (!token || typeof token !== "string") {
        console.error("Token invalide ou manquant dans la réponse"); // ca verifie si c'est bien un string
        return null;
    }

    const decoded: any = jwtDecode(token);  //decode le jwt et le met sous un format modtoken exploitable

    return new ModToken(
        decoded.id_user,
        decoded.username,
        decoded.role,
        token,
        decoded.exp
    );
};