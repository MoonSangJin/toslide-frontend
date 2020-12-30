import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div``;
const Title = styled.div`
  width: 100%;
  font-size: 50px;
`;
const DetailPresenter = () => {
  return (
    <Wrapper>
      <Title>Detial Page</Title>
      <Link to="/">Go Home</Link>
    </Wrapper>
  );
};
export default DetailPresenter;
