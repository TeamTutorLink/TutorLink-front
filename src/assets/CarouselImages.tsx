// Carousel에 쓰이는 이미지
// title과 description은 더미 데이터임
const CarouselImages = [
  {
    id: 1,
    src: `${process.env.PUBLIC_URL}/images/Carousel/Img1.png`,
    alt: 'Image 1',
    title: 'Lamborghini Huracan Performante',
    description:
      'The Huracán Performante has reworked the concept of super sports cars and taken the notion of performance to levels never seen before.',
  },
  {
    id: 2,
    src: `${process.env.PUBLIC_URL}/images/Carousel/Img2.png`,
    alt: 'Image 2 ',
    title: 'Porsche 911 Turbo S',
    description:
      'This Turbo S variant comes with an engine putting out 641 bhp @ 6750 rpm and 800 Nm @ 2500 rpm of max power and max torque respectively.',
  },
  {
    id: 3,
    src: `${process.env.PUBLIC_URL}/images/Carousel/Img3.png`,
    alt: 'Image 3',
    title: 'Ford Mustang',
    description: 'For offroad lovers. Super fast, Super Comfortable.',
  },
  {
    id: 4,
    src: `${process.env.PUBLIC_URL}/images/Carousel/Img4.png`,
    alt: 'Image 4',
    title: 'Lamborghini Aventador SV',
    description:
      'Aventador SV provide thrills unlike anything that has ever been experienced before.',
  },
];

export default CarouselImages;
