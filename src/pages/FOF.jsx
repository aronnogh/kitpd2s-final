import React from "react";
import '../fonts.css';
import { Link } from "react-router";

const FOF = () => {
    return (
      <div className="flex flex-col justify-center items-center pt-10 md:pt-0">
        <svg
        id="mainImage_create"
        data-name="mainImage"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 171.2 81.5"
      >
        <style>
          {`
            @import url('https://fonts.googleapis.com/css?family=Merriweather');
            .changeColor {
              fill: #4f86ed;
            }
            #title {
              font-size: 50%;
              font-family: 'Merriweather', serif;
            }
            .cls-1 {
              opacity: 0.3;
            }
            .cls-7 {
              opacity: 0.8;
            }
            .cls-2 {
              fill: #fff;
            }
            .cls-3 {
              fill: none;
              stroke: #5c7690;
              stroke-miterlimit: 10;
              stroke-width: 0.5px;
            }
            .cls-4 {
              fill: #ffe1d9;
            }
            .cls-5 {
              fill: #ffcfbf;
            }
            .cls-6 {
              fill: #fecbb6;
            }
            .cls-9 {
              fill: #fecb02;
            }
            .cls-10,
            .cls-12 {
              stroke: #d26f51;
            }
            .cls-11 {
              stroke: #000;
              stroke-width: 0.38px;
            }
            .cls-12 {
              stroke-width: 0.19px;
            }
            .cls-14,
            .cls-15,
            .cls-16 {
              stroke: #b0bec5;
              stroke-linejoin: round;
            }
            .cls-15 {
              fill: #edf0f2;
            }
            .cls-16 {
              stroke-linecap: round;
            }
            .earMove {
              transition: all ease-in-out 2s;
              transform-origin: 50% 50%;
              animation: earmove 1.5s linear infinite alternate;
            }
            .faceMove {
              transition: all ease-in-out 2s;
              transform-origin: 50% 50%;
              animation: move 1.5s linear infinite alternate;
            }
            .neckMove {
              transition: all ease-in-out 2s;
              transform-origin: 50% 50%;
              animation: neck 1.5s linear infinite alternate;
            }
            @keyframes earmove {
              0% {
                transform: translateX(-0.3px) translateY(0.6px);
              }
              30% {
                transform: translateX(-0.3px) translateY(0.6px);
              }
              60% {
                transform: translateX(-0.7px) translateY(0px);
              }
              70% {
                transform: translateX(-0.7px) translateY(-0.3px);
              }
              100% {
                transform: translateX(-0.7px) translateY(-0.3px);
              }
            }
            @keyframes move {
              0% {
                transform: translateX(-0.3px) translateY(0.6px);
              }
              30% {
                transform: translateX(-0.3px) translateY(0.6px);
              }
              60% {
                transform: translateX(2px) translateY(0px);
              }
              70% {
                transform: translateX(2px) translateY(-0.3px);
              }
              100% {
                transform: translateX(2px) translateY(-0.3px);
              }
            }
            @keyframes neck {
              0% {
                transform: translateY(0.7px);
              }
              50% {
                transform: translateY(0.7px);
              }
              100% {
                transform: translateY(0px);
              }
            }
          `}
        </style>
        <path
          id="c-1"
          className="changeColor cls-1"
          d="M46.62,52.5c5.78,4.9,21.14,8.4,39.19,8.4s33.41-3.5,39.19-8.4c-5.78-4.9-21.14-8.4-39.19-8.4S52.41,47.6,46.62,52.5Z"
          style={{ fill: 'rgb(190, 201, 89)' }}
        />
        <path
          className="cls-2"
          d="M99.73,47.71H68.65a7.13,7.13,0,0,0-7.13,7.13V60a152.58,152.58,0,0,0,24.3,1.83,157.87,157.87,0,0,0,21.05-1.35V54.84A7.13,7.13,0,0,0,99.73,47.71Z"
        />
        <path className="cls-3" d="M123.56,55.81C115,58.94,101.27,61,85.81,61c-26,0-47-5.71-47-12.76,0-3.45,5.05-6.58,13.25-8.88" />
        <path className="cls-3" d="M55.37,38.47a140,140,0,0,1,30.44-3c26,0,47,5.71,47,12.76,0,2.4-2.44,4.65-6.69,6.57" />
        <path className="cls-3" d="M53.41,38.95l.94-.24" />
        <path className="cls-4" d="M91.68,47.71l-.75-11.2L79.15,43.84l-1.69,3.87H75.79c0,3.36,3.76,6.08,8.4,6.08s8.4-2.72,8.4-6.08Z" />
        <path className="cls-5 neckMove" d="M78,46.53a27.19,27.19,0,0,0,6.41.82c3.1,0,7.11-2.19,7.11-2.19l-.42-6.2L79.15,43.84Z" />
        <polygon className="earMove" points="92.59 32.22 92.59 28.5 76.77 27.71 76.77 32.22 92.59 32.22" />
        <circle className="cls-6 earMove" cx="78.06" cy="34.04" r="2.47" />
        <path className="cls-4" d="M81.74,57.06,60.63,49.72h0A6.72,6.72,0,1,0,57.7,62.49H93.25C93.25,56.78,81.74,57.06,81.74,57.06Z" />
        <path className="cls-4" d="M77.46,25H90.92a0,0,0,0,1,0,0V39.38a6.73,6.73,0,0,1-6.73,6.73h0a6.73,6.73,0,0,1-6.73-6.73V25A0,0,0,0,1,77.46,25Z" />
        <rect id="c-2" className="changeColor cls-7" x="74.82" y="26.48" width="19.14" height="2.45" transform="translate(1.29 -3.65) rotate(2.49)" style={{ fill: 'rgb(190, 201, 89)' }} />
        <path id="c-3" className="changeColor cls-7" d="M84.36,18.69h.5a7.8,7.8,0,0,1,7.8,7.8v0a0,0,0,0,1,0,0H76.56a0,0,0,0,1,0,0v0A7.8,7.8,0,0,1,84.36,18.69Z" transform="translate(1.06 -3.66) rotate(2.49)" style={{ fill: 'rgb(190, 201, 89)' }} />
        <polygon id="c-4" className="changeColor cls-8" points="82.44 23.89 92.18 24.32 92.59 24.34 92.48 26.84 80.96 26.33 82.44 23.89" style={{ fill: 'rgb(190, 201, 89)' }} />
        <circle className="cls-9 faceMove" cx="78.72" cy="23.73" r="3.73" transform="translate(51.58 101.34) rotate(-87.51)" />
        <circle className="cls-2 faceMove" cx="78.72" cy="23.73" r="2.36" transform="translate(51.58 101.34) rotate(-87.51)" />
        <circle className="cls-4 earMove" cx="90.92" cy="34.04" r="2.47" />
        <path className="cls-4" d="M112.2,53l-9.87-21.92-3-5.48-11.86-.22,7.42,3.35H91.55l5.82,4.58,2,22.26h0A6.72,6.72,0,1,0,112.2,53Z" />
        <ellipse className="faceMove" cx="80.09" cy="33.12" rx="0.53" ry="0.59" />
        <ellipse className="faceMove" cx="86.34" cy="33.12" rx="0.53" ry="0.59" />
        <polyline className="cls-10 faceMove" points="84.19 31.08 81.74 37.01 84.39 37.01" />
        <path className="cls-10 faceMove" d="M83.06,40.36a4,4,0,0,1,2.75-1" />
        <line className="cls-11 faceMove" x1="81.07" y1="30.33" x2="78.47" y2="30.58" />
        <line className="cls-11 faceMove" x1="86.34" y1="30.45" x2="88.15" y2="31.08" />
        <line className="cls-12" x1="106.86" y1="47.82" x2="110.99" y2="46.11" />
        <line className="cls-12" x1="107.43" y1="49.9" x2="111.55" y2="48.19" />
        <line className="cls-12" x1="107.99" y1="51.98" x2="112.11" y2="50.27" />
        <g className="cls-13">
          <rect className="cls-14" x="85.81" y="2.46" width="10.77" height="3.5" />
          <rect className="cls-15" x="96.58" y="2.46" width="10.77" height="3.5" />
          <rect className="cls-14" x="92.19" y="5.95" width="10.77" height="3.5" />
          <line className="cls-16" x1="107.36" y1="5.95" x2="109.63" y2="5.95" />
          <line className="cls-16" x1="110.68" y1="5.95" x2="111.57" y2="5.95" />
        </g>
        <g className="cls-13">
          <rect className="cls-16" x="125" y="23.12" width="10.77" height="3.5" />
          <rect className="cls-15" x="130.39" y="26.62" width="10.77" height="3.5" />
          <rect className="cls-16" x="119.62" y="26.62" width="10.77" height="3.5" />
          <line className="cls-16" x1="141.16" y1="26.62" x2="145.73" y2="26.62" />
          <line className="cls-16" x1="125" y1="23.12" x2="115.4" y2="23.12" />
          <line className="cls-16" x1="117.95" y1="26.62" x2="115.4" y2="26.62" />
        </g>
        <g className="cls-13">
          <rect className="cls-16" x="39.34" y="16.12" width="10.77" height="3.5" />
          <rect className="cls-16" x="39.34" y="23.11" width="10.77" height="3.5" />
          <rect className="cls-16" x="50.11" y="23.11" width="10.77" height="3.5" />
          <rect className="cls-16" x="50.11" y="16.12" width="10.77" height="3.5" />
          <rect className="cls-15" x="44" y="19.61" width="10.77" height="3.5" />
          <rect className="cls-16" x="33.23" y="19.61" width="10.77" height="3.5" />
          <line className="cls-16" x1="60.89" y1="19.61" x2="65.51" y2="19.61" />
          <line className="cls-16" x1="39.34" y1="16.12" x2="35.46" y2="16.12" />
          <line className="cls-16" x1="36.45" y1="26.61" x2="33.23" y2="26.61" />
          <line className="cls-16" x1="63.2" y1="23.11" x2="65.51" y2="23.11" />
        </g>
        <polyline className="cls-3" points="115.4 58.12 115.4 38.27 120.2 37.01" />
        <polyline className="cls-3" points="129.01 53.21 129.01 43.14 131.74 42.13" />
        <path className="cls-3" d="M115.4,42.13a53.27,53.27,0,0,1,8,2A42,42,0,0,1,129,47" />
        <path className="cls-3" d="M115.4,47.34a53.27,53.27,0,0,1,8,2A42,42,0,0,1,129,52.22" />
        <path className="cls-3" d="M115.4,52.56a53.27,53.27,0,0,1,8,2l1,.42" />
        <path className="cls-18 faceMove" d="M78.84,26.09l0-4.71L68.05,18.32a.91.91,0,0,0-.45-.13c-1.17,0-2.11,2.46-2.11,5.5s.95,5.5,2.11,5.5a.9.9,0,0,0,.44-.12Z" />
        <path className="cls-5" d="M57.7,62.49H93.25A3.67,3.67,0,0,0,92.92,61H53.43A6.69,6.69,0,0,0,57.7,62.49Z" />
        <path className="cls-12" d="M88.15,60.27s1.7.95,1.7,2.22" />
        <path className="cls-5" d="M101.81,61a6.68,6.68,0,0,0,8.51,0Z" />
        <polygon className="cls-5" points="90.92 30.25 77.46 29.69 77.46 28.64 90.92 29.22 90.92 30.25" />
        <text id="title" transform="matrix(1 0 0 1 44.7249 78)">404 Page not found</text>
      </svg>
      <Link to="/" class="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group">
    <span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-black opacity-[3%]"></span>
    <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-black opacity-100 group-hover:-translate-x-8"></span>
    <span class="relative w-full text-left text-black transition-colors duration-200 ease-in-out group-hover:text-zinc-100">Back to Home</span>
    <span class="absolute inset-0 border-2 border-black rounded-full"></span>
</Link>
      </div>
    );
  };
  
export default FOF;
  