import { useAuthentificationJWTStore } from "../store/AuthentificationJWT.ts";
import { useEffect, useState } from "react";
import { Header } from "../component/Header.tsx";
import { useNavigate } from "react-router";
import { Button } from "@mui/material";
import { MqttDataComponent } from "../component/MqttData.tsx";

export const Home = () => {
    const { token } = useAuthentificationJWTStore();
    const navigate = useNavigate();
    console.log("🔐 TOKEN depuis le store :", token);

    // Stocke la position GPS
    const [position, setPosition] = useState<{ lat: number | null; lon: number | null }>({ lat: null, lon: null });
    const [, setData] = useState<{ timestamp: number; value: number }[]>([]);
    const handleDataUpdate = (dataPoint: { timestamp: number; value: number }) => {
        setData((prev) => [...prev, dataPoint]);
    };

    useEffect(() => {
        if (token !== null) {
            console.log("Token JWT:", token);
        }
    }, [token]);

    return (
        <>
            <title> Enerdis </title>
            <Header />

            <h2 style={{ color: "black" }}>Bienvenue sur le site Enerdis</h2>

            <MqttDataComponent
                onLocationUpdate={setPosition}
                onDataUpdate={handleDataUpdate}
            />

            {token?.role === "admin" && (
                <Button
                    style={{
                        borderRadius: "50px",
                        padding: "10px 20px",
                        border: "2px solid skyblue",
                        backgroundColor: "transparent",
                        color: "black",
                        cursor: "pointer",
                        fontSize: "50px",
                        fontWeight: "bold",
                    }}
                    onClick={() =>
                        navigate("/PageMap", { state: { lat: position.lat, lon: position.lon } })
                    }
                >
                    Voir la carte
                </Button>
            )}
        </>
    );
};