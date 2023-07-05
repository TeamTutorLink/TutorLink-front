import React from 'react';
import styled from 'styled-components';
import TestImage from '../assets/TestImage';

const ClassList = () => {
  return (
    <StyledContainer>
      <TestImage />
      <StyledClassName>20시 타임 수학과외 클래스입니다!</StyledClassName>
      <StyledTag>태그</StyledTag>
      <StyledTeacherName>김선생</StyledTeacherName>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  margin: 0 3px;

  @media screen and (max-width: 1080px) {
  }
  @media screen and (max-width: 500px) {
  }
`;

const StyledClassName = styled.div`
  font-weight: bold;
  font-size: 13px;
  margin: 6px 0 0;
  width: 100%;
  @media screen and (max-width: 1080px) {
  }
  @media screen and (max-width: 500px) {
  }
`;
const StyledTag = styled.div`
  font-size: 10px;
  margin: 3px 0 0;
  color: gray;
  @media screen and (max-width: 1080px) {
  }
  @media screen and (max-width: 500px) {
  }
`;
const StyledTeacherName = styled.div`
  font-size: 10px;
  margin: 3px 0 0;
  color: gray;
`;
export default ClassList;
