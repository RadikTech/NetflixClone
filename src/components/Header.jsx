import React from 'react'
import logo from "../assets/logo.png";
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigation = useNavigate();

  return (
    <header className='w-full mx-auto flex items-center justify-between p-4'>
      <Link to={"/"} className='ml-[calc(10%)]'>
        <img src={logo} alt='logo' className='h-[40px]' />
      </Link>

      <div className='mr-[calc(10%)]'>
        <button className='login-button red-button hover-button' onClick={() => navigation("/login")}>
          Log In
        </button>
      </div>
    </header>
  )
}

export default Header
