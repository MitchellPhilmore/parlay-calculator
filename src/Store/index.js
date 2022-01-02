import React, { createContext, useReducer } from "react";

const initialState = {
  betAmount: "",
  profit: 0,
  payout: 0,
  moneylines: [],
  oddsField: "",
  isDisabled: true,
};
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "UPDATE_BET_AMOUNT":
        return {
          ...state,
          betAmount: action.payload,
        };
      case "UPDATE_MONEY_LINE":
        return {
          ...state,
          oddsField: action.payload,
        };
      case "UPDATE_PROFIT_AND_PAYOUT":
        return {
          ...state,
          profit: Number(action.payload.profit),
          payout: Number(action.payload.wager) + Number(action.payload.profit),
        };
      case "ADD_BET":
        return {
          ...state,
          moneylines: [
            ...action.payload.moneylines,
            Number(action.payload.oddsField),
          ],
          // active: false,
        };
      case "RESET_ODDS_FIELD":
        return {
          ...state,
          oddsField: "",
        };

      case "RESET_BET_AMOUNT":
        return {
          ...state,
          betAmount: "",
        };

      case "UPDATE_PAYOUT":
        return {
          ...state,
          payout: action.payload,
        };

      case "UPDATE_WININGS":
        return {
          ...state,
          profit: action.payload,
        };
      // TODO
      case "DELETE_MONEYLINE":
        return {
          ...state,
          moneylines: action.payload.moneylines,
        };
        case "SET_IS_DISABLED":
          return {
            ...state,
            isDisabled: action.payload
          };
          
        

      default:
        return state;
    }
  }, initialState);

  return <Provider value={[state, dispatch]}>{children}</Provider>;
};

export { StateProvider, store };
