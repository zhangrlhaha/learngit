

	var code=null;
	function createCode() 
	{
	 code = "";
	 var codeLength = 6; //验证码的长度
	 var checkCode = document.getElementById("yzm");
	 var checkCode1 = document.getElementById("yzm1");
	 var checkCode11 = document.getElementById("yzm11");
	 var codeChars = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 
	      'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
	      'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'); //所有候选组成验证码的字符，当然也可以用中文的
	 for(var i = 0; i < codeLength; i++) 
	 {
	  var charNum = Math.floor(Math.random() * 52);
	  code += codeChars[charNum];
	 }
	 if(checkCode) 
	 {
	  checkCode.className = "code";
	  checkCode.innerHTML = code;
	 }
	  if(checkCode1) 
	 {
	  checkCode1.className = "code";
	  checkCode1.innerHTML = code;
	 }
	 
	  if(checkCode11) 
	 {
	  checkCode11.className = "code";
	  checkCode11.innerHTML = code;
	  
	 }
	}
	
//	function ValidateCode() {
//		 this._dengl=document.getElementById("denglu"); 
//		 this.inputCode=document.getElementById("yhm1").value;
//		 var _self=this;
//			_self._denglu=function(){
//				_self._dengl.onclick=function(){
//				if(_self.inputCode.length<=0) 
//				 {
//				  alert("请输入验证码！");
//				 }
//				  else if(_self.inputCode.toUpperCase() != code.toUpperCase()) 
//				 {
//				   alert("验证码输入有误！");
//				   createCode();
//				 }
//			}
//	}
//			
//}
function validateCode() 
{
 var _dengl=document.getElementById("denglu"); 
 var inputCode=document.getElementById("yhm1").value;
 _dengl.onclick=function(){
 	 if(inputCode.length <= 0) 
	 {
	  alert("请输入验证码！");
	 }
	 else if(inputCode.toUpperCase() != code.toUpperCase()) 
	 {
	   alert("验证码输入有误！");
	   createCode();
	 }
	 else 
	 {
	  alert("验证码正确！");
	 }    
	 }
}  


//手机号注册
function User(){
	this.user=document.getElementById("user");
	this.zc=document.getElementById("zc");
	this.zc1=document.getElementById("zc1");
	this.chexiao=document.getElementById("chexiaoa");
	this.chexiao1=document.getElementById("chexiao1");
	this.sjzc1=document.getElementById("sjzc1");
	this.yxzc=document.getElementById("yxzc");
	var _self=this;
	this.phonezhuce=function(){
		_self.user.onclick=function(){
			_self.zc.style.display="block";
			_self.zc.style.zIndex="30";
		}
		
		_self.chexiao.onclick=function(){
			_self.zc.style.display="none";
			_self.zc.style.zIndex="10";
		}
		
		_self.chexiao1.onclick=function(){
			_self.zc1.style.display="none";
			_self.zc.style.zIndex="10";
		}
		
		_self.sjzc1.onclick=function(){
			_self.zc.style.display="block";
			_self.zc1.style.display="none";
			_self.zc.style.zIndex="31";
		}
		
		_self.yxzc.onclick=function(){
			_self.zc.style.display="none";
			self.zc1.style.display="block";
			_self.zc1.style.zIndex="31";
		}
		
	}
}
function Login(){
	this.login111=document.getElementById("login111");
	this.dl=document.getElementById("dl");
	this.dlbootom=document.getElementById("dlbootom");
	this.chexiao=document.getElementById("chexiao12");
	this.dlbootom1=document.getElementById("dlbootom1");
	this.ptdl=document.getElementById("ptdl");
	this.dxdl=document.getElementById("dxdl");
	var _self=this;
	this.pudl2222=function(){
		_self.login111.onclick=function(){
		
			_self.dl.style.display="block";
			_self.dl.style.zIndex="30";
			_self.dlbootom.style.display="block";
			
		}
		
		_self.chexiao.onclick=function(){
			_self.dl.style.display="none";
			_self.dl.style.zIndex="10";
			_self.dlbootom.style.display="none";
			_self.dlbootom1.style.display="none";
		}
		
		
		_self.dxdl.onclick=function(){		
			_self.dlbootom1.style.display="block";
			_self.dlbootom.style.display="none";
			_self.dxdl.style.borderBottom="2px solid #2E8B57";
			_self.ptdl.style.border="none";
		}
		
		_self.ptdl.onclick=function(){		
			_self.dlbootom1.style.display="none";
			_self.dlbootom.style.display="block";
			_self.ptdl.style.borderBottom="2px solid #2E8B57";
			_self.dxdl.style.border="none";
		}
		
	}
}
//登录
function main() {
	$("#dengl").click(function() {
		var user = $("#user").val();
		var pwd_f = $("#pwd").val();
		var _params = {
			"user": user,
			"password": pwd_f
		};
		$.post("api/login.php", _params, function(data, textStatus) {
			try {
				if (data == "0") {
					//$("#top").html("<a href=\"login.html\">login</a>");
				alert("帐号和密码错误！");
				} else {
					alert("欢迎:" + data + " 光顾!!");
					window.location.href = "index.html";
				}
			} catch (e) {
				alert("忘记密码了吗?");
			}
		});
	});
}
$(function() {
	main();
})







