import React from 'react';
import SymbolLogo from '../../assets/SymbolLogo';
import styled from 'styled-components';

const Header = () => {
  return (
    <div>
      <div role="button">
        <SymbolLogo />
      </div>
      <div>
        <input type="text" placeholder="검색" />
        <div role="button">검색</div>
      </div>
      <div>
        <div role="button"></div>
        <ul>
          <li>로그인</li>
          <li>회원가입</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
