import {Link} from 'react-router-dom';
import erreur404 from '../assets/erreur404.png';

export const PageNotFound = () => {
    return (
        <div className="center">
            <img src={erreur404} alt="Cette page n'existe pas"/>
            <h1>Hey, cette page n'existe pas ou n'est plus disponible!</h1>
            <Link to="/" className="waves-effect waves-teal btn-flat">
                Retourner à l'accueil
            </Link>
        </div>
    )
}