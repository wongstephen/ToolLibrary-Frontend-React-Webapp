class UserModel {
  constructor() {
    this.userId = "";
    this.userEmail = "";
    this.userPassword = "";
    this.userDarkmode = "";
  }

  getUserId = () => {
    return this.userId;
  };

  setUserId = (el) => {
    this.userId = el;
  };

  getUserEmail = () => {
    return this.userEmail;
  };

  setUserEmail = (el) => {
    this.userEmail = el;
  };

  getUserPassword = () => {
    return this.userPassword;
  };

  setUserPassword = (el) => {
    this.userPassword = el;
  };
  getUserDarkmode = () => {
    return this.userDarkmode;
  };

  setUserDarkmode = (el) => {
    this.userDarkmode = el;
  };
}
