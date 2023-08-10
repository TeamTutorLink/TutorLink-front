import React from 'react';
import styled from 'styled-components';
import FloatingButton from '../../components/FloatingButton';
import Carousel from '../../components/Carousel';
import ClassListsMain from '../../components/ClassListsMain';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';

const MainPage = () => {
  return (
    <div>
      <Header />
      <Carousel />
      <StyledMainContainer>
        <StyledTitleDiv>인기있는 강의</StyledTitleDiv>
        <ClassListsMain />
        <StyledTitleDiv>최신 강의</StyledTitleDiv>
        <ClassListsMain />
      </StyledMainContainer>
      <FloatingButton />
      <Footer />
    </div>
  );
};
const StyledTitleDiv = styled.div`
  font-weight: bold;
  font-size: 20px;
  margin: 30px 0 10px;
`;
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
