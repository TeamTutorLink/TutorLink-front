import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import styled from 'styled-components';
import React from 'react';

const CreateClassPage = () => {
  return (
    <div>
      <Header />
      <CreateClassPageContainer>
        <div>
          <div>방 제목</div>
          <input type="text" placeholder="방 제목을 입력하세요" />
        </div>
        <div>
          <div>방 비밀번호</div>
          <input type="text" placeholder="비밀번호를 입력하세요" />
        </div>
        <div>
          <div>방 이미지</div>
        </div>
        <div>
          <div>방 태그</div>
          <div>방 권한</div>
        </div>
        <div role="button">취소</div>
        <div role="button">생성</div>
      </CreateClassPageContainer>
      <Footer />
    </div>
  );
};

const CreateClassPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 25px;
  margin: 40px auto;
  box-shadow: 0 0 20px #d9d9d9;
  width: 440px;
  height: 600px;
  border-radius: 10px;
`;

export default CreateClassPage;
