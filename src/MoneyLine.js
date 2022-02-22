import React, { useContext } from "react";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";
import { moneyLineStyles } from "./styles";
import { store } from "./Store";
import {parlay} from './utils'

export default ({ moneyLine, index }) => {
  const [state, dispatch] = useContext(store);
  const { moneylines, betAmount } = state;
  return (
    <div className="fade-in-top" id="team-money-line" style={moneyLineStyles}>
      {" "}
      <span className="bets">Leg #{index + 1}</span>
      <span>Money Line</span>
      <span>{moneyLine > 0 ? `+${moneyLine}` : `${moneyLine}`}</span>
      <DeleteForeverOutlinedIcon
        className="wobble-hor-bottom"
        onClick={(e) => {
          const updatedLines = moneylines.filter((line, idx) => index !== idx )
          dispatch({
            type: "DELETE_MONEYLINE",
            payload:{moneylines: updatedLines},
          });
           if(updatedLines.length !== 0){
            let {wager, winnings} =  parlay(betAmount,updatedLines)
            dispatch({
              type: 'UPDATE_PROFIT_AND_PAYOUT',
              payload: {wager,profit: winnings}
            })
           } else {
             dispatch({
               type: 'UPDATE_PROFIT_AND_PAYOUT',
               payload: {wager: 0, profit: 0}
             })
             dispatch({
               type: 'SET_IS_DISABLED',
               payload: true
             })
           }
          
         
        
        }}
        id="trash"
      />
    </div>
  );
};
