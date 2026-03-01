import React from "react";
import PropTypes from "prop-types";

const BlurBlob = ({ position, size, color = "bg-purple-500" }) => {
  const { top, left, bottom, right } = position;
  const { width, height } = size;

  return (
    <div
      className="absolute pointer-events-none z-0"
      style={{
        top,
        left,
        bottom,
        right,
        width,
        height,
      }}
    >
      <div
        className={`w-full h-full ${color} rounded-full opacity-20 blur-[120px] animate-pulse`}
      />
    </div>
  );
};

BlurBlob.propTypes = {
  position: PropTypes.shape({
    top: PropTypes.string,
    left: PropTypes.string,
    bottom: PropTypes.string,
    right: PropTypes.string,
  }),
  size: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string,
  }),
  color: PropTypes.string,
};

export default BlurBlob;