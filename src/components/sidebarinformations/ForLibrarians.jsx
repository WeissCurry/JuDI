    // src/pages/ForLibrarians.jsx

    import React from 'react';

    const ForLibrarians = () => {
    return (
        <div className="bg-white p-8 shadow-lg rounded-lg lg:w-[1050px] mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-4">
            Information for Librarians
        </h1>

        <div className="space-y-8 text-gray-700 leading-relaxed text-justify">
            {/* --- Journal Information Section --- */}
            <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
                Journal Information
            </h2>
            <p>
                <strong>JuDI: Jurnal Komedi</strong> is a peer-reviewed, open-access scholarly journal dedicated to the critical and comedic analysis of academia and research culture. Below are the key details for your cataloging needs.
            </p>
            <ul className="list-disc list-inside space-y-2 pl-4 mt-3 bg-gray-50 p-4 rounded-md">
                <li><strong>Journal Title:</strong> JuDI: Jurnal Komedi</li>
                <li><strong>ISSN:</strong> undefined</li>
                <li><strong>Frequency:</strong> Biannually (April & October), or whenever we've collected enough academic trauma.</li>
                <li><strong>Publisher:</strong> The Committee for Comedic Catharsis</li>
                <li><strong>Access Model:</strong> Fully <strong>Open Access</strong>. Zero subscription fees. Your acquisitions budget can thank us later.</li>
            </ul>
            </section>

            {/* --- Preservation Section --- */}
            <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
                Digital Archiving and Preservation
            </h2>
            <p>
                We are committed to the long-term preservation of our content. Our journal is archived in leading digital preservation networks (e.g., LOCKSS, CLOCKSS, Portico) and also in the resentful memories of our reviewers to ensure its availability for future generations of disillusioned academics.
            </p>
            </section>

            {/* --- Indexing Section --- */}
            <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
                Indexing and Discoverability
            </h2>
            <p>
                We understand the importance of discoverability. JuDI is currently indexed in the *Index of Papers That Should Have Been a Blog Post* and the *Database of Questionable Correlations*. We are actively pursuing indexing in more prestigious databases, assuming they have a sense of humor.
            </p>
            </section>

            {/* --- Recommendation Section --- */}
            <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
                Recommend Us to Your Patrons
            </h2>
            <p>
                Please recommend JuDI to students and faculty who look like they need a good laugh, a moment of recognition, or a reminder that their research problems aren't *that* weird. Our content serves as an excellent resource for teaching critical thinking, academic writing, and the importance of not taking oneself too seriously.
            </p>
            </section>
        </div>
        </div>
    );
    };

    export default ForLibrarians;