//、、
function main() {
	var _reg = {
		"account": /^\w{6,12}$/g, //验证用户账号的长度够不够，并且限制只能字母数字下横线
		"mobile": /^1[345678]\d{9}$/g, //验证手机号
		"secret": /^.{6,20}$/g //验证密码
	}
	document.getElementById("userAccount").onblur = function() {
		_reg.account.lastIndex = 0;
		if (_reg.account.test(this.value)) {
			var _self = this;
			$.post("api/checkUser.php", {
				"condition": "user='" + this.value + "'"
			}, function(data, textStatus) {
				if (textStatus == "success" && parseInt(data) > 0) {
					_self.parentNode.children[2].innerHTML = "**用户账号已被占用，请重新输入！！";
				} else {
					_self.parentNode.children[2].innerHTML = "";
				}
			});
		} else {
			this.parentNode.children[2].innerHTML = "*用户账号只能由6-12个字母数字或者下横向组成";
		}
	}
//	document.getElementById("mail").onblur = function() {
//		_reg.mail.lastIndex = 0;
//		if (_reg.mail.test(this.value)) {
//			var _self = this;
//			$.post("api/checkUser.php", {
//				"condition": "mail='" + this.value + "'"
//			}, function(data, textStatus) {
//				if (textStatus == "success" && parseInt(data) > 0) {
//					_self.parentNode.children[2].innerHTML = "*该邮箱账号已被占用，请重新输入！！";
//				} else {
//					_self.parentNode.children[2].innerHTML = "";
//				}
//			});
//		} else {
//			this.parentNode.children[2].innerHTML = "*邮箱格式不正确！！";
//		}
//	}
	document.getElementById("yhm").onblur = function() {
		_reg.mobile.lastIndex = 0;
		if (_reg.mobile.test(this.value)) {
			var _self = this;
			$.post("api/checkUser.php", {
				"condition": "mobile='" + this.value + "'"
			}, function(data, textStatus) {
				if (textStatus == "success" && parseInt(data) > 0) {
					_self.parentNode.children[2].innerHTML = "**手机号码已被占用，请重新输入！！";
				} else {
					_self.parentNode.children[2].innerHTML = "";
				}
			});
		} else {
			this.parentNode.children[2].innerHTML = "*手机格式不正确！！";
		}
	}
	document.getElementById("denglu1").onclick = function() {
		var pwd_f = document.getElementById("pwd1").value;
		var pwd_s = document.getElementById("pwd2").value;
		if (pwd_f == pwd_s) {
			var _params = {
				"user": document.getElementById("userAccount").value,
				"mobile": document.getElementById("mobile").value,
				"secret": document.getElementById("password").value,
				"name": document.getElementById("userName").value
			};
			_reg.account.lastIndex = 0;
			_reg.mobile.lastIndex = 0;
			_reg.mail.lastIndex = 0;
			_reg.secret.lastIndex = 0;
			if (_reg.account.test(_params.user) && _reg.mobile.test(_params.mobile) && _reg.mail.test(_params.mail) && _reg.secret.test(_params.secret)) {
				$.post("api/registerUser.php", _params, function(data, textStatus) {
					if (textStatus == "success" && parseInt(data) > 0) {
						alert("您已顺利成为会员！！！");
					} else {
						alert("尊敬的用户您好，您注册会员操作失败，请重试，或者联系管理员！！！");
					}
				});
			} else {
				alert("尊敬的用户您好，您的基本信息不完整，为了安全请完善！！");
			}
		} else {
			document.getElementById("comment").innerHTML = "两次输入的密码不匹配，请重新输入";
		}
	}
}
window.onload = main;
window.onload=function(){
	createCode();
	validateCode();
	
	var _log=new Login();
		_log.pudl2222();
		
	var _user=new User();
		_user.phonezhuce();
}