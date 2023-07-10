import styled from 'styled-components';
import React from 'react';
import Symbol from '../../assets/Symbol';
import SocialLoginButtons from '../../components/SocialLoginButtons';

const LoginPage = () => {
  return (
    <div>
      <StyledCreateClassPageContainer>
        <div style={{ margin: '0 auto 20px' }}>
          <Symbol />
        </div>
        <div>
          <StyledInput type="text" placeholder="아이디를 입력하세요" />
          <StyledInput type="text" placeholder="비밀번호를 입력하세요" />
        </div>
        <StyledButton>로그인</StyledButton>
        <div style={{ display: 'flex' }}>
          <StyledHr />
          <StyledSubDiv>간편 로그인</StyledSubDiv>
          <StyledHr />
        </div>
        <SocialLoginButtons />
      </StyledCreateClassPageContainer>
    </div>
  );
};

const StyledHr = styled.hr`
  width: 40%;
  height: 0.5px;
  margin: auto;
`;
const StyledCreateClassPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px 25px;
  margin: 40px auto;
  box-shadow: 0 0 20px #d9d9d9;
  width: 440px;
  height: 90%;
  border-radius: 10px;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 11px;
  margin: 6px 0;
`;

const StyledSubDiv = styled.div`
  display: flex;
  font-size: 11px;
  margin: auto;
  color: gray;
  span {
    font-weight: bold;
    font-size: 12px;
    color: black;
  }
`;

const StyledButton = styled.div`
  margin: 30px auto 70px;
  width: 170px;
  height: 40px;
  font-weight: bold;
  color: white;
  padding: 10px;
  text-align: center;
  background-color: #0e0171;
  border-radius: 15px;
  cursor: pointer;
  &:hover {
    color: #0e0171;
    background-color: white;
    border: 1.5px solid #0e0171;
  }
`;

export default LoginPage;
