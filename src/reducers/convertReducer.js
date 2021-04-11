import { types } from "../types";

export const initialState = {
  from: "EUR",
  to: "INR",
  amount: 1,
  error: undefined,
  showSpinner: false,
  total: "...",
};

const convertReducer = (state = initialState, action) => {
  const actions = {
    [types.SHOW_SPINNER]: () => ({
      ...state,
      showSpinner: true,
    }),
    [types.HIDE_SPINNER]: () => ({
      ...state,
      showSpinner: false,
    }),
    [types.ERROR]: () => ({
      ...state,
      error: action.payload,
    }),
    [types.UPDATE_AMOUNT]: () => ({
      ...state,
      amount: action.payload,
    }),
    [types.UPDATE_FROM_COUNTRY]: () => ({
      ...state,
      from: action.payload,
    }),
    [types.UPDATE_TO_COUNTRY]: () => ({
      ...state,
      to: action.payload,
    }),
    [types.GET_RATES]: () => ({
      ...state,
      total: action.payload.total,
    }),
    [types.SWAP_VALUES]: () => ({
      ...state,
      to: action.payload.to,
      from: action.payload.from,
      total: action.payload.total,
      amount: action.payload.amount,
    }),
  };

  if (actions[action.type]) {
    return actions[action.type]();
  }
  return state;
};

export default convertReducer;

/**
 *   [types.SWAP]: () => ({
      ...state,
      to: action.payload.to,
      from: action.payload.from,
      total: action.payload.total,
      amount: action.payload.amount,
    }),
 */
