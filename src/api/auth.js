// src/api/auth.js

// Register a new user
import { BASE_URL } from "../db/constants.js";

export async function registerUser(userData) {
  try {
    const res = await fetch(`${BASE_URL}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.msg || data.error || "Registration failed");
    }

    return data; // { msg: "User registered successfully" }
  } catch (err) {
    throw err;
  }
}

// Login
export async function loginUser(credentials) {
  try {
    const res = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.msg || data.error || "Login failed");
    }

    return data; // { token, user }
  } catch (err) {
    throw err;
  }
}

// Get Profile (protected)
export async function getProfile(token) {
  try {
    const res = await fetch(`${BASE_URL}/profile`, {
      headers: { Authorization: token },
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.msg || data.error || "Failed to load profile");
    }

    return data; // { _id, username, email }
  } catch (err) {
    throw err;
  }
}
