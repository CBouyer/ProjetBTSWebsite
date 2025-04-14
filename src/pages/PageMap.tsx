import {LeafMap} from "../component/LeafMap.tsx";
import {useLocation} from "react-router";

export const PageMap = () => {
    // Optionnel : récupérer la position depuis un state global ou paramètre si nécessaire
    const location = useLocation();
    const { lat, lon } = location.state || { lat: null, lon: null };

    return (
        <div>
            <h1 style={{color : "black"}}>Carte</h1>
            <LeafMap latitude={lat} longitude={lon} />
        </div>
    );
}