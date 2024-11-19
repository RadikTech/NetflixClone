import React from 'react'
import Home from '../pages/Home'
import { Route, Routes } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import SignUpPage from '../pages/SignUpPage'
import NotFoundPage from '../pages/NotFoundPage';

const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/signup' element={<SignUpPage />} />

            <Route path='*' element={<NotFoundPage />} />

        </Routes>
    )
}

export default AllRoutes;
