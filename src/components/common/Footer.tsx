import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <StyledFooterContainer>
      <StyledDiv>
        <div>2023</div>
        <div>06</div>
        <div>TutorLink</div>
        <div>Project</div>
      </StyledDiv>
      <StyledSelect>
        <option value="">TutorLinkTeam</option>
        <option value="">다정</option>
        <option value="">지웅</option>
        <option value="">아영</option>
        <option value="">경회</option>
        <option value="">호준</option>
      </StyledSelect>
      <StyledCopyright>
        <div>© 2023 TutorLink from TutorLinkTeam</div>
      </StyledCopyright>
    </StyledFooterContainer>
  );
};
const StyledFooterContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  border-top: 1px solid #ececec;
  padding: 40px 0;
  margin: 0 auto;
  flex-wrap: wrap;
`;
const StyledDiv = styled.div`
  display: flex;
  justify-content: space-around;
  width: 70%;
  height: 50px;
  margin: 10px 0 50px 0;
  font-size: 14px;
`;
const StyledCopyright = styled.div`
  width: 80%;
  margin: auto;
  justify-content: center;
  
  display: flex;
`;
const StyledSelect = styled.select`
  height: 30px;
`;

export default Footer;
