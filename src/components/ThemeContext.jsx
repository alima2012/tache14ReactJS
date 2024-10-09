import React, { createContext, useState } from "react";

// définir un contexte pour gérer le théme de notre application
const ThemeContext = createContext();
// créer des contextes de thème avec une couleur et une police 
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState({});

const theme1 = (newTheme) => {
    setTheme({
        ...newTheme,
    });
};
    return(
        <ThemeContext.Provider value={{ theme, setTheme: theme1 }}>
            {children}
        </ThemeContext.Provider>
    );
};
export default ThemeContext;
