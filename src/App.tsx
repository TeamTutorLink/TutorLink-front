import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import SettingTest from './SettingTest';
import MainPage from './pages/Home/MainPage';
import LoginPage from './pages/Login/LoginPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/test" element={<SettingTest />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
