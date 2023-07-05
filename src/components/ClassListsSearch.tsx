import React from 'react';
import styled from 'styled-components';
import ClassList from './ClassList';

const ClassListsSearch = () => {
  return (
    <StyledContainer>
      <StyledTitleDiv>검색 결과</StyledTitleDiv>
      <StyledSubDiv>00개의 강의를 찾았어요!</StyledSubDiv>
      <hr />
      <StyledClassLists>
        <ClassList />
        <ClassList />
        <ClassList />
        <ClassList />
      </StyledClassLists>
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
  font-size: 25px;
  margin: 30px 0 10px;
`;
const StyledSubDiv = styled.div`
  font-size: 14px;
  margin: 8px 0 10px;
  color: gray;
`;
export default ClassListsSearch;
