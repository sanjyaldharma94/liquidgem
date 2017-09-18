function display(){
var userName = document.getElementById("username").value;
var userData = document.getElementById("userdata").value;
var userComment = document.getElementById("usercomment").value;
//function saveData(){
 // function display(){
  	if(userName == ""){
  	prompt("Please type something");
  } else if(userData == ""){
  	prompt("please type something")
  } else if(userComment == ""){
  prompt("please type something")
  } else{
  	alert("Thanks "+ userName)
  }
};
