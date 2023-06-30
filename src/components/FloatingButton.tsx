import styled, { css } from 'styled-components';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const FloatingButton = () => {
  const [toggle, setToggle] = useState(false);
  const clickedToggle = () => {
    setToggle((prev) => !prev);
  };
  return (
    <div>
      <StyledCircleDiv onClick={clickedToggle}>+</StyledCircleDiv>
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
  font-size: 56px;
  padding-left: 11px;
  position: fixed;
  z-index: 10;
  right: 40px;
  bottom: 40px;
  cursor: pointer;
`;

const StyledSideBlock = styled.div`
  position: absolute;
  position: fixed;
  right: -70px;
  font-weight: bold;
  bottom: 45px;
  background-color: #0cdcbf;
  padding: 16px 34px 16px 30px;
  border-radius: 20px;
  transform: scale(0);
  transition: all 0.5s ease-in-out;
  cursor: pointer;
  ${(props) =>
    props.toggle &&
    css`
      transform: translate(-142px, 0);
      transition: all 0.5s ease-in-out;
    `}
`;

export default FloatingButton;
