import React, { useContext } from "react";
import { StyledTextField } from "../../utils";
import { store } from "../../Store";
import { InputAdornment } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { btnStyles } from "../../styles";

export const BetField = () => {
  const [state, dispatch] = useContext(store);
  const { betAmount } = state;
  return (
    <StyledTextField
      InputProps={{
        startAdornment: (
          <InputAdornment id="start" className="start" position="start">
            $
          </InputAdornment>
        ),
      }}
      id="outlined-basic"
      label="Bet Amount"
      value={betAmount}
      variant="filled"
      onChange={(evt) =>
        dispatch({ type: "UPDATE_BET_AMOUNT", payload: evt.target.value })
      }
    />
  );
};

export const MoneyLineField = () => {
  const [state, dispatch] = useContext(store);
  const { oddsField } = state;
  return (
    <StyledTextField
      InputProps={{
        startAdornment: (
          <InputAdornment
            selected
            classes={{ root: "dollar" }}
            position="start"
          ></InputAdornment>
        ),
      }}
      id="outlined-basic"
      label="Money Line"
      variant="filled"
      value={oddsField}
      onChange={(evt) =>
        dispatch({ type: "UPDATE_MONEY_LINE", payload: evt.target.value })
      }
    />
  );
};

export const AddBetBtn = () => {
  const [state, dispatch] = useContext(store);
  const { moneylines, oddsField } = state;
  return (
    <Button
      id="add_bet_btn"
      variant="contained"
      style={btnStyles}
      onClick={(evt) => {
        dispatch({
          type: "ADD_BET",
          payload: { moneylines: moneylines, oddsField: oddsField },
        });
      }}
    >
      <span>Add Bet</span>
    </Button>
  );
};
