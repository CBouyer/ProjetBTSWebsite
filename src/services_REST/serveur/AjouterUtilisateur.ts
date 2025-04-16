import parametres from "../../../public/parametres.json";
import ModToken from "../../models/users/ModToken.ts";
import axios from "axios";

const URL_SERVEUR = parametres.URL_SERVEUR
const URL_AUTH = parametres.URL_AUTH

export const AjouterUtilisateur= async (username: string, password: string, role:string): Promise<ModToken | null> => {
    try {
        const res = await axios.post(`${URL_SERVEUR}${URL_AUTH}`, {
            username,
            password,
            role,
        });
        return res.data;
    } catch (err) {
        console.error("Erreur lors de l'ajout utilisateur :", err);
        return null;
    }
}