import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';

import { AppProvider } from "./AppContext";

import ProfilePage from "./pages/ProfilePage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Annotations from "./pages/Annotations";
import Navbar from "./components/navbar";
import Footer from './components/footer';
import Settings from './pages/Settings';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/annotations" element={<Annotations />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </AppProvider>
  
     
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
