import ModToken from "../models/users/ModToken.ts";
import {create} from "zustand"
import {persist} from "zustand/middleware";
import {decryptData, encryptData} from "../utils/CryptoLocalStorage.ts";


interface InterfaceTokenStore{
    token: ModToken | null
    setToken:(newToken:ModToken)=> void

}
export const useAuthentificationJWTStore = create<InterfaceTokenStore>()(
    persist(
        (set) => ({
            token: null,
            setToken: (newToken) => set({
                token: newToken
            })
        }),
        {
            name:"token-store",
            partialize:(state)=>({
                token:encryptData(JSON.stringify(state.token || {})),
            }),

            onRehydrateStorage: () => (state) => {
                if (state && state.token) {
                    state.token = JSON.parse(decryptData(state.token as unknown as string))
                    console.log(state.token)
                }
            },
        }
    )
)