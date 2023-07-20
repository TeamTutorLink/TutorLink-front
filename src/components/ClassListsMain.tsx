import React from 'react';
import styled from 'styled-components';
import ClassEach from './ClassEach';
import API from '../API/API';

const ClassListsMain = () => {
  return (
    <StyledContainer>
      <StyledClassLists>
        <ClassEach
          lessonId={3}
          title="두시수업"
          userName="김다정"
          likeCount={10}
        />
        <ClassEach
          lessonId={3}
          title="두시수업"
          userName="김다정"
          likeCount={10}
        />
        <ClassEach
          lessonId={3}
          title="두시수업"
          userName="김다정"
          likeCount={10}
        />
        <ClassEach
          lessonId={3}
          title="두시수업"
          userName="김다정"
          likeCount={10}
        />
      </StyledClassLists>{' '}
    </StyledContainer>
  );
};
const StyledContainer = styled.div`
  margin: 0 0 80px;
`;
const StyledClassLists = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export default ClassListsMain;
