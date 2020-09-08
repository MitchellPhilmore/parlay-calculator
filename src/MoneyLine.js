import React from "react";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";
import { moneyLineStyles } from "./styles";

export default ({ moneyLine, index }) => {
  return (
    <div className="fade-in-top" id="team-money-line" style={moneyLineStyles}>
      {" "}
      <span className="bets">Leg #{index + 1}</span>
      <span>Money Line</span>
      <span>{moneyLine > 0 ? `+${moneyLine}` : `${moneyLine}`}</span>
      <DeleteForeverOutlinedIcon
        index={index}
        className="wobble-hor-bottom"
        id="trash"
      />
    </div>
  );
};
