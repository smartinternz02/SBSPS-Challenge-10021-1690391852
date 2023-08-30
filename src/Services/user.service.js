import axios from "axios";

import { GET_USER_URL, GET_USER_BOOKINGS } from "../Utils/constants";

export const getUser = async (accessToken) => {
  try {
    const { data } = await axios.get(GET_USER_URL, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return data;
  } catch (err) {
    throw err;
  }
};
export const getUserBookings = async (accessToken) => {
  try {
    const { data } = await axios.get(GET_USER_BOOKINGS, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return data;
  } catch (err) {
    throw err;
  }
};
