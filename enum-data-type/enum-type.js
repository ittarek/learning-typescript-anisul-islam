// enum - store constant ; duplicate value is not allow
// enum types : numeric , string, hetergenous
// numeric
var UserRequestType;
(function (UserRequestType) {
    UserRequestType[UserRequestType["readData"] = 0] = "readData";
    UserRequestType[UserRequestType["saveData"] = 1] = "saveData";
    UserRequestType[UserRequestType["deleteData"] = 2] = "deleteData";
})(UserRequestType || (UserRequestType = {}));
// console.log(UserRequestType);
// string enum
var UserRequestType2;
(function (UserRequestType2) {
    UserRequestType2["readData"] = "read Data";
    UserRequestType2["saveData"] = "save Data";
    UserRequestType2["deleteData"] = "delete data";
})(UserRequestType2 || (UserRequestType2 = {}));
// console.log(UserRequestType2["deleteData"]);
// console.log(UserRequestType2.deleteData);
// console.log(UserRequestType2);
// hetergenous enum
var requestType3;
(function (requestType3) {
    requestType3["readData"] = "read_data";
    requestType3["deleteData"] = "delete_data";
    requestType3[requestType3["id"] = 101] = "id";
})(requestType3 || (requestType3 = {}));
console.log(requestType3);
