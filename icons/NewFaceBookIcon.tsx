import { useState } from 'react';
const NewFaceBookIcon = () => {
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
      viewBox="0 0 156 156"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_23_883)">
        <path
          d="M89.584 155.139V84.378H113.326L116.888 56.793H89.584V39.184C89.584 31.2 91.792 25.759 103.254 25.759L117.849 25.753V1.08C115.325 0.752 106.661 0 96.577 0C75.52 0 61.104 12.853 61.104 36.452V56.793H37.29V84.378H61.104V155.139H89.584Z"
          fill={`${isHover ? '#27AAE1' : '#FFFFFF'}`}
        />
      </g>
      <defs>
        <clipPath id="clip0_23_883">
          <rect
            width="155.139"
            height="155.139"
            fill={`${isHover ? '#27AAE1' : '#FFFFFF'}`}
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default NewFaceBookIcon;
