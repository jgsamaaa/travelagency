import React from 'react';

import beachVid from '../assets/beachVid.mp4';

export default function Hero() {
  return (
    <div className="relative w-screen h-screen">
      <video
        className="object-cover w-full h-full"
        src={beachVid}
        autoPlay
        loop
        muted
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gray-900/20"></div>
      <div className="absolute top-0 flex flex-col justify-center w-full h-full text-center text-white">
        <h1>First Class Travel</h1>
        <h2 className="py-4">Where you go with all your heart.</h2>
        <div>
          <button className="p-3 mr-4 text-white border rounded-md rounded-m hover:bg-slate-100 hover:text-black">
            Book now
          </button>
          <button className="p-3 mr-4 text-white border rounded-md rounded-m hover:bg-slate-100 hover:text-black">
            Packages
          </button>
        </div>
      </div>
    </div>
  );
}
