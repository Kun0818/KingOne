import React from "react";
import style from "../style/PictureButton.module.scss";
import PhotoSvg from "../Icon/PhotoIcon";
import ThreeSixZeroSvg from "../Icon/ThreeSixZeroIcon";
import ThreeDIcon from "../Icon/ThreeDIcon";

function PictureButton() {
  return (
    <div className={style.container}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#C1B494",
          border: "1.5px solid #C1B494",
          width: "33%",
          padding: "8px",
        }}
      >
        <PhotoSvg />
        Photo
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#ffffff1d",
          backdropFilter: "blur(15px)",
          color: "#C1B494",
          border: "1.5px solid #C1B494",
          width: "33%",
          padding: "8px",
        }}
      >
        <ThreeSixZeroSvg /> 360
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#ffffff1d",
          backdropFilter: "blur(15px)",
          color: "#C1B494",
          border: "1.5px solid #C1B494",
          width: "33%",
          padding: "8px",
        }}
      >
        <ThreeDIcon />
        3D
      </div>
    </div>
  );
}

export default PictureButton;
