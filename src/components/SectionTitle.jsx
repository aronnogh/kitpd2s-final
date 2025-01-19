import React from 'react';
import '../fonts.css';

const SectionTitle = ({ titleText, border }) => {
  const borderShow = border ? <div className="h-1 bg-black w-full"></div> : null;

  return (
    <div className="my-10">
      {borderShow}
      <div className="flex items-end poppins-regular py-10 mx-10">
        <h1 className="font-bold mr-4 oswald-medium text-4xl">{titleText}</h1>
        <div className="h-1 bg-black w-1/4"></div>
      </div>
    </div>
  );
};

export default SectionTitle;
