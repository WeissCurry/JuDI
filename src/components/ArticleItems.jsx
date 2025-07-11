import React from "react";

const ArticleItem = ({ title, authors, abstract, pdf, details }) => {
    console.log("ini title", title);
    console.log("ini pdf", pdf);

    return (
        <div className="border-b border-gray-200 py-6">
            <h3 className="text-xl font-bold text-blue-800 hover:underline cursor-pointer">
                {title}
            </h3>
            <p className="text-sm text-gray-700 mt-1 italic">{authors}</p>
            <p className="mt-3 text-gray-600 leading-relaxed text-justify">{abstract}</p>
            <div className="mt-4 flex space-x-4">
                <a
                    href={pdf}
                    target="_blank" // Membuka link di tab baru
                    rel="noopener noreferrer" // Praktik keamanan untuk target="_blank"
                    className="text-sm font-semibold text-white bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700"
                >
                    PDF
                </a>

                <a
                    href={details} // Menggunakan prop 'details' untuk link
                    className="text-sm font-semibold text-gray-700 bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-300"
                >
                    Details
                </a>
            </div>
        </div>
    );
};

export default ArticleItem;