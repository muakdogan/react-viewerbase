import React from 'react';

const CaretUp = ({
  style = {},
  width = '45.871px',
  className = '',
  viewBox = '0 0 45.871 45.871'
}) => (
  <svg
    width={width}
    height={width}
    style={style}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ''}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path
      fill="currentColor"
      d="M44.68,29.383L26.728,11.52c-2.098-2.087-5.488-2.087-7.585,0L1.19,29.383c-1.16,1.155-1.509,2.707-0.884,4.222
		c0.624,1.512,2.099,2.311,3.735,2.311h37.786c1.638,0,3.112-0.799,3.736-2.312C46.189,32.09,45.84,30.539,44.68,29.383z"
    />
  </svg>
);

export { CaretUp };
