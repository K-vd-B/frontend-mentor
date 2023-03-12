import ThemeSwitch from './ThemeSwitch';

export default function Header() {

    return (
        <header className='theme-transition-effect bg-fe-light-mode-elements dark:bg-fe-dark-mode-elements shadow-md select-none'>
            <div className='flex flex-row justify-between items-center max-w-[85rem] h-20 mx-auto px-4 sm:px-10'>
                <h1 className='font-bold text-sm sm:text-2xl'>Where in the world?</h1>
                <ThemeSwitch />
            </div>
        </header>
    );
}