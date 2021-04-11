import { types } from "../types";
import axios from "../utils/http";

export const hideSpinner = () => {
  return {
    type: types.HIDE_SPINNER,
  };
};

export const showSpinner = () => {
  return {
    type: types.SHOW_SPINNER,
  };
};

export const updateAmount = (value) => {
  return {
    type: types.UPDATE_AMOUNT,
    payload: value,
  };
};

export const updateFromCountry = (value) => {
  return {
    type: types.UPDATE_FROM_COUNTRY,
    payload: value,
  };
};

export const updateToCountry = (value) => {
  return {
    type: types.UPDATE_TO_COUNTRY,
    payload: value,
  };
};

export const swapValues = () => async (dispatch, getState) => {
  const from = getState().convert.from;
  const to = getState().convert.to;
  const amount = getState().convert.amount;
  const total = getState().convert.total;
  dispatch({
    type: types.SWAP_VALUES,
    payload: {
      from: to,
      to: from,
      amount: total,
      total: amount,
    },
  });
};

export const getRates = () => async (dispatch, getState) => {
  try {
    const from = getState().convert.from;
    const to = getState().convert.to;
    const amount = getState().convert.amount;
    const res = await axios.get(
      `/convert?from=${from}&to=${to}&amount=${amount}`
    );
    dispatch({
      type: types.GET_RATES,
      payload: res.data,
    });
  } catch (e) {
    console.log(e);
    dispatch({
      type: types.ERROR,
      payload: e.response.data,
    });
  }
};
