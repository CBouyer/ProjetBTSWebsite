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
    value: number;
    formattedDate: string;
}

export const MesuresCapteurRPI = () => {
    const [dataPoints, setDataPoints] = useState<DataPoint[]>([]);

    const handleDataUpdate = (dataPoint: { timestamp: number; value: number }) => {
        const formattedDate = new Date(dataPoint.timestamp).toLocaleString("fr-FR", {
            /*day: "2-digit",
            month: "2-digit",
            year: "2-digit",*/
            hour: "2-digit",
            minute: "2-digit"
        });

        setDataPoints((prev) => [
            ...prev,
            { ...dataPoint, formattedDate },
        ]);
    };

    return (
        <div style={{ padding: "20px" }}>
            <MqttDataComponent
                onDataUpdate={handleDataUpdate}
                onLocationUpdate={() => {}}
            />

            <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
                Consommation électrique en temps réel
            <p> (le graphique s'affichera uniquement a la réception d'informations du capteur)</p>
            </h2>
            <ResponsiveContainer width="100%" height={500}>
                <LineChart data={dataPoints}>
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis
                        dataKey="formattedDate"
                        angle={-60}
                        textAnchor="end"
                        height={80}
                    />
                    <YAxis unit="W" />
                    <Tooltip />
                    <Line type="monotone" dataKey="value" stroke="#82ca9d" dot />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};
