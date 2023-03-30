import React from "react";
import style from "../style/RightContainer.module.scss";
import PictureButton from "./PictureButton";

function RightContainer() {
  return (
    <div className={style.container}>
      <img
        src="../../public/image 1.png"
        alt=""
      />
      <PictureButton/>
    </div>
  );
}

export default RightContainer;
