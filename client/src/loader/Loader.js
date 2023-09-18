import React from "react";
import icon from "../Images/logo-icon.png";

const Loader = () => {
  const styles = {
    spinner: {
      animation: "spin 1s linear infinite",
      height: "80px",
      width: "80px",
    },
    "@keyframes spin": {
      from: {
        transform: "rotate(0deg)",
      },
      to: {
        transform: "rotate(360deg)",
      },
    },
  };
  return (
    <div className="flex justify-center items-center">
      <div style={styles.spinner}>
        <img src={icon} alt="" />
      </div>
    </div>
  );
};

export default Loader;
