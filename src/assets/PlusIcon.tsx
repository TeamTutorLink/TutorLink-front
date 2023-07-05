import styled from 'styled-components';

const PlusIcon = () => {
  return (
    <StyledPlusIcon>
      <img src={`${process.env.PUBLIC_URL}/images/PlusIcon.png`} alt="이미지" />
    </StyledPlusIcon>
  );
};

const StyledPlusIcon = styled.div`
  img {
    margin-top: 12px;
    margin-left: 2px;
    width: 35px;
    height: 35px;
  }
`;
export default PlusIcon;
