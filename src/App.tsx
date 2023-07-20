import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import MainPage from './pages/Home/MainPage';
import CreateClassPage from './pages/CreateClass/CreateClassPage';
import NotFound from './pages/NotFound';
import GlobalStyle from './GlobalStyles';
import SearchPage from './pages/SearchPage/SearchPage';
import LoginPage from './pages/LoginPage/LoginPage';
import MyPage from './pages/MyPage/MyPage';
import ClassBoard from './pages/ClassBoard/ClassBoard';
import Redirection from './pages/Redirection';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/createclasspage" element={<CreateClassPage />} />
          <Route path="/searchpage" element={<SearchPage />} />
          <Route path="/loginpage" element={<LoginPage />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/classboard" element={<ClassBoard />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/auth/kakao-login" element={<Redirection />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
