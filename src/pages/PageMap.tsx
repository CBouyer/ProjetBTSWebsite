import {LeafMap} from "../component/LeafMap.tsx";
import {useLocation} from "react-router";

export const PageMap = () => {
    const location = useLocation();
    const { lat, lon } = location.state || { lat: null, lon: null };

    return (
        <div>
            <title>Carte Interactive</title>
            <h1 style={{color : "black"}}>Carte des capteurs</h1>
            <LeafMap latitude={lat} longitude={lon} />
        </div>
    );
}