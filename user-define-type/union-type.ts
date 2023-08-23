let userId : number | string | boolean;

userId = 10
userId = "10"
userId = true

function displayUserInfo(userId:string | number){
          console.log(userId);
}

displayUserInfo(10)
displayUserInfo("10")