import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { MdDarkMode, MdOutlineDarkMode } from 'react-icons/md';

export default function ThemeSwitch() {

    const themeContext = useContext(ThemeContext);

    return (
        <a onClick={() => themeContext?.changeTheme()} className="flex items-center hover:cursor-pointer">
            
            {themeContext?.darkTheme === true ? 
                <MdDarkMode className="h-4 sm:h-7 w-auto pr-1 sm:pr-2"/> : 
                <MdOutlineDarkMode className="h-4 sm:h-7 w-auto pr-1 sm:pr-2"/>}
            
            <p className="font-semibold text-xs sm:text-base">Dark Mode</p>
        </a>
    ); 
}
