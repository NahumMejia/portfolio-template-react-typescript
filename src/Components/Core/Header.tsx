import '@/App.css';

export default function Header() {
    return (
        <nav className="top-0 z-50 fixed bg-black shadow-blue-900 shadow-lg px-4 py-6 w-full">
            <div className="flex justify-between items-center mx-auto px-2 max-w-7xl">
                <span className="flex font-ghotic text-white text-2xl">
                <span className="text-blue-200">Nahum</span>
                <span className="ml-1 text-blue-100">Mejia</span>
                </span>
            </div>
        </nav>
    );
}
