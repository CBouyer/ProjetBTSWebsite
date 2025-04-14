import {useEffect, useState} from "react";

const SOCKET_SERVER_URL = "ws://localhost:8080/ws"; // Remplace avec l'URL de ton serveur WebSocket

interface Location {
    lat: number;
    lon: number;
}

interface MqttDataComponentProps {
    onLocationUpdate: (location: Location) => void;
}

export const MqttDataComponent: React.FC<MqttDataComponentProps> = ({ onLocationUpdate }) => {
    const [decodedPayload, setDecodedPayload] = useState("");

    useEffect(() => {
        const socket = new WebSocket(SOCKET_SERVER_URL);

        socket.onopen = () => {
            console.log("Connexion WebSocket ouverte");
        };

        socket.onmessage = (event) => {
            try {
                const message = JSON.parse(event.data);
                console.log("Message reçu:", message);

                // Extraction des données
                const location = message?.uplink_message?.rx_metadata?.[0]?.location;
                const payload = message?.uplink_message?.frm_payload;

                // Mise à jour de la position
                if (location) {
                    onLocationUpdate({ lat: location.latitude, lon: location.longitude });
                }

                // Décodage du frm_payload
                if (payload) {
                    setDecodedPayload(atob(payload)); // Conversion Base64 → Texte
                }
            } catch (error) {
                console.error("Erreur WebSocket:", error);
            }
        };

        socket.onerror = (error) => console.error("Erreur WebSocket:", error);
        socket.onclose = () => console.log("Connexion WebSocket fermée");

        return () => socket.close();
    }, [onLocationUpdate]);

    return (
        <div>
            <h1 style={{ color: "black" }}>Données MQTT reçues</h1>
            <p style={{ color: "black" }}>📦 Payload: {decodedPayload || "En attente..."}</p>
        </div>
    );
};