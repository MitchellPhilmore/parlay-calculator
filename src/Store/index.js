import React, { createContext, useReducer } from "react";

const initialState = {
  betAmount: "",
  winings: 0,
  payout: 0,
  moneylines: [],
  oddsField: "",
  isActive: false,
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
      case "ADD_BET":
        return {
          ...state,
          moneylines: [
            ...action.payload.moneylines,
            Number(action.payload.oddsField),
          ],
          active: false,
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
          winings: action.payload,
        };
        // TODO
      case "DELETE_MONEYLINE":
        return {
          ...state,
          moneylines: [action.payload.moneylines].splice(
            action.payload.index,
            1
          ),
        };

      default:
        return state;
    }
  }, initialState);

  return <Provider value={[state, dispatch]}>{children}</Provider>;
};

export { StateProvider, store };
