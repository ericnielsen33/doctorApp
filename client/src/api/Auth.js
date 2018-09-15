import axios from "axios";

export async function login(email, password) {
    const response = await axios.post("http://localhost:5000/api/auth", {
      email,
      password
    });
    const token = response.headers.authorization;
    const user = response.data;
    return ({ token, user })
}

export async function registerNewUser(email, firstName, lastName, password) {
  const response = await axios.post("http://localhost:5000/api/users", {
    email,
    firstName,
    lastName,
    password
  });

  const token = response.headers.authorization;
  const user = response.data;
  return ({ token, user });
}