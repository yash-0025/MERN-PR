// temporary user data
const Users = require("../constants/Users.json")

const CheckUserNamePassword = (Username, Password) => {
  if (typeof Users[Username] !== "undefined") {
      //  * Users doesn't exist
      //  * Check if password is right or not
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

const RegisterNewUser = (Username , Password, Name, Email,Role) => {

  //  ! Default user template
  const NewUser = {
    Name,
    Password ,
    Role,
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
  //  &  Check if user exists or not
  if (typeof Users[Username] !== "undefined"){
    //  * User doesn't exist
    //  * Add the new user to the data
  }else{
    // * User already exists.
  }

}

module.exports = {
    CheckUserNamePassword,
    RegisterNewUser
};