import styled, { css } from 'styled-components';
import React from 'react';
import { useState } from 'react';

const ToggleSwtich = () => {
  const [toggle, setToggle] = useState(false);
  const clickedToggle = () => {
    setToggle((prev) => !prev);
  };
  return (
    <div>
      <StyledToggleBtn onClick={clickedToggle} toggle={toggle}>
        <StyledCircle toggle={toggle} />
      </StyledToggleBtn>
      {/* <h3>Toggle Switch {!toggle ? 'OFF' : 'ON'}</h3> */}
    </div>
  );
};

const StyledToggleBtn = styled.button`
  margin: 5px 0;
  width: 70px;
  height: 30px;
  border-radius: 30px;
  border: none;
  cursor: pointer;
  background-color: ${(props: any) => (!props.toggle ? '#0e0171' : '#0CDCBF')};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease-in-out;
`;
const StyledCircle = styled.div`
  background-color: white;
  width: 23px;
  height: 23px;
  border-radius: 50px;
  position: absolute;
  left: 5%;
  transition: all 0.5s ease-in-out;
  ${(props) =>
    props.toggle &&
    css`
      transform: translate(40px, 0);
      transition: all 0.5s ease-in-out;
    `}
`;
export default ToggleSwtich;
