import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <StyledFooter>
      <div>
        <ul>
          <li>2023</li>
          <li>06</li>
          <li>TutorLink</li>
        </ul>
        <select>
          <option value="">TutorLinkTeam</option>
          <option value="">다정</option>
          <option value="">지웅</option>
          <option value="">아영</option>
          <option value="">경회</option>
          <option value="">호준</option>
        </select>
      </div>
      <StyledCopyright>
        <div>© 2023 TutorLink from TutorLinkTeam</div>
      </StyledCopyright>
    </StyledFooter>
  );
};
const StyledFooter = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  border-top: 1px solid #ececec;
  padding: 40px 0 80px;
  margin: 0 auto;
`;
const StyledCopyright = styled(StyledFooter)`
  display: flex;
  justify-content: center;
  margin: 10px 0 50px 0;
  font-size: 14px;
`;

export default Footer;
