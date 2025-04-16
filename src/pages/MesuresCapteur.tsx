import {Graph} from "../component/Graph.tsx";
import {useState} from "react";

export const MesuresCapteur=()=>{
    const [data] = useState<{ timestamp: number; value: number }[]>([]);
    return(
        <>
            <title>Graphique des données</title>
            <Graph data={data} />
        </>
    )
}