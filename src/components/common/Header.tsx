import React from 'react';
import SymbolLogo from '../../assets/SymbolLogo';
import styled from 'styled-components';

const Header = () => {
  return (
    <StyledHeaderContainer>
      <div role="button">
        <SymbolLogo />
      </div>
      <StyledSearchBar>
        <input type="text" placeholder="검색" />
        <div role="button">검색</div>
      </StyledSearchBar>
      <StyledUserInfo>
        <li>로그인</li>
        <li>회원가입</li>
      </StyledUserInfo>
    </StyledHeaderContainer>
  );
};

const StyledHeaderContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  padding: 20px 0 0;
`;
// 민트 - #0cdcbf / 남색 - #0e0171
const StyledSearchBar = styled.div`
  width: 30%;
  height: 35px;
  display: flex;
  margin: 4px 70px 0;
  position: relative;
  & input {
    width: 100%;
    border-radius: 10px;
    border: 1.5px solid #0e0171;
    padding-left: 20px;
  }
  & div {
    position: absolute;
    right: 0;
    height: 35px;
    width: 15%;
    border-radius: 10px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    color: white;
    background-color: #0e0171;
    font-size: 18px;
    cursor: pointer;
  }
`;
const StyledUserInfo = styled.ul`
  display: flex;
  position: relative;
  top: -10px;
  width: 20%;
  font-size: 1.3rem;
  align-items: center;
  flex-wrap: wrap;
  & li {
    margin: 0 20px;
    list-style: none;
  }
`;

export default Header;
