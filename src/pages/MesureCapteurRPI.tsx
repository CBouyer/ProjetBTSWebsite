import { useState } from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import { MqttDataComponent } from "../component/MqttData.tsx";

interface DataPoint {
    timestamp: number;
    value: number; // consommation en watts
    formattedDate: string;
    cost: number;  // coût instantané en euros
}

export const MesuresCapteurRPI = () => {
    const [dataPoints, setDataPoints] = useState<DataPoint[]>([]);
    const [totalCost, setTotalCost] = useState<number>(0);
    const prixKwh = 0.20 * 400; // €/kWh 400 étant la conso moyenne en 1 mois (sinon pas assez representatif sur le graph)

    const handleDataUpdate = (dataPoint: { timestamp: number; value: number }) => {
        const formattedDate = new Date(dataPoint.timestamp).toLocaleString("fr-FR", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        });

        // coût en € pour une seconde de consommation
        const cost = (dataPoint.value / 1000) * prixKwh / 3600;

        setDataPoints((prev) => [
            ...prev,
            { ...dataPoint, formattedDate, cost },
        ]);

        // mettre à jour le coût total
        setTotalCost((prevTotal) => prevTotal + cost);
    };

    return (
        <div style={{ padding: "20px" }}>
            <MqttDataComponent
                onDataUpdate={handleDataUpdate}
                onLocationUpdate={() => {}}
            />

            <h2 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>
                Consommation électrique en temps réel
            </h2>
            <p>(le graphique s'affichera uniquement à la réception d'informations du capteur)</p>

            <div style={{ marginTop: "1rem", fontSize: "1.2rem", fontWeight: "bold" }}>
                 Coût total estimé : {totalCost.toFixed(6)} €
            </div>

            <ResponsiveContainer width="100%" height={500}>
                <LineChart data={dataPoints}>
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis
                        dataKey="formattedDate"
                        angle={-60}
                        textAnchor="end"
                        height={80}
                    />
                    <YAxis yAxisId="left" unit="W" />
                    <YAxis yAxisId="right" orientation="right" unit="€" />
                    <Tooltip />
                    <Line
                        yAxisId="left"
                        type="monotone"
                        dataKey="value"
                        stroke="#82ca9d"
                        dot={false}
                        name="Consommation (W)"
                    />
                    <Line
                        yAxisId="right"
                        type="monotone"
                        dataKey="cost"
                        stroke="#8884d8"
                        dot={false}
                        name="Coût instantané (€)"
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};
