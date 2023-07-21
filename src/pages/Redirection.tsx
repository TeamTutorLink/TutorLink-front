//KakaoAuth
//카카오로부터 받은 인가코드를 백엔드에 전달할 로직이 작성된 Redirection 페이지
//인가코드는 주소의 쿼리스트링에 담아져서 제공된다. 이걸 파싱해서 백엔드에게 전달
import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// 카카오 로그인 하면, 주소창의 URI 뒤에 파라미터로 ?code=@@@@@@@ 인가 코드 넘어옴
const Redirection = () => {
  //인가코드 받기
  const code = new URL(window.location.href).searchParams.get('code'); //해당 주소에서 search키에 담긴 코드 받아오기
  const navigate = useNavigate();

  useEffect(() => {
    console.log(process.env.REDIRECT_URI);
    axios
      .post('http://15.164.165.34:8080/auth/kakao-login', {
        code: `${code}`,
      })
      .then((r) => {
        //백엔드로 인가코드 전달
        console.log(r.data); // 토큰과 함께 오는 정보 출력

        // 토큰을 받아서 localStorage같은 곳에 저장하는 코드
        localStorage.setItem('accessToken', r.data.accessToken); // 일단 이름만 저장
        localStorage.setItem('refreshToken', r.data.refreshToken);
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
        console.log('ERROR: ', error.response.data.responseMessage);
        alert(error.response.data.responseMessage);
      });
  }, []);

  return <div>로그인 중입니다.</div>;
};

export default Redirection;
