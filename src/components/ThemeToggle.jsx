import React, { useEffect, useState } from 'react';

function ThemeToggle() {
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem('theme') === 'dark';
    });

    useEffect(() => {
        document.documentElement.classList.toggle("dark", darkMode);
        localStorage.setItem('theme', darkMode ? "dark" : "light");
    }, [darkMode])

    const toggleTheme = () => {
        setDarkMode(prev => !prev)
    }
    return (
        <button
            onClick={toggleTheme}
            className='rounded-lg bg-gray-200 px-4 py-2 text-gray-900 transition hovere:bg-gray-700 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 '
        >
            {darkMode ? "☀️" : "🌙"}
        </button>
    );
}

export default ThemeToggle;