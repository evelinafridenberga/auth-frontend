import axios from "axios";

const BASE_URL = "http://localhost:3001";

export const registerUser = async (email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/register`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      if (error.response.status === 400) {
        if (error.response.data.message === "Email already exists") {
          throw new Error("Email already exists");
        } else {
          throw new Error("An error occurred");
        }
      }
    }
    throw error;
  }
};

export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 400) {
      throw new Error("Incorrect email or password");
    }
    throw new Error("An error occurred");
  }
};
