import axios from "axios";

const BASE_URL = "https://auth-backend-sage.vercel.app"; //

export const registerUser = async (email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/register`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 400) {
      alert("Email already exists");
    } else {
      alert("An error occurred");
    }
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
      alert("Incorrect email or password");
    } else {
      alert("An error occurred");
    }
  }
};
