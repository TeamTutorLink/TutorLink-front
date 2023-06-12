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

const StyledLogo = styled.div`
  cursor: pointer;
  img {
    width: 250px;
    height: 40px;
  }
`;
export default SymbolLogo;
