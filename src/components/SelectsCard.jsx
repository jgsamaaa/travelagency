import React from 'react';

export default function SelectsCard(props) {
  return (
    <div className="relative">
      <img src={props.bg} alt="/" className="object-cover w-full h-full" />
      <div className="absolute top-0 left-0 w-full h-full bg-gray-900/30">
        <p className="absolute text-2xl font-bold text-white left-4 bottom-4">
          {props.text}
        </p>
      </div>
    </div>
  );
}
