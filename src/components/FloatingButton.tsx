import styled, { css } from 'styled-components';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import PlusIcon from '../assets/PlusIcon';

const FloatingButton = () => {
  const [toggle, setToggle] = useState(false);
  const clickedToggle = () => {
    setToggle((prev) => !prev);
  };
  return (
    <div>
      <StyledCircleDiv onClick={clickedToggle}>
        <PlusIcon />
      </StyledCircleDiv>
      <StyledSideBlock toggle={toggle}>
        <Link to="/createclasspage">강의 추가 하기</Link>
      </StyledSideBlock>
    </div>
  );
};

const StyledCircleDiv = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: #0e0171;
  color: white;
  padding: 0 0 0 11px;
  position: fixed;
  z-index: 10;
  right: 40px;
  bottom: 40px;
  cursor: pointer;
  @media screen and (max-width: 500px) {
    right: 20px;
    bottom: 30px;
  }
`;

const StyledSideBlock = styled.div`
  position: absolute;
  position: fixed;
  right: -70px;
  font-weight: bold;
  bottom: 45px;
  background-color: #0cdcbf;
  padding: 16px 36px 16px 23px;
  border-radius: 20px;
  transform: scale(0.1) translateX(-500px);
  transition: all 0.5s ease-in-out;
  cursor: pointer;
  ${(props) =>
    props.toggle &&
    css`
      transform: translate(-142px, 0);
      transition: all 0.5s ease-in-out;
    `}
  @media screen and (max-width: 500px) {
    right: -90px;
    bottom: 35px;
  }
`;

export default FloatingButton;
