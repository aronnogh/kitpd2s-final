import React from 'react';
import '../fonts.css'

const TextBorder = ({text}) => {
  return (
    <div className="w-full max-w-4xl p-4">
      <h1 className="text-9xl font-bold text-transparent bg-clip-text stroke-4 stroke-black tracking-tighter">
        <span className="text-stroke khand-semibold">{text}</span>
      </h1>
      <style>{`
        .text-stroke {
          -webkit-text-stroke: 2px black;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </div>
  );
};

export default TextBorder;