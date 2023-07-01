import Slider from 'react-slick';
import React from 'react';
import CarouselImages from '../assets/CarouselImages';
import styled from 'styled-components';

// css 스타일 추가
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// 기본 css 파일
<>
  <link
    rel="stylesheet"
    type="text/css"
    charSet="UTF-8"
    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
  />
  <link
    rel="stylesheet"
    type="text/css"
    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
  />
</>;

const Carousel = () => {
  const settings = {
    dots: true, // 캐러셀의 점을 보여줄지
    infinite: true, // 마지막 장에서 첫 장으로
    speed: 500, // 넘어가는 속도
    slidesToShow: 1, // 한 화면에 보이는 콘텐츠 개수
    slidesToScroll: 1, // 한번에 넘어가는 콘텐츠 수
    autoplay: true,
  };
  return (
    <StyledContainer>
      <Slider {...settings}>
        {CarouselImages.map((item) => (
          <div key={item.id}>
            <Image src={item.src} alt={item.alt} className="img" />
            {/* <h2 className="title">{item.title}</h2>
          <p className="description">{item.description}</p> */}
          </div>
        ))}
      </Slider>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  margin: 0 auto 30px;
  // width: 80%;
  // height: 20%;
`;

const Image = styled.img`
  width: 100%;
  // max-height: 10%;
`;
export default Carousel;
