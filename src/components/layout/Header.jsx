
import ThemeToggle from '../ThemeToggle';

function Header({handleSidebarOpen}) {
    return (
        <>
            <header className='sticky top-0 z-40 border-b border-gray-200 bg-white/80 backdrop-blur dark:border-gray-800 dark:bg-gray-900/80'>
                <div className="flex items-center justify-between px-4 py-4 lg:px-8">
                    <button className=" dark:text-white cursor-pointer rounded-lg p-2 lg:hidden" onClick={handleSidebarOpen}>
                        ☰
                    </button>
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Dashboard</h2>
                    <div>
                        <ThemeToggle />
                        <button className=" ml-2 rounded-lg border border-gray-200 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800">
                            Profile
                        </button>
                    </div>

                </div>
            </header>
        </>
    );
}

export default Header;