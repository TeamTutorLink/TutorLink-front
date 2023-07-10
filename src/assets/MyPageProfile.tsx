import styled from 'styled-components';

const MyPageProfile = () => {
  return (
    <StyledMyPageProfile>
      <img
        src={`${process.env.PUBLIC_URL}/images/MyPage/MyPage.png`}
        alt="이미지"
      />
    </StyledMyPageProfile>
  );
};

const StyledMyPageProfile = styled.div`
  width: 100%;
  margin: auto;
  img {
    width: 200px;
    height: 200px;
    border-radius: 100px;
    box-shadow: 0 0 5px black;
  }

  @media screen and (max-width: 1080px) {
    img {
      width: 150px;
      height: 150px;
      border-radius: 75px;
    }
  }
`;
export default MyPageProfile;
