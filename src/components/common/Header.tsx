import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import SymbolLogo from '../../assets/SymbolLogo';
import styled from 'styled-components';

const Header = () => {
  const navigate = useNavigate();
  return (
    <StyledHeaderContainer>
      <div role="button" onClick={() => navigate('/')}>
        <SymbolLogo />
      </div>
      <StyledSearchBar>
        <input type="text" placeholder="검색" />
        <div role="button">검색</div>
      </StyledSearchBar>
      {/* <StyledUserInfo>
        <li>
          <Link to="/login">로그인</Link>
        </li>
        <li>
          <Link to="/">회원가입</Link>
        </li>
      </StyledUserInfo> */}
    </StyledHeaderContainer>
  );
};

const StyledHeaderContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  padding: 20px 0;
  border-bottom: 1px solid #ececec;
`;
const StyledSearchBar = styled.div`
  width: 40%;
  height: 35px;
  display: flex;
  margin: 4px 0 0 90px;
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
  @media screen and (max-width: 500px) {
    display: none;
  }
`;
// const StyledUserInfo = styled.ul`
//   display: flex;
//   position: relative;
//   // top: 0px;
//   width: 20%;
//   font-size: 1.3rem;
//   align-items: center;
//   flex-wrap: wrap;
//   & li {
//     margin: 0 20px;
//     list-style: none;
//   }
// `;

export default Header;
