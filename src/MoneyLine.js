import React, { useContext } from "react";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";
import { moneyLineStyles } from "./styles";
import { store } from "./Store";

export default ({ moneyLine, index }) => {
  const [state, dispatch] = useContext(store);
  const { moneylines } = state;
  return (
    <div className="fade-in-top" id="team-money-line" style={moneyLineStyles}>
      {" "}
      <span className="bets">Leg #{index + 1}</span>
      <span>Money Line</span>
      <span>{moneyLine > 0 ? `+${moneyLine}` : `${moneyLine}`}</span>
      <DeleteForeverOutlinedIcon
        index={index}
        className="wobble-hor-bottom"
        onClick={() => {
          //TODO: ADD ability to delete moneylines
          dispatch({
            type: "DELETE_MONEYLINE",
            payload: { moneylines: moneylines, index: index },
          });
          console.log("deleted");
        }}
        id="trash"
      />
    </div>
  );
};
