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
        <div>
          <div>검색결과</div>
          <div>00개의 강의를 찾았어요!</div>
          <hr />
        </div>
        <div>
          <div>관련된 강의</div>
          <div>00개의 강의를 찾았어요!</div>
          <hr />
        </div>
        <div>
          <div>관련된 강의</div>
          <div>
            00개의 강의를 찾았어요! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Corrupti odit voluptatem aut doloribus numquam eos
            nisi, ad quam consectetur impedit in, alias maxime. Veritatis
            voluptate quo dolores dolore pariatur quaerat!
          </div>
          <hr />
        </div>
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
