import React from "react";
import { Paper, Typography } from "@material-ui/core";

export default ({ youWin, payout }) => {
  return (
    <div className="results_container">
      <div>
        <Typography
          style={{
            marginBotton: "20px",
            color: "white",
            fontFamily: "'Bebas Neue', cursive",
            textAlign: "center",
          }}
          variant="h5"
        >
          You Win
        </Typography>
        <Typography
          style={{ marginBotton: "20px", color: "white", textAlign: "center" }}
          variant="h5"
        >
          $ {youWin.toFixed(2)}
        </Typography>
      </div>

      <div>
        <Typography
          style={{
            marginBotton: "20px",
            color: "white",
            fontFamily: "'Bebas Neue', cursive",
            textAlign: "center",
          }}
          variant="h5"
        >
          Payout
        </Typography>
        <Typography
          style={{ marginBotton: "20px", color: "white" }}
          variant="h5"
        >
          $ {payout.toFixed(2)}
        </Typography>
        <Paper elevation={3} />
      </div>
      <div>
        <Typography
          style={{
            marginBotton: "20px",
            color: "white",
            fontFamily: "'Bebas Neue', cursive",
            textAlign: "center",
          }}
          variant="h5"
        >
          True Odds
        </Typography>
        <Typography
          style={{ marginBotton: "20px", color: "white", textAlign: "center" }}
          variant="h5"
        >
          {youWin === 0 ? "--" : `+${youWin.toFixed()}`}
        </Typography>
        <Paper elevation={3} />
      </div>
    </div>
  );
};
