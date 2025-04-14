//npm install crypto-js
import CryptoJS from 'crypto-js';
import parametres from "../../public/parametres.json"
const SECRET_KEY=parametres.SECRET_KEY
// Méthode pour chiffrer les données
export const encryptData=(data:string):string=>{
    return CryptoJS.AES.encrypt(data,SECRET_KEY).toString()
}

// Méthode pour déchiffrer les données
export const decryptData = (ciphertext: string): string => {
    const bytes = CryptoJS.AES.decrypt(ciphertext, SECRET_KEY);
    return bytes.toString();
};