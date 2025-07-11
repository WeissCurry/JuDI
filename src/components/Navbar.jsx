// src/components/ArticleList.jsx
import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 text-white">
            <div className='justify-between w-[1270px] mx-auto'>
                <div className="flex justify-center space-x-6 p-3">
                    <a href="/" className="hover:bg-gray-700 px-3 py-2 rounded">HOME</a>
                    <a href="/current" className="hover:bg-gray-700 px-3 py-2 rounded">CURRENT</a>
                    <a href="/archives" className="hover:bg-gray-700 px-3 py-2 rounded">ARCHIVES</a>
                    <a href="/about" className="hover:bg-gray-700 px-3 py-2 rounded">ABOUT</a>
                </div>
            <div>

            </div>
            </div>
        </nav>
    );
};

export default Navbar;