import React from 'react';

const DropDownIcon = () => {
  return (
    <svg
      width="15"
      height="20"
      viewBox="0 0 64 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_i_73_3)">
        <path
          d="M31.9234 37.1208C30.7792 37.1208 29.635 36.6839 28.7626 35.8119L1.30989 8.35885C-0.436467 6.61249 -0.436467 3.78108 1.30989 2.03543C3.05554 0.289784 5.88638 0.289784 7.63288 2.03543L31.9234 26.3274L56.2141 2.03628C57.9605 0.290633 60.7911 0.290633 62.5366 2.03628C64.2838 3.78193 64.2838 6.61334 62.5366 8.3597L35.0842 35.8127C34.2114 36.6849 33.0673 37.1208 31.9234 37.1208Z"
          fill="#2196F3"
        />
      </g>
      <defs>
        <filter
          id="filter0_i_73_3"
          x="0.00012207"
          y="0.726196"
          width="63.8469"
          height="40.3945"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood
            floodOpacity="0"
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
            result="effect1_innerShadow_73_3"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default DropDownIcon;
