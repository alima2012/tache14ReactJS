import React, { useContext, useState } from "react";
import ThemeContext from "./ThemeContext";

function ChangeTheme(){
    // utiliser le théme créé dans ThemeContext sur ChangeTheme
    const {theme, setTheme} = useContext(ThemeContext);
    // création de variable pour couleur et police
    const [Varcouleur, setVarcouleur] = useState(theme.couleur);
    const [Varpolice, setVarpolice] = useState(theme.police);

    // créer une fonction et l'appeler à la soumission des données dans le formulaire
    const handleSubmit = (e) => {
        e.preventDefault();
        setTheme({
            couleur: Varcouleur,
            police: Varpolice
        });
    };
    return(
        <div>
            <h2>Changer de Théme</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Couleur:</span>
                    <input type="text" 
                        required
                        value={Varcouleur}
                        onChange={(e) => setVarcouleur(e.target.value)}
                     />
                </label>
                <label>
                    <span>Police:</span>
                    <input type="text" 
                        required
                        value={Varpolice}
                        onChange={(e) => setVarpolice(e.target.value)}
                     />
                </label>
                <button className="submited">Changer</button>

            </form>
        </div>
    );
}

export default ChangeTheme;