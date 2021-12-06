// temporary user data
const Users = require("../constants/Users.json")

const CheckUserNamePassword = (Username, Password) => {
  if (typeof Users[Username] !== "undefined") {
    if (Users[Username].Password === Password) {
        // * Correct Username and Password
        return Users[Username];
    }else {
        // * Wrong UserName and Password 
     return -1; 
    }
  } else {
    // * User Not Exist  
    return 0;
  }
}

//  console.log(CheckUserNamePassword("Yash"))
// console.log(CheckUserNamePassword("John"))
//  console.log(CheckUserNamePassword("Deep"))


module.exports = {
    CheckUserNamePassword
};