import React from 'react';
import Header from '../components/Header';
import Trending from '../components/Trending';
import MoreReason from '../components/MoreReason';
import icon_tv from "../assets/icon_tv.svg";

const Home = () => {

  var commonClass = " min-h-[200px] tablet:min-h-[250px] laptop:min-h-[350px]";

  return (
    <div className='flex flex-col text-white w-screen bg-black/70'>
      <Header />

      <div className='flex flex-col self-center items-center w-[calc(70%)]'>
        <div className="text-white text-4xl font-bold text-center">
          Unlimited movies, TV shows and more
        </div>

        <div className='text-white text-[20px] font-bold text-center mt-4'>Starts at ₹149. Cancel at any time.</div>
        <div className='text-white text-[14px] mt-4 text-center'>Ready to watch? Enter your email to create or restart your membership.
        </div>

        <input type="text" placeholder="Email address" className='w-full text-[20px] mt-10 rounded-[30px] border-gray-300 flex-1 px-4 py-2' />
        <div className='red-button hover-button px-12 py-4 ml-5 mt-5'>
          Get Started
        </div>
      </div>

      <Trending className="w-full px-[calc(10%)] mt-10" />

      <div className="px-[calc(10%)] mt-10 mb-10">
        <h2 className='text-4xl text-white font-bold cursor-default'>
          More reasons to join
        </h2>

        <div className='grid grid-cols-1 mt-2
        tablet:grid-cols-2 
        laptop:grid-cols-4'>
          <MoreReason className={commonClass}
            title="Enjoy on your TV"
            desc="Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
            icon={icon_tv}
          />

          <MoreReason className={commonClass}
            title="Download your shows to watch offline"
            desc="Save your favourites easily and always have something to watch."
            icon={icon_tv}
          />

          <MoreReason className={commonClass}
            title="Watch everywhere"
            desc="Stream unlimited movies and TV shows on your phone, tablet, laptop and TV."
            icon={icon_tv}
          />

          <MoreReason className={commonClass}
            title="Create profiles for kids"
            desc="Send kids on adventures with their favourite characters in a space made just for them — free with your membership."
            icon={icon_tv}
          />
        </div>
      </div>
    </div>
  )
}

export default Home
