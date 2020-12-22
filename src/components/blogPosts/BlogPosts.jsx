import React from 'react';
import { BlogFilter } from '..';
import styled from 'styled-components';
import { gql } from '@apollo/client';

const Posts = styled.div`
  border: 2px solid palevioletred;
  display: flex;
  flex-direction: column;
  /* margin-left: auto; */
`;

// const BLOG_POSTS = gql`
//   query Posts {
    
//   }
// `;

export function BlogPosts() {
  return (
    <Posts>
      <BlogFilter />
      <p>Date</p>
      <p>Title</p>
      <p>Body</p>
    </Posts>
  )
}
