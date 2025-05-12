import {Box, Button, Modal} from "@mui/material";
import { LeafMap } from "../component/LeafMap.tsx";
import {useState} from "react";
import {FormAjouterUtilisateur} from "../component/FormAjouterUtilisateur.tsx";



export const GestionAdmin = () => {
    const [openAjouterClient, setOpenAjouterClient] = useState(false);

    const handleOpenAjouterClient = () => setOpenAjouterClient(true);
    const handleCloseAjouterClient = () => setOpenAjouterClient(false);

    return (
        <>
            <title>Gestion Administrateur</title>

            {/* Conteneur principal en colonne */}
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "100px", // Espace entre les sections
                paddingTop: "200px"
            }}>


                {/* Section des trois blocs pour administrer les cpateurs les utilisateurs et le prix kwh */}
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "100px", // espace entre chaque bloc
                }}>
                    {/* Capteurs */}
                    <section>
                        <h2>Administrer des capteurs</h2>
                        <Button>Ajouter</Button>
                        <Button>Modifier</Button>
                        <Button>Supprimer</Button>
                    </section>

                    {/* Prix kWh */}
                    <section>
                        <h2>Changer le prix du kWh</h2>
                        <p>Prix actuel du kWh : </p>
                        <form>
                            <div className="inputBxGestionkWh">
                                <input type="text" placeholder="Changer le prix du kWh" />
                            </div>
                            <div className="inputBxGestionkWh">
                                <input type="submit" value="Valider" />
                            </div>
                        </form>
                    </section>

                    {/* Utilisateur */}
                    <section>
                        <h2>Administrer des clients</h2>
                        <Button onClick={handleOpenAjouterClient}>Ajouter</Button>
                        <Button>Modifier</Button>
                        <Button>Supprimer</Button>
                    </section>
                </div>

                {/* Section carte des capteurs */}
                <div
                style={{
                    paddingBottom : "100px"
                }}>
                    <h2>Carte des capteurs</h2>
                    <LeafMap latitude={50} longitude={10} />
                </div>

            </div>

            {/* fenetre popup quand on ajoute un client */}
            <Modal open={openAjouterClient} onClose={handleCloseAjouterClient}>
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    bgcolor: 'background.paper',
                    borderRadius: 2,
                    boxShadow: 24,
                    p: 4,
                    minWidth: 400
                }}>
                    <FormAjouterUtilisateur onSuccess={handleCloseAjouterClient} />
                </Box>
            </Modal>
        </>
    );
}