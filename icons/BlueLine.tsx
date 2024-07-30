const BlueLine = () => {
  return (
    <svg
      width="8"
      height="190"
      viewBox="0 0 18 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_i_51_11)">
        <line
          x1="8.21429"
          y1="7.94702"
          x2="8.21428"
          y2="392.053"
          stroke="#2196F3"
        />
        <ellipse
          cx="9"
          cy="9.27152"
          rx="9"
          ry="9.27152"
          fill="#2196F3"
        />
        <ellipse
          cx="9"
          cy="104.636"
          rx="9"
          ry="9.27152"
          fill="#2196F3"
        />
        <ellipse
          cx="9"
          cy="200"
          rx="9"
          ry="9.27152"
          fill="#2196F3"
        />
        <ellipse
          cx="9"
          cy="295.364"
          rx="9"
          ry="9.27152"
          fill="#2196F3"
        />
        <ellipse
          cx="9"
          cy="390.728"
          rx="9"
          ry="9.27152"
          fill="#2196F3"
        />
      </g>
      <defs>
        <filter
          id="filter0_i_51_11"
          x="0"
          y="0"
          width="18"
          height="404"
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
            result="effect1_innerShadow_51_11"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default BlueLine;
