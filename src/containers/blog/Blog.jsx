import React from 'react';
import { Article } from '../../components';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';

import './blog.css';

const Blog = () => {
    return (
        <div id="blog" className="blog section__padding">

          <div className="blog-heading">
            <h1 className="gradient__text">Holaaaa</h1>
          </div>

          <div className="blog-container">
            <div className="blog-container-groupA">
              <Article
                imgURL={ blog01 } 
                date="Dec 1st 2021" 
                title="Article Title"
              />
            </div>

            <div className="blog-container-groupB">
              <Article
                imgURL={ blog02 } 
                date="Dec 1st 2021" 
                title="Article Title"
              />
              <Article
                imgURL={ blog03 } 
                date="Dec 1st 2021" 
                title="Article Title"
              />
              <Article
                imgURL={ blog04 } 
                date="Dec 1st 2021" 
                title="Article Title"
              />
              <Article
                imgURL={ blog05 } 
                date="Dec 1st 2021" 
                title="Article Title"
              />
            </div> 

          </div>
        </div>
    )
}

export default Blog
