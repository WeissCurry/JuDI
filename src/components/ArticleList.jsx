    // src/components/ArticleList.jsx
    import React from 'react';
    import ArticleItem from './ArticleItems';
    import Data from "../database/ArticleListVol1No1.js"


    const ArticleList = () => {
    return (
        <main className="w-full lg:w-[1050px] md:w-2/3 p-4">
        <h2 className="text-2xl font-semibold border-b pb-2 mb-4">Current Issue</h2>
        <div>
            {Data.map((article) => (
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
        </main>
    );
    };

    export default ArticleList;