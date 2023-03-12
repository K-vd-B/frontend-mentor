import { createContext, ReactNode, useEffect, useState } from 'react';

interface ThemeContext {
    darkTheme: boolean,
    changeTheme: () => void; 
}

const getPreference = (): boolean => {

    if (localStorage.getItem('countriesAPI.dark-theme') === 'false') {
        return false;
    }

    if (localStorage.getItem('countriesAPI.dark-theme') === 'true') {
        return true;
    }
    
    if (window.matchMedia('(prefers-color-scheme: dark').matches) {
        return true;
    } 

    return false;
}

export const ThemeContext = createContext<ThemeContext | null>(null);

export default function ThemeContextProvider({children}: {children: ReactNode | ReactNode[]}) {

    const [darkTheme, setDarkTheme] = useState(() => getPreference())
    
    console.log(darkTheme);
    const changeTheme = () => {
        setDarkTheme(!darkTheme);
    }

    useEffect(() => {
        localStorage.setItem('countriesAPI.dark-theme', darkTheme.toString());
        document.body.setAttribute('class', darkTheme === true ? 'dark dark-theme-on' : 'light dark-theme-off');
    }, [darkTheme]);

    return (
        <ThemeContext.Provider value={{darkTheme, changeTheme}}>
                {children}
        </ThemeContext.Provider>
    );
}
