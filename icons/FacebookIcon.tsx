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
        width="33"
        height="33"
        viewBox="0 0 29 29"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M30.248 16.4996C30.248 8.90564 24.092 2.74956 16.498 2.74956C8.90413 2.74956 2.74805 8.90564 2.74805 16.4996C2.74805 23.3626 7.77622 29.051 14.3496 30.0825V20.4742H10.8584V16.4996H14.3496V13.4703C14.3496 10.0242 16.4024 8.12065 19.5432 8.12065C21.0476 8.12065 22.6211 8.38921 22.6211 8.38921V11.773H20.8873C19.1792 11.773 18.6465 12.8329 18.6465 13.9203V16.4996H22.46L21.8503 20.4742H18.6465V30.0825C25.2199 29.051 30.248 23.3626 30.248 16.4996Z"
          fill={`${isHover ? '#27AAE1' : '#FFFFFF'}`}
        />
      </svg>
    </>
  );
};

export default FacebookIcon;
