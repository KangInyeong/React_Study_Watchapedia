import React ,{Component} from 'react';
import './App.css';
import Main from './pages/Main';
import Mypage from './pages/Mypage';
import NotFound from './pages/NotFound';
import { BrowserRouter,Route, Routes } from "react-router-dom";

function App() {
  return (
      
      <BrowserRouter>
        <Routes>
          <Route path="/main" element={<Main />}/>
          <Route path="/mypage" element={<Mypage />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </BrowserRouter>

  );
}

export default App;
