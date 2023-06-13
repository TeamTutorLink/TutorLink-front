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
    width: 120;
    height: 120px;
  }
`;
export default Symbol;
