// enum - store constant ; duplicate value is not allow
// enum types : numeric , string, hetergenous

// numeric
enum UserRequestType {
  readData,
  saveData,
  deleteData,
}
// console.log(UserRequestType);
// string enum
enum UserRequestType2 {
  readData = "read Data",
  saveData = "save Data",
  deleteData = "delete data",
}
// console.log(UserRequestType2["deleteData"]);
// console.log(UserRequestType2.deleteData);
// console.log(UserRequestType2);

// hetergenous enum
enum requestType3 {
  readData = "read_data",
  deleteData = "delete_data",
  id = 101,
}
console.log(requestType3);