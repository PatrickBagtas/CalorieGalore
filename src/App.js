import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link, Navigate } from 'react-router-dom';

import LoginViews from './views/LoginViews';
import RegisterViews from './views/RegisterViews';
import HomeViews from './views/HomeViews';
import AboutViews from './views/AboutViews';
import CalorieViews from './views/CalorieViews';
import Topper from './components/Topper';
import ImageBody from './components/ImageBody';
import BottomNote from './components/BottomNote';


function App() {
  return (
    <div className="min-h-screen bg-green1 ">
      <Routes>
      <Route path="/" element={<Navigate to="/home"/>}/>
      <Route path="/home" element={<HomeViews/>}/>
      <Route path="/login" element={<LoginViews/>}/>
      <Route path="/register" element={<RegisterViews/>}/>
      <Route path="/about" element={<AboutViews/>}/>
      <Route path="/calorie" element={<CalorieViews/>}/>
      </Routes>
    </div>
  );
}

export default App;
