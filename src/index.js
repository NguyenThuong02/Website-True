import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/TrangChu';
import ForMe from './components/ForMe/ForMe';
import Product from './components/Products/Product'
import New from './components/News/New'
import Experience from './components/Experience/Experience'
import Relationship from './components/Relationship/Relationship'
import WebMini from './components/Products/ProductsItem/WebMini';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/forme" element={<ForMe />}/>
          <Route path="/product" element={<Product />}/>
          <Route path="/news" element={<New />}/>
          <Route path="/experience" element={<Experience />}/>
          <Route path="/relationship" element={<Relationship />}/>
          <Route index element={<Home />}/>
          <Route path="/webmini" element={<WebMini />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
