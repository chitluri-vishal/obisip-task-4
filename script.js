function validated(){
	var uname=document.getElementById('uname').value;
	var pwd=document.getElementById('pwd').value;
	if(uname=='vishal' && pwd=="1234"){
		alert("Login Success");
		window.location = 'home.html'
	}
	else{
		alert("Login Failed");
		document.write("You entered wrong credentials");
	}

}