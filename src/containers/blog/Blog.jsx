import React from 'react';
import { Article } from '../../components';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';

import './blog.css';

const Blog = () => {
    return (
        <div id="blog" className="blog section__padding">

          <div className="blog-heading">
            <h1 className="gradient__text">A lot is happening, We are blogging about it.</h1>
          </div>

          <div className="blog-container">
            <div className="blog-container-groupA">
              <Article
                imgURL={ blog01 } 
                date="Dec 1st 2021" 
                title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
              />
            </div>

            <div className="blog-container-groupB">
              <Article
                imgURL={ blog02 } 
                date="Dec 1st 2021" 
                title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
              />
              <Article
                imgURL={ blog03 } 
                date="Dec 1st 2021" 
                title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
              />
              <Article
                imgURL={ blog04 } 
                date="Dec 1st 2021" 
                title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
              />
              <Article
                imgURL={ blog05 } 
                date="Dec 1st 2021" 
                title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
              />
            </div> 
          </div>
        </div>
    )
}

export default Blog
