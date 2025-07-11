// src/pages/ForReaders.jsx

import React from 'react';

const ForReaders = () => {
    return (
        <div className="bg-white p-8 shadow-lg rounded-lg lg:w-[1050px] mx-auto">
            <h1 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-4">
                Information for Readers
            </h1>

            <div className="space-y-8 text-gray-700 leading-relaxed text-justify">
                {/* --- Open Access Section --- */}
                <section>
                    <h2 className="text-2xl font-bold text-gray-800 mb-3">
                        Unlimited Access to the Archive of Academic Comedy
                    </h2>
                    <p>
                        Welcome, dear readers! At <strong>JuDI: Jurnal Komedi</strong>, we adhere to the most radical of access policies: <strong>Open Access</strong>. This means all articles, absurd studies, and sharp analyses are available for you to read, download, and share for free, anytime, anywhere.
                    </p>
                    <p className="mt-2">
                        We believe the suffering involved in writing and reviewing a paper is payment enough. Adding a paywall on top of that is a crime against humanity (and good humor).
                    </p>
                </section>

                {/* --- How to Use Our Articles Section --- */}
                <section>
                    <h2 className="text-2xl font-bold text-gray-800 mb-3">
                        How Should You Use Our Research?
                    </h2>
                    <p>
                        Although rigorously reviewed (for comedic value), we encourage the creative use of our articles. Here are a few suggestions from the editorial board:
                    </p>
                    <ul className="list-disc list-inside space-y-2 pl-4 mt-3">
                        <li>
                            As a <strong>citation source</strong> to make your presentations or lectures less stiff.
                        </li>
                        <li>
                            As a <strong>source of inspiration</strong> when you feel your own research is the weirdest in the world (spoiler alert: it's not).
                        </li>
                        <li>
                            As a <strong>procrastination tool</strong> that still feels productive and academic.
                        </li>
                        <li>
                            To be <strong>shared with colleagues</strong> in your group chat with the caption, "This is so us."
                        </li>
                        <li>
                            As <strong>light reading material</strong> while you're in the middle of correcting "minor" revisions that turned out to be major.
                        </li>
                    </ul>
                </section>

                {/* --- Registration Section --- */}
                <section>
                    <h2 className="text-2xl font-bold text-gray-800 mb-3">
                        Get Notified of the Latest Absurdity
                    </h2>
                    <p>
                        The academic world produces new comedic material every single day. To ensure you don't miss our latest issues, consider registering as a reader on our OJS platform (if available). By registering, you will receive notifications every time a new issue full of frustration... we mean, inspiration, is published.
                    </p>
                </section>

                {/* --- Licensing Section --- */}
                <section>
                    <h2 className="text-2xl font-bold text-gray-800 mb-3">
                        License and the Right to Laugh
                    </h2>
                    <p>
                        All works published in JuDI are licensed under a <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Creative Commons Attribution-ShareAlike 4.0 International License</a>. This means you are free to copy, distribute, and adapt the work for any purpose, even commercially, as long as you:
                    </p>
                    <ul className="list-decimal list-inside space-y-2 pl-4 mt-3">
                        <li>Give appropriate credit (cite the author and the journal).</li>
                        <li>Indicate if changes were made.</li>
                        <li>Share your derivative works under the same license.</li>
                    </ul>
                    <p className="mt-2">
                        Simply put: please share it widely, because stealing a joke isn't funny, but sharing one is a good deed.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default ForReaders;