import { Link } from "react-router-dom";

const ErrorPost = () => {
    return(
        <div className="errorpage">
            <h2>Désolé</h2>
            <p>La page que vous avez demandé est indisponible</p>
            <Link to="/">Retour à la page d'accueil</Link>
        </div>
    );
}
export default ErrorPost();