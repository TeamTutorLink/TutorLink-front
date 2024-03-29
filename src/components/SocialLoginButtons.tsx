import { errorMonitor } from 'events';
import React from 'react';
import styled from 'styled-components';

// description은 랜덤 문구 삽입하였습니다.
const SocialLoginButtons = () => {
  const ButtonImgs = [
    {
      id: 1,
      src: `${process.env.PUBLIC_URL}/images/SocialLoginImgs/naver.png`,
      alt: 'Image 1',
      title: 'Naver',
      description:
        'The Huracán Performante has reworked the concept of super sports cars and taken the notion of performance to levels never seen before.',
    },
    {
      id: 2,
      src: `${process.env.PUBLIC_URL}/images/SocialLoginImgs/kakao.png`,
      alt: 'Image 2 ',
      title: 'Kakao',
      description:
        'This Turbo S variant comes with an engine putting out 641 bhp @ 6750 rpm and 800 Nm @ 2500 rpm of max power and max torque respectively.',
    },
    {
      id: 3,
      src: `${process.env.PUBLIC_URL}/images/SocialLoginImgs/google.png`,
      alt: 'Image 3',
      title: 'Google',
      description: 'For offroad lovers. Super fast, Super Comfortable.',
    },
  ];

  // Social Login(Kakao)
  const REST_API_KEY = process.env.REACT_APP_REST_API_KEY; // == client_id
  const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI; // 프론트 접근 가능한 경로로, 백엔드에서 카카오에 따로 등록 필요
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  const loginHandler = () => {
    window.location.href = KAKAO_AUTH_URL;
  };
  return (
    <div
      style={{
        display: 'flex',
        width: '40%',
        margin: 'auto',
        justifyContent: 'space-between',
      }}
    >
      {ButtonImgs.map((item) => (
        <div key={item.id}>
          <StyledImg
            src={item.src}
            alt={item.alt}
            className="img"
            onClick={loginHandler}
          />
          {/* <h2 className="title">{item.title}</h2>
          <p className="description">{item.description}</p> */}
        </div>
      ))}
    </div>
  );
};
const StyledImg = styled.img`
  width: 30px;
  margin: 25px 0;
  box-shadow: 0 0 5px #d9d9d9;
  border-radius: 15px;
  cursor: pointer;
  &: hover {
    box-shadow: 0 0 3px black;
  }
`;

export default SocialLoginButtons;
