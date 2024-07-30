const SupportsIcon = () => {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        clipPath="url(#clip0_37_15)"
        filter="url(#filter0_i_37_15)"
      >
        <path
          d="M24 20V21C24 22.657 22.657 24 21 24H3C1.343 24 0 22.657 0 21V20H8.145L8.991 21H15.014L15.86 20H24ZM21.952 0H16.048C14.919 0 14 0.918 14 2.048V6.997H16.592L17.94 8.112C18.232 8.372 18.599 8.5 18.961 8.5C19.315 8.5 19.666 8.377 19.938 8.135L21.313 6.997H24.001V2.048C24.001 0.919 23.082 0 21.952 0ZM22 10V18H14.932L14.086 19H9.929L9.083 18H2V6H12V10C12 11.105 12.895 12 14 12C15.105 12 16 11.105 16 10H22ZM6 10C6 11.105 6.895 12 8 12C9.105 12 10 11.105 10 10C10 8.895 9.105 8 8 8C6.895 8 6 8.895 6 10ZM17 14.5C17 13.672 16.328 13 15.5 13H12.5C11.672 13 11 13.672 11 14.5C11 13.672 10.328 13 9.5 13H6.5C5.672 13 5 13.672 5 14.5V16H17V14.5Z"
          fill="#2196F3"
        />
      </g>
      <defs>
        <filter
          id="filter0_i_37_15"
          x="0"
          y="0"
          width="24"
          height="28"
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
            result="effect1_innerShadow_37_15"
          />
        </filter>
        <clipPath id="clip0_37_15">
          <rect
            width="24"
            height="24"
            fill="white"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default SupportsIcon;
