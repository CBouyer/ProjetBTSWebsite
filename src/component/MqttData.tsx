import { useEffect, useState } from "react";

// URL du serveur WebSocket
const SOCKET_SERVER_URL = "ws://localhost:8080/ws";

// Interface représentant la localisation GPS reçue
interface Location {
    lat: number;
    lon: number;
}

// Props du composant : une fonction pour mettre à jour la localisation,
// et une autre pour transmettre les données au graphique
interface MqttDataComponentProps {
    onLocationUpdate: (location: Location) => void;
    onDataUpdate: (dataPoint: { timestamp: number; value: number }) => void;
}

// Composant qui écoute les données MQTT via WebSocket
export const MqttDataComponent: React.FC<MqttDataComponentProps> = ({
                                                                        onLocationUpdate,
                                                                        onDataUpdate,
                                                                    }) => {
    // État local pour afficher temporairement le dernier payload reçu
    const [decodedPayload, setDecodedPayload] = useState("");

    useEffect(() => {
        // Connexion au serveur WebSocket
        const socket = new WebSocket(SOCKET_SERVER_URL);

        // Événement : connexion ouverte
        socket.onopen = () => {
            console.log("Connexion WebSocket ouverte");
        };

        // Événement : message reçu depuis le serveur
        socket.onmessage = (event) => {
            try {
                // Tentative de parsing du message JSON
                const message = JSON.parse(event.data);

                // Extraction de la localisation GPS (si présente)
                const location = message?.uplink_message?.rx_metadata?.[0]?.location;

                // Extraction du payload encodé en Base64
                const payload = message?.uplink_message?.frm_payload;

                // Si une localisation est disponible, on transmet a la carte
                if (location) {
                    onLocationUpdate({
                        lat: location.latitude,
                        lon: location.longitude,
                    });
                }

                // Si un payload est reçu
                if (payload) {
                    // Décodage Base64 → texte lisible
                    const decoded = atob(payload);

                    // Tentative de conversion en nombre (ex: température, tension, etc.)
                    const value = parseFloat(decoded);

                    // Mise à jour locale pour affichage dans l'UI
                    setDecodedPayload(decoded);

                    // Si la valeur est bien un nombre, on la transmet au graph avec un timestamp
                    if (!isNaN(value)) {
                        onDataUpdate({ timestamp: Date.now(), value });
                    }
                }
            } catch (error) {
                console.error("Erreur lors de la réception WebSocket:", error);
            }
        };

        // Événement : erreur WebSocket
        socket.onerror = (error) => {
            console.error("Erreur WebSocket:", error);
        };

        // Événement : fermeture de la connexion
        socket.onclose = () => {
            console.log("Connexion WebSocket fermée");
        };

        // Nettoyage : fermeture du socket quand le composant est démonté
        return () => socket.close();
    }, [onLocationUpdate, onDataUpdate]);

    return (
        <div>
            <p style={{ color: "black" }}>📦 Payload reçu: {decodedPayload || "En attente..."}</p>
        </div>
    );
};
