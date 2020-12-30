import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div``;
const Title = styled.div`
  width: 100%;
  font-size: 50px;
`;
const HomeScreenPresenter = () => {
  return (
    <Container>
      <Title>Mainpage : Toslide</Title>
      <Link to="/detail/">Go Detail</Link>
    </Container>
  );
};
export default HomeScreenPresenter;
