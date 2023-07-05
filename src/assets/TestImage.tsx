import styled from 'styled-components';

const TestImage = () => {
  return (
    <StyledSymbol>
      <img
        src={`${process.env.PUBLIC_URL}/images/classImage.png`}
        alt="이미지"
      />
    </StyledSymbol>
  );
};

const StyledSymbol = styled.div`
  img {
    margin-top: 20px;
    width: 100%;
    height: 150px;
    border-radius: 10%;
  }
  @media screen and (max-width: 1080px) {
    img {
      width: 100%;
      height: 10rem;
    }
  }
  @media screen and (max-width: 500px) {
    img {
      width: 100%;
      height: 10rem;
    }
  }
`;
export default TestImage;
