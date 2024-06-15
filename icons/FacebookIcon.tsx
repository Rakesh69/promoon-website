import { useState } from 'react';

const FacebookIcon = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <>
      <svg
        onMouseEnter={() => {
          setIsHover(true);
        }}
        onMouseLeave={() => {
          setIsHover(false);
        }}
        width="40"
        height="40"
        viewBox="0 0 45 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M40.5258 22.1747C40.5258 12.001 32.2784 3.75363 22.1047 3.75363C11.931 3.75363 3.68359 12.001 3.68359 22.1747C3.68359 31.3693 10.4199 38.9901 19.2264 40.3721V27.4996H14.5492V22.1747H19.2264V18.1163C19.2264 13.4995 21.9765 10.9494 26.1843 10.9494C28.1998 10.9494 30.3079 11.3092 30.3079 11.3092V15.8425H27.985C25.6966 15.8425 24.983 17.2625 24.983 18.7192V22.1747H30.092L29.2753 27.4996H24.983V40.3721C33.7895 38.9901 40.5258 31.3693 40.5258 22.1747Z"
          fill={`${isHover ? '#27AAE1' : '#3D3850'}`}
        />
      </svg>
    </>
  );
};

export default FacebookIcon;
