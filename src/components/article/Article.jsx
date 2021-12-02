import React from 'react';

import './article.css';

const Article = ({ imgURL, date, title }) => {
    return (
        <div className="article">

            <div className="article-image">
                <img src={ imgURL } alt="imgURL" />
            </div>

            <div className="article-content">
                <div>
                    <p> {date} </p>
                    <h3> {title} </h3>
                </div>

                <p>Read Full Article</p>
            </div>

        </div>
    )
}

export default Article
