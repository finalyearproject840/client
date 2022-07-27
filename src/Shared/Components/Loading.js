import React from "react";
import { ThreeDots, TailSpin } from "react-loader-spinner";
import { colors } from "../../DefaultValues";

const Loading = (props) => {
  return (
    <ThreeDots
      ariaLabel="three-dots-loading"
      height={props.height ? props.height : "44"}
      width={props.width ? props.width : "50"}
      radius={props.radius ? props.radius : "9"}
      color={props.color ? colors.voilet : colors.voilet}
      wrapperStyle
    />
  );
};

export default Loading;
