import React from 'react';
import styled from 'styled-components';
import FloatingButton from '../../components/FloatingButton';
import Carousel from '../../components/Carousel';
import ClassListsMain from '../../components/ClassListsMain';

const MainPage = () => {
  return (
    <div>
      <Carousel />
      <StyledMainContainer>
        <ClassListsMain />
        <ClassListsMain />
        <ClassListsMain />
      </StyledMainContainer>
      <FloatingButton />
    </div>
  );
};

const StyledMainContainer = styled.div`
  width: 80%;
  margin: 60px auto 30px;

  @media screen and (max-width: 1080px) {
    width: 90%;
  }
  @media screen and (max-width: 500px) {
    width: 90;
  }
`;

export default MainPage;
