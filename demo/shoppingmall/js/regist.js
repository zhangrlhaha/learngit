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