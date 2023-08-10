import React from 'react';
import styled from 'styled-components';
import TestImage from '../assets/TestImage';

interface ClassEachProps {
  lessonId: number;
  title: string;
  userName: string;
  likeLesson?: boolean;
  likeCount: number;
}

const ClassEach = (props: ClassEachProps) => {
  const { lessonId, title, userName, likeLesson, likeCount } = props;
  return (
    <StyledContainer>
      <TestImage />
      <StyledClassName>{title}</StyledClassName>
      <StyledTag>
        {lessonId}
        {/* {likeLesson} */}
        {/* {likeCount} */}
      </StyledTag>
      <StyledTeacherName>{userName}</StyledTeacherName>
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
export default ClassEach;
