import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import MainPage from './pages/Home/MainPage';
import CreateClassPage from './pages/CreateClass/CreateClassPage';
import NotFound from './pages/NotFound';
import GlobalStyle from './GlobalStyles';
import LoginPage from './pages/Login/LoginPage';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/createclasspage" element={<CreateClassPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
