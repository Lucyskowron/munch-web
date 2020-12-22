import React from 'react';
import styled from 'styled-components';

const Filter = styled.div`
  border: 2px solid palevioletred;
  width: 100px;
  display: flex;
  flex-direction: column;
  position: absolute; 
  right: 0;
  justify-content: flex-end;
`;

export function BlogFilter() {
  return (
    <Filter>
      <p>Angelica</p>
      <p>Bertrum</p>
      <p>Chocky</p>
      <p>Flumpy</p>
    </Filter>
  )
}
