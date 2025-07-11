// src/pages/ForAuthors.jsx

import React from 'react';

const ForAuthors = () => {
  return (
    <div className="bg-white p-8 shadow-lg rounded-lg lg:w-[1050px] mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-4">
        Information for Authors
      </h1>

      <div className="space-y-8 text-gray-700 leading-relaxed text-justify">
        {/* --- Why Publish With Us Section --- */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            Why Publish Your Genius Here?
          </h2>
          <p>
            Welcome, prospective author. Do you have research that is too brilliant, too niche, or too painfully true for mainstream journals? Have you channeled your academic frustration into a work of comedic art? If so, you've found your home.
          </p>
          <p className="mt-2">
            Publishing with <strong>JuDI: Jurnal Komedi</strong> offers you a unique opportunity for impactful procrastination. We provide a (relatively) fast peer-review process, global visibility, and the chance to finally get credit for the satirical observations you've been making for years. Think of it as therapy, but with a DOI.
          </p>
        </section>

        {/* --- Submission Guidelines Section --- */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            Author Guidelines
          </h2>
          <p>
            To maintain a facade of academic rigor, we ask that you follow these simple guidelines:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-4 mt-3">
            <li>
              <strong>Manuscript Scope:</strong> Your submission should align with our <a href="/about" className="text-blue-600 hover:underline">Focus and Scope</a>. We welcome meta-analyses of academic absurdities, theoretical frameworks for mundane phenomena, and empirical studies in comedic science.
            </li>
            <li>
              <strong>Formatting:</strong> Please submit in a standard academic format (e.g., Word, LaTeX). Use any citation style you like; our copyeditors have given up and will likely accept it as long as it looks consistent.
            </li>
            <li>
              <strong>Originality:</strong> Your work must be original, though we understand that in academia, "originality" is just well-concealed plagiarism. Please do your best to make it sound new.
            </li>
             <li>
              <strong>Anonymity:</strong> We use a single-blind review process. Our reviewers will know who you are, but you will be shielded from their identities—mostly for your own emotional safety.
            </li>
          </ul>
        </section>

        {/* --- Peer Review Section --- */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            Our Unique Peer Review
          </h2>
          <p>
            Your manuscript will be judged on two primary criteria: Is it academically sound? And more importantly, is it funny? Our reviewers are experts in their fields and possess a desperately needed sense of humor. Expect constructive feedback aimed at enhancing both the critical insight and the comedic timing of your work.
          </p>
        </section>

        {/* --- Copyright Section --- */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            Author Rights & Copyright
          </h2>
          <p>
            You, the author, retain full copyright of your work. All articles are published under a <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Creative Commons Attribution-ShareAlike 4.0</a> license. This allows others to share and build upon your work, as long as they credit you. You own your genius (and your jokes).
          </p>
        </section>
      </div>
    </div>
  );
};

export default ForAuthors;