import { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import {AjouterUtilisateur} from "../services_REST/serveur/AjouterUtilisateur.ts";

type Props = {
    onSuccess?: () => void;
};

export const FormAjouterUtilisateur = ({ onSuccess }: Props) => {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        role:""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const result = await AjouterUtilisateur(formData.username, formData.password, formData.role);

            if (result) {
                alert("Utilisateur ajouté avec succès !");
                setFormData({ username: "", password: "", role: "" });
                if (onSuccess) onSuccess();
            } else {
                alert("Erreur lors de l'ajout de l'utilisateur");
            }
        } catch (error) {
            console.error(error);
            alert("Erreur lors de l’envoi");
        }
    };

    return (
        <>
            <Typography variant="h6" gutterBottom>Ajouter un utilisateur</Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Username"
                    name="username"
                    type="username"
                    value={formData.username}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Role"
                    name="role"
                    type="role"
                    value={formData.role}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <Box mt={2} display="flex" justifyContent="flex-end" gap={1}>
                    <Button type="submit" variant="contained">Valider</Button>
                </Box>
            </form>
        </>
    );
};