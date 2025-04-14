import axios from "axios";

export default class ServiceCheckServeurOnline{
    static async getCheckServeur(urlServeur:string):Promise<boolean>{
        try{
            const response = await axios.get(urlServeur,{timeout:3000})
            if(response.status>=200 && response.status<300){
                return true
            }else{
                return false
            }
        }catch (error) {
            console.log(error)
            return false
        }
    }

}