import React from 'react';
import styled from 'styled-components';
import ClassList from './ClassList';

const ClassListsMain = () => {
  return (
    <StyledContainer>
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

export default ClassListsMain;
