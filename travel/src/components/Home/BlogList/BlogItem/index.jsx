import React from 'react';
import Chip from '../../../common/Chip';
import './styles.css';

const BlogItem = ({
  blog: {
    description,
    title,
    createdAt,
    authorName,
    category,
    id,
    price,
    coverId,
  },
}) => {
  
  const cover = require(`../../../..//images/${coverId}.jpg`);
  const authorAvatar = require('../../../../images/author.jpg')
   return (
    <div className='blogItem-wrap'>
      <img className='blogItem-cover' src={cover} alt='cover' />
      <div className='blogItem-details'>
          <h3>{title}</h3>
          <Chip label={category} type="chip" />
          <p className='blogItem-desc'>{description}</p>
          <footer className='blogItem-footer'>
              <div className='blogItem-author'>
                  <img src={authorAvatar} alt='avatar' />
                  <div>
                      <h6>{authorName}</h6>
                      <p>{createdAt}</p>
                  </div>
              </div>
              <Chip label={price} type="price" />
          </footer>
      </div>
    </div>
  );
};

export default BlogItem;
