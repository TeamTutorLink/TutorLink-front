import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <footer>
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
      <div>
        <div>© 2023 TutorLink from TutorLinkTeam</div>
      </div>
    </footer>
  );
};

export default Footer;
