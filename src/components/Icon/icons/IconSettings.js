import React from 'react'
import PropTypes from 'prop-types'

function Icon(props) {
  const { fill, width, height } = props

  return (
    <svg
      className="icon-settings"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 15 15"
      aria-labelledby="title"
      width={width}
      height={height}
      fill={fill}
    >
      <title id="title">Settings</title>
      <path d="M12.85 8.25C12.85 8.03 12.93 7.8 12.93 7.5 12.93 7.2 12.93 6.98 12.85 6.75L14.43 5.48C14.58 5.33 14.58 5.18 14.5 5.03L13 2.4C12.93 2.33 12.78 2.25 12.55 2.33L10.68 3.08C10.3 2.78 9.85 2.55 9.4 2.33L9.1 0.38C9.18 0.15 8.95 0 8.8 0L5.8 0C5.65 0 5.43 0.15 5.43 0.3L5.13 2.33C4.68 2.48 4.3 2.78 3.85 3.08L2.05 2.33C1.83 2.25 1.68 2.33 1.53 2.48L0.03 5.1C-0.05 5.18 0.03 5.4 0.18 5.55L1.75 6.75C1.75 6.98 1.68 7.2 1.68 7.5 1.68 7.8 1.68 8.03 1.75 8.25L0.18 9.53C0.03 9.68 0.03 9.82 0.1 9.98L1.6 12.6C1.68 12.68 1.83 12.75 2.05 12.68L3.93 11.93C4.3 12.23 4.75 12.45 5.2 12.68L5.5 14.63C5.5 14.78 5.65 14.93 5.88 14.93L8.88 14.93C9.03 14.93 9.25 14.78 9.25 14.63L9.55 12.68C10 12.45 10.45 12.23 10.83 11.93L12.7 12.68C12.85 12.75 13.08 12.68 13.15 12.53L14.65 9.9C14.73 9.75 14.73 9.53 14.58 9.45L12.85 8.25 12.85 8.25ZM7.3 10.13C5.88 10.13 4.68 8.93 4.68 7.5 4.68 6.08 5.88 4.88 7.3 4.88 8.73 4.88 9.93 6.08 9.93 7.5 9.93 8.93 8.73 10.13 7.3 10.13L7.3 10.13Z" />
    </svg>
  )
}

Icon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string,
}

Icon.defaultProps = {
  width: 15,
  height: 15,
  fill: 'black',
}

export default Icon
