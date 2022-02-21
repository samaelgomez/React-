import { lazy, Suspense } from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import './App.css';

import Header from './components/Header'
import Footer from './components/Footer';

const Home = lazy(() => import("./pages/Home/home"))

export default function App() {
  return (
    <div className="pageContainer">
      <BrowserRouter>
        <Suspense fallback={null}>
          <Header/>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
          </Routes>
          <Footer/>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}