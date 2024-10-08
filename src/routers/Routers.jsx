import React from 'react'
import {  Navigate, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Tours from '../pages/Tours'
import ToursDetails from '../pages/ToursDetails'

import SearchResultList from '../pages/SearchResultList'
import Register from '../pages/Register'
import Login from '../pages/Login'
import ThankYou from '../pages/ThankYou'
import ForgotPassword from '../pages/ForgotPassword'
import ResetPassword from '../pages/ResetPassword'
import About from '../pages/About'

const Routers = () => {
  return (
    <div>
      
      <Routes>
        <Route path='/' element={<Navigate to='/home'/>}/>
        <Route path='/home' element={<Home/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/tours' element={<Tours/>} />
        <Route path='/tours/:id' element={<ToursDetails/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>} />
        <Route path='/forgotPassword' element={<ForgotPassword />} />
        <Route path='/resetPassword/:token' element={<ResetPassword/>} />
        <Route path='/thank-you' element={< ThankYou/>} />
        <Route path='/tours/search' element={<SearchResultList/>} />

      </Routes>
    </div>
  );
};

export default Routers
