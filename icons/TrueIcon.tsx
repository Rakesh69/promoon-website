import React from 'react';

const TrueIcon = () => {
  return (
    <svg
      width="23"
      height="23"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_i_25_8)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M33.4142 10.5858C34.1952 11.3668 34.1952 12.6332 33.4142 13.4142L17.4142 29.4142C16.6332 30.1952 15.3668 30.1952 14.5858 29.4142L6.58578 21.4142C5.80474 20.6332 5.80474 19.3668 6.58578 18.5858C7.36684 17.8047 8.63316 17.8047 9.41422 18.5858L16 25.1716L30.5858 10.5858C31.3668 9.80474 32.6332 9.80474 33.4142 10.5858Z"
          fill="black"
        />
      </g>
      <defs>
        <filter
          id="filter0_i_25_8"
          x="6"
          y="10"
          width="28"
          height="24"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood
            flood-opacity="0"
            result="BackgroundImageFix"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite
            in2="hardAlpha"
            operator="arithmetic"
            k2="-1"
            k3="1"
          />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_25_8"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default TrueIcon;
