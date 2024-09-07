export const checkCredentials = (username, password) => {
  const storedUsername = localStorage.getItem("username");
  const storedPassword = localStorage.getItem("password");

  const areTheSameUsername = storedUsername === username;
  const areTheSamePassword = storedPassword === password;
  const isTheSame = areTheSamePassword === areTheSameUsername;
  const areValidCredentials = isTheSame;
  return areValidCredentials;
};
