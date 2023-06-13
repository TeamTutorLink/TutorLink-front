import styled from 'styled-components';

const Symbol = () => {
  return (
    <StyledSymbol>
      <img
        src={`${process.env.PUBLIC_URL}/images/logo/Symbol.png`}
        alt="이미지"
      />
    </StyledSymbol>
  );
};

const StyledSymbol = styled.div`
  img {
    width: 60;
    height: 60px;
  }
`;
export default Symbol;
