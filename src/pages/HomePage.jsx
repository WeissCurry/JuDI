// src/pages/HomePage.jsx
import React from 'react';
import ArticleItem from '../components/ArticleItems'; // Pastikan path ini benar
import Data from '../database/ArticleListVol1No1'
import cover from '../../public/Cover.png' // Pastikan path cover ini benar

const HomePage = () => {
    return (
        <div className="bg-gray-50">
            {/* 1. Hero Section --- TELAH DISESUAIKAN --- */}
            <header className="bg-white border-b">
                <div className="lg:w-[1050px] mx-auto p-6 md:p-8">
                    {/* Mengubah layout menjadi 2 kolom dengan grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                        
                        {/* Kolom Kiri: Cover Jurnal */}
                        <div className="md:col-span-1 w-full max-w-[300px] mx-auto md:mx-0">
                            {/* Wrapper untuk menjaga rasio aspek A4 (210:297) */}
                            <div className="aspect-[210/297] bg-gray-200 rounded-md overflow-hidden shadow-lg">
                                <img 
                                    src={cover} 
                                    alt="JuDI: Jurnal Komedi Cover" 
                                    className="w-full h-full object-cover" 
                                />
                            </div>
                        </div>

                        {/* Kolom Kanan: Deskripsi Jurnal */}
                        <div className="md:col-span-2">
                            <h1 className="text-2xl font-bold text-gray-800">
                                JuDI: Jurnal Komedi
                            </h1>
                            <p className="mt-3 text-gray-700 leading-relaxed text-justify">
                                <strong>JuDI: Jurnal Komedi</strong> is a peer-reviewed, open-access scholarly journal dedicated to the critical and comedic analysis of academia and research culture. Below are the key details for your cataloging needs.
                            </p>
                            <div className="bg-gray-50 border p-4 rounded-lg mt-4">
                                <h2 className="text-lg font-bold text-gray-800 mb-3">Journal Information</h2>
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p><strong>Journal Title:</strong> JuDI: Jurnal Komedi</p>
                                    <p><strong>ISSN:</strong> undefined</p>
                                    <p><strong>Frequency:</strong> Biannually (April & October), or whenever we've collected enough academic trauma.</p>
                                    <p><strong>Publisher:</strong> The Committee for Comedic Catharsis</p>
                                    <p><strong>Access Model:</strong> Fully <strong>Open Access</strong>. Zero subscription fees. Your acquisitions budget can thank us later.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </header>

            <main className="lg:w-[1050px] mx-auto p-6 md:p-8">
                {/* Bagian lainnya tetap sama... */}
                <section className="my-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-4">
                        Fresh from the Depths of Peer Review
                    </h2>
                    <div className="space-y-8">
                        {Data.map(article => (
                            <ArticleItem
                                key={article.id}
                                title={article.title}
                                authors={article.authors}
                                abstract={article.abstract}
                                pdf={article.pdf}
                                details={article.details}
                            />
                        ))}
                    </div>
                </section>

                <section className="my-16">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Tragically Open Access</h3>
                            <p className="text-gray-600">Laughter and knowledge shouldn't be behind a paywall. Your library's budget is safe with us. All content is free, forever.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Rigorously Reviewed Humor</h3>
                            <p className="text-gray-600">Every article is judged by actual academics on its comedic timing, painful accuracy, and contribution to the field of satire.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold text-gray-800 mb-2">A Home for Your Genius</h3>
                            <p className="text-gray-600">You retain full copyright of your work. We provide a platform for your brilliant, weird ideas because they deserve to be shared.</p>
                        </div>
                    </div>
                </section>

                <section className="my-12 bg-blue-50 text-center p-10 rounded-lg">
                    <h2 className="text-3xl font-bold text-gray-800">
                        Have a Stroke of Frustrated Genius?
                    </h2>
                    <p className="mt-3 text-lg text-gray-700 max-w-2xl mx-auto">
                        Your groundbreaking study on the physics of dropped toast or the sociology of Zoom meetings deserves to be published. We are now accepting submissions for our next issue.
                    </p>
                    <a href="/for-authors" className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg">
                        Submit Your Paper
                    </a>
                </section>
            </main>
        </div>
    );
};

export default HomePage;