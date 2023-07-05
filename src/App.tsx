import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import MainPage from './pages/Home/MainPage';
import CreateClassPage from './pages/CreateClass/CreateClassPage';
import NotFound from './pages/NotFound';
import GlobalStyle from './GlobalStyles';
import Header from './components/common/Header';
import Footer from './components/common/Footer';

const App = () => {
  return (
    <>
      <GlobalStyle />

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/createclasspage" element={<CreateClassPage />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
