// loginValidation.js
const greetingMessage = (user) => {
    return `Hello, ${user}! Que bom ter você de volta`;
  };
  
  const loginErrorMessage = (user) => {
    return `Pessoa usuária '${user}' não encontrada, tente novamente!`;
  };
  
  const user = {
    userName: "Joana",
    password: 123456,
  };
  
  const verifyCredentials = ({ userName, password }) => {
     const user = {
    userName: "Joana",
    password: 123456,
  };

    if (password === 123456 && userName === "Joana") {
      return greetingMessage(userName);
    } else {
      return loginErrorMessage(userName);
    }
  };
  console.log(verifyCredentials(user))
  const { userName, password } = user;
  
  module.exports = { greetingMessage, loginErrorMessage, verifyCredentials }