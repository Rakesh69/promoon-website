import { useState } from 'react';

const NewTwiterIcon = () => {
  const [isHover, setIsHover] = useState(false);
  return (
    <svg
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
      width="25"
      height="25"
      viewBox="0 0 1227 1227"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_292_5834)">
        <path
          d="M727.348 519.284L1174.07 0H1068.21L680.322 450.887L370.513 0H13.1851L481.677 681.821L13.1851 1226.37H119.051L528.676 750.218L855.857 1226.37H1213.19L727.322 519.284H727.348ZM582.35 687.828L534.882 619.934L157.196 79.694H319.8L624.597 515.685L672.065 583.579L1068.27 1150.3H905.661L582.35 687.854V687.828Z"
          fill={`${isHover ? '#27AAE1' : '#FFFFFF'}`}
        />
      </g>
      <defs>
        <clipPath id="clip0_292_5834">
          <rect
            width="1226.37"
            height="1226.37"
            fill={`${isHover ? '#27AAE1' : '#FFFFFF'}`}
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default NewTwiterIcon;
