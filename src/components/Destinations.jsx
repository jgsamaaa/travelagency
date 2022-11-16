import React from 'react';
import BoraBora from '../assets/borabora.jpg';
import BoraBora2 from '../assets/borabora2.jpg';
import Maldives from '../assets/maldives.jpg';
import Maldives2 from '../assets/maldives2.jpg';
import KeyWest from '../assets/keywest.jpg';

export default function Destinations() {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 text-center">
      <h1>All-Inclusive Resorts</h1>
      <p>On the Caribbean's Best Beaches</p>
      <div className="grid gap-2 py-4 gird-rows-none md:grid-cols-5 md:gap-4">
        <img
          className="object-cover w-full h-full col-span-2 row-span-2 md:col-span-3"
          src={BoraBora}
          alt="/"
        />
        <img className="object-cover w-full h-full" src={BoraBora2} alt="/" />
        <img className="object-cover w-full h-full" src={Maldives} alt="/" />
        <img className="object-cover w-full h-full" src={Maldives2} alt="/" />
        <img className="object-cover w-full h-full" src={KeyWest} alt="/" />
      </div>
    </div>
  );
}
