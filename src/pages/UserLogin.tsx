import { Box } from "@mui/material";
import { Connexion } from "../connexion/Connexion.tsx";


export const UserLogin = () => {
    return (
            <Box
                sx={{
                    padding: 5,
                    borderRadius: 2,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Connexion />
            </Box>
    );
};
