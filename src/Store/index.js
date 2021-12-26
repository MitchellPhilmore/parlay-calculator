import React, { createContext, useReducer } from "react";

const initialState = {
    betAmount: '',
    winings: 0,
    payout: 0,
    moneylines: [],
    oddsField: '',
    isActive: false
};
const store = createContext(initialState);

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "UPDATE_BET_AMOUNT":
        return {
            ...state,
            betAmount: action.payload
        };
      case "UPDATE_MONEY_LINE":
        return {
          ...state,
          oddsField: action.payload
        };
      case "ADD_BET":
        return {
            ...state,
            moneylines: [...action.payload.moneylines, Number(action.payload.oddsField)],
            active: false
        };
      case "":
        return {
          weekly: false,
          monthly: true,
          annual: false,
        };

      case "":
        return {
          weekly: false,
          monthly: false,
          annual: true,
        };
      case "":
        return action.payload;

      case "":
        return true;

      case "":
        return {
          ...state,
          [action.payload.name]: action.payload.value,
        };

      default:
        return state;
    }
  }, initialState);
  const { Provider } = store;
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { StateProvider, store };
