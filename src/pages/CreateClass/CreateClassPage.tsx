import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import ToggleSwtich from '../../components/ToggleSwitch';
import styled from 'styled-components';
import React from 'react';
import SymbolCenter from '../../assets/SymbolCenter';

const CreateClassPage = () => {
  return (
    <div>
      <Header />
      <StyledCreateClassPageContainer>
        <div>
          <StyledTitleDiv>방 제목</StyledTitleDiv>
          <StyledInput type="text" placeholder="방 제목을 입력하세요" />
        </div>
        <div>
          <StyledTitleDiv>방 비밀번호</StyledTitleDiv>
          <div style={{ display: 'flex' }}>
            <div style={{ margin: '0 30px 0 0', width: '120px' }}>
              <ToggleSwtich />
              <StyledSubDiv>비밀번호 설정 여부</StyledSubDiv>
            </div>
            <div style={{ width: '100%' }}>
              <StyledInput type="text" placeholder="비밀번호를 입력하세요" />
              <div style={{ color: 'red', fontSize: '10px' }}>
                영어, 숫자, 특수문자가 포함된 9~16글자이어야 합니다.
              </div>
            </div>
          </div>
        </div>
        <div>
          <StyledTitleDiv>방 이미지</StyledTitleDiv>
          <StyledSubDiv>클래스의 이미지를 선택해 주세요</StyledSubDiv>
          <StyledImgContainer>
            <SymbolCenter />
          </StyledImgContainer>
        </div>
        <div style={{ display: 'flex' }}>
          <div style={{ width: '50%' }}>
            <StyledTitleDiv>방 태그</StyledTitleDiv>
            <StyledSubDiv>방에 어울리는 태그를 선택해주세요</StyledSubDiv>
          </div>
          <div style={{ width: '50%' }}>
            <StyledTitleDiv>방 권한</StyledTitleDiv>
            <StyledSubDiv>
              방에 입장하는 사람들의 권한을 설정해주세요
            </StyledSubDiv>
          </div>
        </div>
        <div style={{ display: 'flex' }}>
          <div>취소</div>
          <div>생성</div>
        </div>
      </StyledCreateClassPageContainer>
      <Footer />
    </div>
  );
};

const StyledCreateClassPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 25px;
  margin: 40px auto;
  box-shadow: 0 0 20px #d9d9d9;
  width: 440px;
  height: 600px;
  border-radius: 10px;
`;
const StyledTitleDiv = styled.div`
  font-weight: bold;
  font-size: 13px;
  margin: 30px 0 0;
`;
const StyledInput = styled.input`
  width: 100%;
  padding: 6px;
  margin: 6px 0;
`;

const StyledSubDiv = styled.div`
  font-size: 10px;
  margin: 8px 0 0;
  color: gray;
`;

const StyledImgContainer = styled.div`
  border: 0.9px solid black;
  border-radius: 3px;
  width: 100%;
  height: 130px;
  margin-top: 10px;
`;

export default CreateClassPage;
