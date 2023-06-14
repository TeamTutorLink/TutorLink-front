import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Symbol from '../assets/Symbol';
import React from 'react';
import styled from 'styled-components';
import SymbolLogo from '../assets/SymbolLogo';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <Header />
      <StyledSymbolLogo>
        <SymbolLogo />
      </StyledSymbolLogo>
      <StyledContainer>
        <div>
          <Symbol />
        </div>
        <StyledTitleDiv>원하시는 페이지를 찾을 수 없습니다</StyledTitleDiv>
        <StyledDiv>
          <div>찾으시려는 페이지의 주소가 잘못 입력되었거나,</div>
          <div>주소의 변경 혹은 삭제로 인해 사용하실 수 없습니다.</div>
          <div>입력하신 페이지의 주소가 정확한지 다시 한번 확인해 주세요.</div>
        </StyledDiv>
        <StyledButton>
          <Link to={`/`} style={{ textDecoration: 'none' }}>
            홈으로 가기
          </Link>
        </StyledButton>
      </StyledContainer>
      <Footer />
    </>
  );
};

const StyledSymbolLogo = styled.div`
  z-index: -10;
`;

const StyledContainer = styled.div`
  width: 70%;
  height: 540px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledTitleDiv = styled.div`
  font-size: 23px;
  font-weight: bold;
  text-align: center;
  margin: 10px;
`;

const StyledDiv = styled.div`
  color: grey;
  font-size: 14px;
  text-align: center;
  margin-bottom: 10px;
`;

const StyledButton = styled.button`
  border: 0;
  outline: 0;
  background-color: #0cdcbf;
  color: white;
  font-size: 15px;
  padding: 10px 15px;
  border-radius: 14px;
  cursor: pointer;
  margin-top: 15px;
`;

export default NotFound;
