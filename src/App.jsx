import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';


import ArticleList from './components/ArticleList';
import Navbar from './components/Navbar';
import Logo from "../public/ideatecore_logo.jpeg";

// sidebar
import ForReaders from './components/sidebarinformations/ForReaders';
import ForAuthors from './components/sidebarinformations/ForAuthors';
import ForLibrarians from './components/sidebarinformations/ForLibrarians';

// pages
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import Archive from './pages/Archive';

const Header = () => (
  <header className="bg-white shadow-md p-4 text-center">
    <div className='flex flex-row items-center justify-center gap-2 w-[1270px] mx-auto'>
      <img src={Logo} alt="IdeateCore Logo" className='size-[36px]' />
      <h1 className="text-3xl font-bold text-gray-800"> JuDI : Jurnal Komedi </h1>
    </div>
  </header>
);

const Sidebar = () => (
  <aside className="lg:w-[220px] md:w-1/3 p-4 bg-gray-50 border-l">
    <h3 className="font-bold text-lg mb-3">Information</h3>
    <ul className="space-y-2 text-blue-700">
      <li><a href="/forreaders" className="hover:underline">For Readers</a></li>
      <li><a href="/forauthors" className="hover:underline">For Authors</a></li>
      <li><a href="/forlibrarians" className="hover:underline">For Librarians</a></li>
    </ul>
  </aside>
);

const Footer = () => (
  <footer className="bg-gray-200 text-center p-4 mt-8 text-sm text-gray-600">
    © 2025 JuDI : Jurnal Komedi. All rights reserved.
  </footer>
);

const PageLayout = () => {
  return (
    <div className="container mx-auto mt-6 flex flex-col md:flex-row bg-white shadow-lg w-[1270px]">
      <Outlet />
      <Sidebar />
    </div>
  );
};


// --- Komponen App Utama dengan struktur routing baru ---
function App() {
  return (
    <div className="font-sans bg-gray-100 min-h-screen flex flex-col">
      <Header />
      <Navbar />
      
      <main className="flex-grow">

        <Routes>
          <Route element={<PageLayout />}>

            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/archives" element={<Archive />} />
            <Route path="/current" element={<ArticleList />} />



            {/* sidebar */}
            <Route path="/forreaders" element={<ForReaders />} />
            <Route path="/forauthors" element={<ForAuthors />} />
            <Route path="/forlibrarians" element={<ForLibrarians />} />

          
          </Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
