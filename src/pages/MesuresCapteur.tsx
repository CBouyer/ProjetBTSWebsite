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
    const [totalCost, setTotalCost] = useState<number>(0);
    const prixKwh = 0.25 ; // € / kWh

    // Fonction pour générer des données aléatoires
    const generateRandomData = () => {
        const newData = mois.map((mois) => ({
            mois,
            consommation: Math.floor(Math.random() * 100) + 100, // consommation en kWh
        }));

        // Calcul du coût total estimé pour ces données
        const total = newData.reduce((sum, d) => sum + d.consommation * prixKwh, 0);

        // Mise à jour du graphique + coût total
        setData(newData);
        setTotalCost(total);
    };

    useEffect(() => {
        generateRandomData(); // Initialisation

        const interval = setInterval(() => {
            generateRandomData(); // Toutes les 10 sec
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{ padding: "20px" }}>
            <h2 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>
                Consommation électrique mensuelle (mise à jour en continu)
            </h2>

            <div style={{ fontSize: "1.2rem", fontWeight: "bold", marginBottom: "1rem" }}>
                 Coût total annuel estimé : {totalCost.toFixed(2)} €
            </div>

            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="mois" />
                    <YAxis unit="kWh" />
                    <Tooltip
                        formatter={(value: number) => [`${value} kWh`, "Consommation"]}
                    />
                    <Line
                        type="monotone"
                        dataKey="consommation"
                        stroke="#8884d8"
                        dot
                        name="Consommation (kWh)"
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};
