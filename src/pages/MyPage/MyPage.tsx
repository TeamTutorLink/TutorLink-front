import styled from 'styled-components';
import React from 'react';
import ClassListsMain from '../../components/ClassListsMain';
import MyPageBackground from '../../assets/MyPageBackground';
import MyPageProfile from '../../assets/MyPageProfile';
import FloatingButton from '../../components/FloatingButton';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';

const MyPage = () => {
  return (
    <div>
      <Header />
      <StyledBackgroundDiv>
        <MyPageBackground />
      </StyledBackgroundDiv>
      <StyledProfileDiv>
        <MyPageProfile />
      </StyledProfileDiv>
      <StyledContainer>
        <StyledNameDiv>김수학</StyledNameDiv>
        <div>
          <StyledHr />
          <StyledSubDiv>
            안녕하세요. 저는 수학 선생님 김수학입니다. 8년차 수학 강사입니다. 잘
            부탁드립니다. 궁금한 사항은 메시지 남겨주세요.
          </StyledSubDiv>
          <StyledHr />
        </div>
        <StyledListcontainer>
          <StyledList active="true">내 강의</StyledList>
          <StyledList active="">찜한 강의</StyledList>
        </StyledListcontainer>
        <StyledMainContainer>
          <ClassListsMain />
        </StyledMainContainer>
      </StyledContainer>
      <FloatingButton />
      <Footer />
    </div>
  );
};

const StyledBackgroundDiv = styled.div`
  position: relative;
`;
const StyledProfileDiv = styled.div`
  position: absolute;
  top: 170px;
  left: 43%;
  @media screen and (max-width: 1080px) {
    left: 40%;
    top: 200px;
  }
  @media screen and (max-width: 500px) {
    left: 35%;
    top: 250px;
  }
`;

const StyledContainer = styled.div`
  width: 70%;
  margin: auto;
  padding: 20px;
  @media screen and (max-width: 1080px) {
    width: 80%;
  }
  @media screen and (max-width: 500px) {
    width: 90%;
  }
`;

const StyledNameDiv = styled.div`
  font-size: 20px;
  margin: 60px 0 20px;
`;

const StyledHr = styled.hr`
  width: 100%;
  height: 0.1px;
  margin-bottom: 10px;
`;

const StyledSubDiv = styled.div`
  display: flex;
  width: 100%;
  font-size: 11px;
  margin-bottom: 10px;
  color: gray;
`;

const StyledListcontainer = styled.div`
  display: flex;
  margin-top: 40px;
`;
const StyledList = styled.div`
  border-bottom: ${({ active }) => {
    if (active) {
      return '3px solid #0e0171';
    }
    return null;
  }};
  color: ${({ active }) => {
    if (active) {
      return 'black';
    }
    return 'gray';
  }};
  padding-bottom: 2px;
  margin: 10px 10px 0 0;
  font-size: 12px;
  cursor: pointer;
  &: hover {
    color: black;
  }
`;
const StyledMainContainer = styled.div`
  margin: 20px auto 30px;
`;
export default MyPage;
