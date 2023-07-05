import React from 'react';
import styled from 'styled-components';
import ClassList from './ClassList';

const ClassListsMain = () => {
  return (
    <StyledContainer>
      <StyledTitleDiv>인기있는 강의</StyledTitleDiv>
      <StyledClassLists>
        <ClassList />
        <ClassList />
        <ClassList />
        <ClassList />
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
const StyledTitleDiv = styled.div`
  font-weight: bold;
  font-size: 20px;
  margin: 30px 0 10px;
`;

export default ClassListsMain;
