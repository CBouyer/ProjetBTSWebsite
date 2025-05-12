import { useEffect, useState } from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

// Liste des mois
const mois = [
    "Jan", "Fév", "Mar", "Avr", "Mai", "Juin",
    "Juil", "Août", "Sept", "Oct", "Nov", "Déc"
];

export const MesuresCapteur = () => {
    const [data, setData] = useState<{ mois: string; consommation: number }[]>([]);

    // Fonction pour générer des données aléatoires
    const generateRandomData = () => {
        return mois.map((mois) => ({
            mois,
            consommation: Math.floor(Math.random() * 100) + 50,
        }));
    };

    useEffect(() => {
        // Initialisation
        setData(generateRandomData());

        // Mise à jour toutes les 5 secondes
        const interval = setInterval(() => {
            setData(generateRandomData());
        }, 10000);

        // Nettoyage à la destruction du composant
        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{ padding: "20px" }}>
            <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
                Consommation électrique mensuelle (mise à jour en continu)
            </h2>

            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="mois" />
                    <YAxis unit="W" />
                    <Tooltip
                        formatter={(value: number) => [`${value} W`, "Consommation"]}
                    />
                    <Line type="monotone" dataKey="consommation" stroke="#8884d8" dot />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};
