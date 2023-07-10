import styled from 'styled-components';

const MyPageBackground = () => {
  return (
    <StyledMyPageBackground>
      <img
        src={`${process.env.PUBLIC_URL}/images/MyPage/MyPageBackground.jpg`}
        alt="이미지"
      />
    </StyledMyPageBackground>
  );
};

const StyledMyPageBackground = styled.div`
  width: 70%;
  margin: auto;
  img {
    width: 100%;
    height: 200px;
  }
  @media screen and (max-width: 1080px) {
    width: 80%;
  }
  @media screen and (max-width: 500px) {
    width: 90%;
  }
`;
export default MyPageBackground;
