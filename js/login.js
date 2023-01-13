
function Log(){
	var username=document.getElementById("username").value;
	var pwd=document.getElementById("password").value;
	if(username==""||pwd==""){
		alert("输入不能为空!");
		return false;
	}
	if(localStorage.getItem("uname")){
		var uname=localStorage.getItem("uname").toString();
		var pass=localStorage.getItem("pwd").toString();
		if(username==uname){
			if(pwd==pass){
				alert("登陆成功!");
				sessionStorage.setItem("username",uname);
				window.event.returnValue=false;
				window.location.href="index.html";
			}
			else{
				alert("输入的密码不正确!");
			}
		}	
	}
	else{
	alert("请先注册!");
	window.event.returnValue=false;
	indow.location.href="reg.html";
	}	
}

function Chk()
{
	if(sessionStorage.getItem("username")){
		;
	}
	else{
		alert("请先登录,再访问!");
		document.location.href="login.html";
	}
}

function Reg()
{
	var username=document.getElementById("username").value;
	var pwd=document.getElementById("password").value;
	var repwd=document.getElementById("repassword").value;
	if(username==""){
		alert("用户名不能为空!");
		return false;
	}
	if(pwd==""||repwd==""){
		alert("密码不能为空!");
		return false;
	}
	if(pwd!=repwd){
		alert("两次密码不一致!");
		return false;
	}
	localStorage.setItem("uname",username);
	localStorage.setItem("pwd",pwd);
	alert("注册成功!");
	window.event.returnValue=false;
	window.location.href="login.html";
}