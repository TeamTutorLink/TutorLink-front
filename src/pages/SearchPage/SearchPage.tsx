import React from 'react';
import styled from 'styled-components';
import FloatingButton from '../../components/FloatingButton';
import ClassListsSearch from '../../components/ClassListsSearch';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';

const SearchPage = () => {
  return (
    <div>
      <Header />
      <StyledMainContainer>
        <ClassListsSearch />
      </StyledMainContainer>
      <FloatingButton />
      <Footer />
    </div>
  );
};

const StyledMainContainer = styled.div`
  width: 60%;
  margin: 30px auto 30px;
  @media screen and (max-width: 1080px) {
    width: 70%;
  }
  @media screen and (max-width: 500px) {
    width: 80%;
  }
`;

export default SearchPage;
