import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import React from 'react';
import styled from 'styled-components';
import FloatingButton from '../../components/FloatingButton';
import Carousel from '../../components/Carousel';

const MainPage = () => {
  return (
    <div>
      <Header />
      <Carousel />
      <div>
        <div>검색결과</div>
        <div>00개의 강의를 찾았어요!</div>
        <hr />
      </div>
      <div>
        <div>관련된 강의</div>
        <div>00개의 강의를 찾았어요!</div>
        <hr />
      </div>
      <div>
        <div>관련된 강의</div>
        <div>
          00개의 강의를 찾았어요! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Corrupti odit voluptatem aut doloribus numquam eos
          nisi, ad quam consectetur impedit in, alias maxime. Veritatis
          voluptate quo dolores dolore pariatur quaerat!
        </div>
        <hr />
      </div>
      <FloatingButton />
      <Footer />
    </div>
  );
};

export default MainPage;
