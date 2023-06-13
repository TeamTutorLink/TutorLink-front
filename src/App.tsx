import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import MainPage from './pages/Home/MainPage';
import CreateClassPage from './pages/CreateClass/CreateClassPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/createclasspage" element={<CreateClassPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
