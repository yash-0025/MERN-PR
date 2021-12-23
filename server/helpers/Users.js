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

const RegisterNewUser = (Username , Password, Name, Email) => {

  //  ! Default user template
  const DefaultUser = {
    Name,
    Password ,
    Role:"Student" ,
    Verified:false,
    Personal: {
        Gender:null,
        Email,
        Phone: null
    },
    Socials : {
        Facebook : null,
        Instagram : null,
        Twitter : null,
        LinkedIn : null,
        Github : null,
        StackOverflow : null,
        Telegram : null,
        Whatsapp : null,
        Discord : null
    },
    CreatedAt: new Date()
};
}

module.exports = {
    CheckUserNamePassword,
    RegisterNewUser
};