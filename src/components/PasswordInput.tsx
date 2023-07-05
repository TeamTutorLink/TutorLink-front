import styled from 'styled-components';
import { regClassPassword } from '../constants/regEx';
import React, { useState, useEffect } from 'react';

const PasswordInput = () => {
  const [showUpMSG, setShowUpMSG] = useState(true);
  const [classPw, setclassPw] = useState('');
  const onChangeInputs = (e: { target: { value: any } }) => {
    const { value } = e.target;
    setclassPw(value);
  };

  useEffect(() => {
    if (classPw && regClassPassword.test(classPw.toString())) {
      setShowUpMSG(false); //빨간 메시지 끄기
    } else if (!regClassPassword.test(classPw.toString())) {
      setShowUpMSG(true); //빨간 메시지 켜기
    }
  }, [classPw]);

  return (
    <div>
      <div style={{ width: '123%' }}>
        <StyledInput
          name="classPw"
          type="text"
          inputType="password"
          placeholder="비밀번호를 입력하세요"
          value={classPw}
          onChange={onChangeInputs}
        />
        <div style={{ color: 'red', fontSize: '10px' }}>
          {showUpMSG
            ? '영어, 숫자, 특수문자가 포함된 8~16글자이어야 합니다.'
            : null}
        </div>
      </div>
    </div>
  );
};
const StyledInput = styled.input`
  width: 100%;
  padding: 6px;
  margin: 6px 0;
`;
export default PasswordInput;
