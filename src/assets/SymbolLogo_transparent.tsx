import styled from 'styled-components';

const SymbolLogo = () => {
  return (
    <StyledLogo>
      <img
        src={`${process.env.PUBLIC_URL}/images/logo/TutorLinkSymbolLogo.png`}
        alt="이미지"
      />
    </StyledLogo>
  );
};

// NotFound background img
const StyledLogo = styled.div`
  opacity: 0.15;
  img {
    width: 900px;
    height: 130px;
  }
`;
export default SymbolLogo;
