import styled from 'styled-components';

const SymbolCenter = () => {
  return (
    <StyledSymbolCenter>
      <img
        src={`${process.env.PUBLIC_URL}/images/logo/Symbol.png`}
        alt="이미지"
      />
    </StyledSymbolCenter>
  );
};

const StyledSymbolCenter = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  cursor: pointer;
  img {
    width: 140px;
    height: 80px;
    margin: auto;
  }
`;
export default SymbolCenter;
