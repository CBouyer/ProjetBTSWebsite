export default class ModToken{

    idadmin: number | null = null
    username: string | null = null
    role: string | null = null
    token: string | null = null
    tokenTimeValid: number | null  = null


    constructor(idadmin: number | null, username: string | null, role: string | null, token: string | null, tokenTimeValid: number | null) {
        this.idadmin = idadmin;
        this.username = username;
        this.role = role;
        this.token = token;
        this.tokenTimeValid = tokenTimeValid;
    }
}