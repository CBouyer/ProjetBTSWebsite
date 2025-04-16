import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import {Button, Card, CardActions, CardContent, CardMedia, Typography, Box} from "@mui/material";
import {useNavigate} from "react-router";

interface LeafMapProps {
    latitude: number | null;
    longitude: number | null;
}

export const LeafMap: React.FC<LeafMapProps> = ({latitude, longitude}) => {
    const defaultPosition = {lat: 50, lng: 10}; // Position par défaut
    const navigate = useNavigate();

    const goToMesureCapteur = () => {
        navigate("/MesureCapteur");
    };

    return (
        <Box display="flex" flexDirection="row" justifyContent="center" alignItems="flex-start" gap={4} padding={2}>
            {/* Carte à gauche */}
            <MapContainer
                center={latitude !== null && longitude !== null ? {lat: latitude, lng: longitude} : defaultPosition}
                zoom={6}
                style={{height: "60vh", width: "70vw"}}
            >
                <TileLayer url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"} />

                {latitude !== null && longitude !== null && (
                    <Marker position={{lat: latitude, lng: longitude}}>
                        <Popup>
                            <Card sx={{maxWidth: 345}}>
                                <CardMedia component="img" alt="photo" height="50"
                                           image="src/assets/website-rays-background-pattern-1637863.png" />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" height={10}>
                                        Position Reçue
                                    </Typography>
                                    <Typography variant="body2" sx={{color: "text.secondary"}} height={-20}>
                                        Latitude: {latitude}, Longitude: {longitude}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button onClick={goToMesureCapteur}>Voir plus</Button>
                                </CardActions>
                            </Card>
                        </Popup>
                    </Marker>
                )}

                <Marker position={defaultPosition}>
                    <Popup>
                        <Card sx={{maxWidth: 200}}>
                            <Typography gutterBottom variant="h5" component="div" height={10}>
                                Point fixe pour test
                            </Typography>
                            <CardActions>
                                <Button onClick={goToMesureCapteur}>Voir plus</Button>
                            </CardActions>
                        </Card>
                    </Popup>

                </Marker>
            </MapContainer>
        </Box>
    );
};