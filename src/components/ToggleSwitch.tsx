import styled, { css } from 'styled-components';
import React, { useState } from 'react';
import PasswordInput from './PasswordInput';

const ToggleSwtich = () => {
  const [toggle, setToggle] = useState(false);

  const clickedToggle = () => {
    setToggle((prev) => !prev);
  };

  return (
    <div style={{ display: 'flex' }}>
      <div>
        <StyledToggleBtn onClick={clickedToggle} toggle={toggle}>
          <StyledCircle toggle={toggle} />
        </StyledToggleBtn>
        {/* <div>toggle switch{!toggle ? 'OFF' : 'ON'}</div> */}
        <StyledSubDiv>비밀번호 설정 여부</StyledSubDiv>
      </div>
      <div>{!toggle ? null : <PasswordInput />}</div>
    </div>
  );
};

const StyledToggleBtn = styled.button`
  margin: 5px 30px 5px 0;
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

const StyledSubDiv = styled.div`
  font-size: 10px;
  margin: 8px 0 0;
  color: gray;
`;
export default ToggleSwtich;
