// temporary user data
const Users = require("../constants/Users.json")


export const CheckUserNamePassword = (Username, Password) => {
    if (typeof Users[Username] !== "undefined") {
        return Users[Username];
    }else {
        return false;
    }
}


console.log(CheckUserNamePassword("Yash"));
console.log(CheckUserNamePassword("John"));
console.log(CheckUserNamePassword("Deep"));
