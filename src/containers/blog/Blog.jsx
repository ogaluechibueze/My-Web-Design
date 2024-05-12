import React from 'react';
import './blog.css';
import { Article } from '../../components';
import {blog01, blog02, blog03, blog04, blog05} from '../blog/imports';

const Blog = () => {
  return (
    <div className='gpt3__blog section-padding' id='blog'>
      <div className='gpt3__blog-heading'>
      <h1 className='gradient_text'>A lot is happening,<br /> We are blogging about it.</h1>
      </div>
      <div className='gpt3__blog-container'>
       <div className='gpt3__blog-container__groupA'>
       <Article imgUrl={blog01} date="sept 26, 2024" title="GPT-3 and Open AI is the future. let us explore how it is?" />
       </div>
       <div className='gpt3__blog-container__groupB'>
       <Article imgUrl={blog02} date="sept 26, 2024" title="GPT-3 and Open AI is the future. let us explore how it is?" />
       <Article imgUrl={blog03} date="sept 26, 2024" title="GPT-3 and Open AI is the future. let us explore how it is?" />
       <Article imgUrl={blog04} date="sept 26, 2024" title="GPT-3 and Open AI is the future. let us explore how it is?" />
       <Article imgUrl={blog05} date="sept 26, 2024" title="GPT-3 and Open AI is the future. let us explore how it is?" />
    </div>
      </div>
    </div>
  )
}

export default Blog
