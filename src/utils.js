import styled from "styled-components";
import { TextField } from "@material-ui/core";

const oddsToDecimal = (odds) => {
  return odds.map((odd) => {
    if (odd < 0) {
      return 1 - 100 / odd;
    } else {
      return 1 + odd / 100;
    }
  });
};

const multiplier = (odds) =>
  odds.reduce((current, next) => current * next).toFixed(2);

export const parlay = (betAmount, odds) => {
  const decimals = oddsToDecimal(odds);
  const combineOdds = multiplier(decimals);
  return { wager: betAmount, winnings: combineOdds * betAmount - betAmount };
};

export const StyledTextField = styled(TextField)`
  label {
    color: white;
  }

  .MuiOutlinedInput-root {
    fieldset {
      border-color: #3a3a3a;
    }

    &.Mui-focused fieldset {
      border-color: #7fad26;
      color: gray;
    }
  }
`;
