import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';

const MainPage = () => {
  return (
    <div>
      <Header />
      <div>
        <div>strong검색결과</div>
        <div>00개의 강의를 찾았어요!</div>
        <hr />
      </div>
      <div>
        <div>관련된 강의</div>
        <div>00개의 강의를 찾았어요!</div>
        <hr />
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;
