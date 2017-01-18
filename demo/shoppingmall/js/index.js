$(document).ready(function() {

	$(function() {
		var _index = 0;
		$("#menu ul li").click(function() {
			$(this).find("span").addClass("active");
			$(this).parent().siblings().find("span").removeClass("active");
			_index = $(this).index() + 1;
			//通过拼接字符串获取元素，再取得相对于文档的高度
			var _top = $("#louti" + _index).offset().top;
			//scrollTop滚动到对应高度
			$("body,html").animate({
				scrollTop: _top
			}, 500);
		});
		var nav = $("#menu"); //得到导航对象
		var win = $(window); //得到窗口对象
		var sc = $(document); //得到document文档对象。
		win.scroll(function() {

			if (sc.scrollTop() >= 800) {
				$("#menu").show();
				//获取滚动元素对应的索引!!!重难点
				var index = Math.floor(sc.scrollTop() / 800);

				$("#menu ul li span").eq(index - 1).addClass("active").parent().siblings().find("span").removeClass("active");
			} else {
				$("#menu").hide();
			}
		});
	});

	$("#gouwuche").bind({
		mouseenter: function() {
			$("#content1").slideDown("1000"),
				$("#gouwuche").css("height", "42px");
			$("#gouwuche").css("background-color", "#fff");
			$("#gouwuche a").css("color", "#30ab38");
			$("#gouwuche span").css("color", "#30ab38");
			$("#content1").css("background-color", "#fff");
			$("#gouwuche").css("border-bottom", "none");
		},
		mouseleave: function() {
			$("#content1").slideUp("1000"),
				//			try(("$content1").offsetHeight<=0){
				$("#gouwuche").css("background-color", "#f9f9f9");
			$("#gouwuche").css("border-bottom", "1px solid #dddddd");
			$("#gouwuche").css("height", "40px");
			$("#gouwuche a").css("color", "#dddddd");
			$("#gouwuche span").css("color", "#dddddd");
			//			}
		}
	});

	function AddShop() {
		this.Phone9 = document.getElementById("Phone9");
		this.Phone8 = document.getElementById("Phone8");
		this.Phone7 = document.getElementById("Phone7");
		this.Phone6 = document.getElementById("Phone6");
		this.Phone5 = document.getElementById("Phone5");
		this.Phone4 = document.getElementById("Phone4");
		this.Phone3 = document.getElementById("Phone3");
		this.Phone2 = document.getElementById("Phone2");
		this.Phone1 = document.getElementById("Phone1");
		var _self = this;

		this.addFirstTop = function() {
			_self.a = null;
			_self.a2 = null;
			_self.a3 = null;
			_self.a4 = null;
			$.get("json/demo.json", null, function(data, textStatus) {
				if (textStatus == "success") {
					for (var i1 = 0; i1 < 6; i1++) {
						_self.a = document.createElement("dl");
						_self.a1 = document.createElement("dd");
						_self.a2 = document.createElement("dt");
						_self.a3 = document.createElement("dt");
						_self.a4 = document.createElement("img");

						_self.a4.src = "img/" + data["shop" + (i1 + 1)]["img"];
						_self.a2.innerHTML = data["shop" + (i1 + 1)]["dt1"];
						_self.a3.innerHTML = data["shop" + (i1 + 1)]["dt2"];

						_self.a.appendChild(_self.a1);
						_self.a.appendChild(_self.a2);
						_self.a.appendChild(_self.a3);
						_self.a1.appendChild(_self.a4);
						_self.Phone1.appendChild(_self.a);

					}

				}
			}, "json")
		}

		this.addFirstTop1 = function() {
			_self.a = null;
			_self.a2 = null;
			_self.a3 = null;
			_self.a4 = null;
			$.get("json/demo.json", null, function(data, textStatus) {
				if (textStatus == "success") {
					for (var n = 0; n < 6; n++) {

						for (var i1 = 0; i1 < 6; i1++) {
							_self.a = document.createElement("dl");
							_self.a1 = document.createElement("dd");
							_self.a2 = document.createElement("dt");
							_self.a3 = document.createElement("dt");
							_self.a4 = document.createElement("img");

							_self.a4.src = "img/" + data["shop" + (i1 + 1)]["img"];
							_self.a2.innerHTML = data["shop" + (i1 + 1)]["dt1"];
							_self.a3.innerHTML = data["shop" + (i1 + 1)]["dt2"];

						}
						_self.a.appendChild(_self.a1);
						_self.a.appendChild(_self.a2);
						_self.a.appendChild(_self.a3);
						_self.a1.appendChild(_self.a4);
						_self.Phone2.appendChild(_self.a);
					}
				}
			}, "json")
		}
		this.addFirstTop2 = function() {
			_self.a = null;
			_self.a2 = null;
			_self.a3 = null;
			_self.a4 = null;
			$.get("json/demo.json", null, function(data, textStatus) {
				if (textStatus == "success") {
					for (var i1 = 0; i1 < 6; i1++) {
						_self.a = document.createElement("dl");
						_self.a1 = document.createElement("dd");
						_self.a2 = document.createElement("dt");
						_self.a3 = document.createElement("dt");
						_self.a4 = document.createElement("img");

						_self.a4.src = "img/" + data["shop" + (i1 + 1)]["img"];
						_self.a2.innerHTML = data["shop" + (i1 + 1)]["dt1"];
						_self.a3.innerHTML = data["shop" + (i1 + 1)]["dt2"];

						_self.a.appendChild(_self.a1);
						_self.a.appendChild(_self.a2);
						_self.a.appendChild(_self.a3);
						_self.a1.appendChild(_self.a4);
						_self.Phone3.appendChild(_self.a);
					}

				}
			}, "json")
		}
		this.addFirstTop3 = function() {
			_self.a = null;
			_self.a2 = null;
			_self.a3 = null;
			_self.a4 = null;
			$.get("json/demo.json", null, function(data, textStatus) {
				if (textStatus == "success") {
					for (var i1 = 0; i1 < 6; i1++) {
						_self.a = document.createElement("dl");
						_self.a1 = document.createElement("dd");
						_self.a2 = document.createElement("dt");
						_self.a3 = document.createElement("dt");
						_self.a4 = document.createElement("img");

						_self.a4.src = "img/" + data["shop" + (i1 + 1)]["img"];
						_self.a2.innerHTML = data["shop" + (i1 + 1)]["dt1"];
						_self.a3.innerHTML = data["shop" + (i1 + 1)]["dt2"];

						_self.a.appendChild(_self.a1);
						_self.a.appendChild(_self.a2);
						_self.a.appendChild(_self.a3);
						_self.a1.appendChild(_self.a4);
						_self.Phone4.appendChild(_self.a);
					}

				}
			}, "json")
		}

		this.addFirstTop4 = function() {
			_self.a = null;
			_self.a2 = null;
			_self.a3 = null;
			_self.a4 = null;
			$.get("json/demo.json", null, function(data, textStatus) {
				if (textStatus == "success") {

					for (var i1 = 0; i1 < 6; i1++) {
						_self.a = document.createElement("dl");
						_self.a1 = document.createElement("dd");
						_self.a2 = document.createElement("dt");
						_self.a3 = document.createElement("dt");
						_self.a4 = document.createElement("img");

						_self.a4.src = "img/" + data["shop" + (i1 + 1)]["img"];
						_self.a2.innerHTML = data["shop" + (i1 + 1)]["dt1"];
						_self.a3.innerHTML = data["shop" + (i1 + 1)]["dt2"];

						_self.a.appendChild(_self.a1);
						_self.a.appendChild(_self.a2);
						_self.a.appendChild(_self.a3);
						_self.a1.appendChild(_self.a4);
						_self.Phone5.appendChild(_self.a);
					}

				}
			}, "json")
		}

		this.addFirstTop5 = function() {
			_self.a = null;
			_self.a2 = null;
			_self.a3 = null;
			_self.a4 = null;
			$.get("json/demo.json", null, function(data, textStatus) {
				if (textStatus == "success") {

					for (var i1 = 0; i1 < 6; i1++) {
						_self.a = document.createElement("dl");
						_self.a1 = document.createElement("dd");
						_self.a2 = document.createElement("dt");
						_self.a3 = document.createElement("dt");
						_self.a4 = document.createElement("img");

						_self.a4.src = "img/" + data["shop" + (i1 + 1)]["img"];
						_self.a2.innerHTML = data["shop" + (i1 + 1)]["dt1"];
						_self.a3.innerHTML = data["shop" + (i1 + 1)]["dt2"];

						_self.a.appendChild(_self.a1);
						_self.a.appendChild(_self.a2);
						_self.a.appendChild(_self.a3);
						_self.a1.appendChild(_self.a4);
						_self.Phone6.appendChild(_self.a);
					}

				}
			}, "json")
		}

		this.addFirstTop6 = function() {
			_self.a = null;
			_self.a2 = null;
			_self.a3 = null;
			_self.a4 = null;
			$.get("json/demo.json", null, function(data, textStatus) {
				if (textStatus == "success") {

					for (var i1 = 0; i1 < 6; i1++) {
						_self.a = document.createElement("dl");
						_self.a1 = document.createElement("dd");
						_self.a2 = document.createElement("dt");
						_self.a3 = document.createElement("dt");
						_self.a4 = document.createElement("img");

						_self.a4.src = "img/" + data["shop" + (i1 + 1)]["img"];
						_self.a2.innerHTML = data["shop" + (i1 + 1)]["dt1"];
						_self.a3.innerHTML = data["shop" + (i1 + 1)]["dt2"];

						_self.a.appendChild(_self.a1);
						_self.a.appendChild(_self.a2);
						_self.a.appendChild(_self.a3);
						_self.a1.appendChild(_self.a4);
						_self.Phone7.appendChild(_self.a);
					}

				}
			}, "json")
		}

		this.addFirstTop7 = function() {
			_self.a = null;
			_self.a2 = null;
			_self.a3 = null;
			_self.a4 = null;
			$.get("json/demo.json", null, function(data, textStatus) {
				if (textStatus == "success") {

					for (var i1 = 0; i1 < 6; i1++) {
						_self.a = document.createElement("dl");
						_self.a1 = document.createElement("dd");
						_self.a2 = document.createElement("dt");
						_self.a3 = document.createElement("dt");
						_self.a4 = document.createElement("img");

						_self.a4.src = "img/" + data["shop" + (i1 + 1)]["img"];
						_self.a2.innerHTML = data["shop" + (i1 + 1)]["dt1"];
						_self.a3.innerHTML = data["shop" + (i1 + 1)]["dt2"];

						_self.a.appendChild(_self.a1);
						_self.a.appendChild(_self.a2);
						_self.a.appendChild(_self.a3);
						_self.a1.appendChild(_self.a4);
						_self.Phone8.appendChild(_self.a);
					}

				}
			}, "json")
		}
		this.addFirstTop8 = function() {
			_self.a = null;
			_self.a2 = null;
			_self.a3 = null;
			_self.a4 = null;
			$.get("json/demo.json", null, function(data, textStatus) {
				if (textStatus == "success") {

					for (var i1 = 0; i1 < 6; i1++) {
						_self.a = document.createElement("dl");
						_self.a1 = document.createElement("dd");
						_self.a2 = document.createElement("dt");
						_self.a3 = document.createElement("dt");
						_self.a4 = document.createElement("img");

						_self.a4.src = "img/" + data["shop" + (i1 + 1)]["img"];
						_self.a2.innerHTML = data["shop" + (i1 + 1)]["dt1"];
						_self.a3.innerHTML = data["shop" + (i1 + 1)]["dt2"];

						_self.a.appendChild(_self.a1);
						_self.a.appendChild(_self.a2);
						_self.a.appendChild(_self.a3);
						_self.a1.appendChild(_self.a4);
						_self.Phone9.appendChild(_self.a);
					}

				}
			}, "json")
		}
	}

	var addshaop = new AddShop();
	addshaop.addFirstTop();
	addshaop.addFirstTop1();
	addshaop.addFirstTop2();
	addshaop.addFirstTop3();
	addshaop.addFirstTop4();
	addshaop.addFirstTop5();
	addshaop.addFirstTop6();
	addshaop.addFirstTop7();
	addshaop.addFirstTop8();

	$("#xdh ul li").each(function() {
		$(this).mouseenter(function() {
			//				if($(".Phone3").offsetHeight>=230){
			//					$(this).find(".Phone3").show("slow");
			//				}else{
			$(this).find(".Phone3").slideDown("normal");
			//				}
		});
		$(this).mouseleave(function() {
			//$(this).find(".Phone3").hide("fast");	
			$(this).find(".Phone3").slideUp("normal");
		});
	});

	//$(document).ready(function() { 
	var length,
	currentIndex = 0,
	interval,
	hasStarted = false, //是否已经开始轮播 
	t = 3000; //轮播时间间隔 
	length = $('.slider-panel').length; //图片的长度
	//将除了第一张图片隐藏 
	$('.slider-panel:not(:first)').hide();
	//将第一个slider-item设为激活状态 
	$('.slider-item:first').addClass('slider-item-selected');
	//隐藏向前、向后翻按钮 
	$('.slider-page').hide();
	//鼠标上悬时显示向前、向后翻按钮,停止滑动，鼠标离开时隐藏向前、向后翻按钮，开始滑动 
	$('.slider-panel, .slider-pre, .slider-next').hover(function() {
		stop();
		$('.slider-page').show();
	}, function() {
		$('.slider-page').hide();
		start();
	});
	
	$('.slider-item').hover(function(e) {
		stop();
		var preIndex = $(".slider-item").filter(".slider-item-selected").index();
		currentIndex = $(this).index();
		play(preIndex, currentIndex);
	}, function() {
		start();
	});
	$('.slider-pre').unbind('click');
	$('.slider-pre').bind('click', function() {
		pre();
	});
	$('.slider-next').unbind('click');
	$('.slider-next').bind('click', function() {
		next();
	});
	/** 
	 * 向前翻页 
	 */
	function pre() {
		var preIndex = currentIndex;
		currentIndex = (--currentIndex + length) % length;
		play(preIndex, currentIndex);
	}
	/** 
	 * 向后翻页 
	 */
	function next() {
		var preIndex = currentIndex;
		currentIndex = ++currentIndex % length;
		play(preIndex, currentIndex);
	}
	/** 
	 * 从preIndex页翻到currentIndex页 
	 * preIndex 整数，翻页的起始页 
	 * currentIndex 整数，翻到的那页 
	 */
	function play(preIndex, currentIndex) {
		$('.slider-panel').eq(preIndex).fadeOut(500)
			.parent().children().eq(currentIndex).fadeIn(1000);
		$('.slider-item').removeClass('slider-item-selected');
		$('.slider-item').eq(currentIndex).addClass('slider-item-selected');
	}
	/** 
	 * 开始轮播 
	 */
	function start() {
		if (!hasStarted) {
			hasStarted = true;
			interval = setInterval(next, t);
		}
	}
	/** 
	 * 停止轮播 
	 */
	function stop() {
		clearInterval(interval);
		hasStarted = false;
	}
	//开始轮播 
	start();
	// });

	//导航菜单
	function Addmenu() {
		this.mleft1 = document.getElementById("mleft1");
		var _self = this;
		this.addphone = function() {
			_self.ul = null;
			_self.a = null;
			_self.img = null;
			$.get("json/demo.json", null, function(data, textStatus) {
				if (textStatus == "success") {
					for (var n = 0; n < 6; n++) {
						if (n < 5) {
							_self.ul = document.createElement("ul");
							_self.mleft1.appendChild(_self.ul);
							for (var i = 0; i < 10; i++) {
								_self.a = document.createElement("a");
								if (data["phone"]["phone" + (n + 1)]["p" + (i)]) {
									_self.a.innerHTML = data["phone"]["phone" + (n + 1)]["p" + (i)];
								}
								_self.ul.appendChild(_self.a);
							}
						} else if (n = 6) {
							_self.ul = document.createElement("ul");
							_self.mleft1.appendChild(_self.ul);
							for (var i = 0; i < 10; i++) {
								_self.img = document.createElement("img");
								if (data["phone"]["phone" + (n + 1)]["p" + (i)]) {
									_self.img.src = "img/" + (data["phone"]["phone" + (n + 1)]["p" + (i)]);
									_self.ul.appendChild(_self.img);
								}
							}
						}
					}
				}
			}, "json")
		}
	}

	var addmenu = new Addmenu();
	addmenu.addphone();


function Addmenu1() {
		this.mleft2 = document.getElementById("mleft2");
		var _self = this;
		this.addphone1 = function() {
			_self.ul = null;
			_self.a = null;
			_self.img = null;
			$.get("json/demo.json", null, function(data, textStatus) {
				if (textStatus == "success") {
					
					for (var n1 = 0; n1 < 8; n1++) {
						if (n1 <6) {
							_self.ul = document.createElement("ul");
							_self.mleft2.appendChild(_self.ul);
							for (var i = 0; i < 10; i++) {
								_self.a = document.createElement("a");
								if (data["clothing"]["clothing" + (n1 + 1)]["p" + (i)]) {
									_self.a.innerHTML = data["clothing"]["clothing" + (n1 + 1)]["p" + (i)];
								}
								_self.ul.appendChild(_self.a);
							}
						} else if (n1 ==7) {
							_self.ul = document.createElement("ul");
							_self.mleft2.appendChild(_self.ul);
							for (var i =0; i < 10; i++) {
								_self.img = document.createElement("img");
								if (data["clothing"]["clothing" + (n1 )]["p" +(i)]) {
									_self.img.src = "img/" + (data["clothing"]["clothing" + (n1)]["p" + (i)]);
									_self.ul.appendChild(_self.img);
								}
							}
						}
					}
					//////
				}
			}, "json")
		}
	}
	var addmenu1 = new Addmenu1();
	addmenu1.addphone1();

//智能家居


function Addmenu3() {
		this.mleft3 = document.getElementById("mleft3");
		var _self = this;
		this.addphone3 = function() {
			_self.ul = null;
			_self.a = null;
			_self.img = null;
			$.get("json/demo.json", null, function(data, textStatus) {
				if (textStatus == "success") {

					for (var n3 = 0; n3 < 8; n3++) {
						if (n3 <5) {
							_self.ul = document.createElement("ul");
							_self.mleft3.appendChild(_self.ul);
							for (var i3 = 0; i3 < 10; i3++) {
								_self.a = document.createElement("a");
								if (data["smarthome"]["smarthome" + (n3 + 1)]["p" + (i3)]) {
									_self.a.innerHTML = data["smarthome"]["smarthome" + (n3 + 1)]["p" + (i3)];
								}
								_self.ul.appendChild(_self.a);
							}
						} else if (n3 ==6) {
							_self.ul = document.createElement("ul");
							_self.mleft3.appendChild(_self.ul);
							for (var i3 =0; i3 <10; i3++) {
								_self.img = document.createElement("img");
								if (data["smarthome"]["smarthome" + (n3 )]["p" +(i3)]) {
									_self.img.src = "img/" + (data["smarthome"]["smarthome" + (n3)]["p" + (i3)]);
									_self.ul.appendChild(_self.img);
								}
							}
						}
					}
					//////
				}
			}, "json")
		}
	}
	var addmenu3 = new Addmenu3();
	addmenu3.addphone3();

//智能车品


function Addmenu4() {
		this.mleft4 = document.getElementById("mleft4");
		var _self = this;
		this.addphone4 = function() {
			_self.ul = null;
			_self.a = null;
			_self.img = null;
			$.get("json/demo.json", null, function(data, textStatus) {
				if (textStatus == "success") {

					for (var n4 = 0; n4 < 8; n4++) {
						if (n4 <5) {
							_self.ul = document.createElement("ul");
							_self.mleft4.appendChild(_self.ul);
							for (var i4 = 0; i4 < 10; i4++) {
								_self.a = document.createElement("a");
								if (data["IntelligentVehicleProduct"]["IntelligentVehicleProduct" + (n4 + 1)]["p" + (i4)]) {
									_self.a.innerHTML = data["IntelligentVehicleProduct"]["IntelligentVehicleProduct" + (n4 + 1)]["p" + (i4)];
								}
								_self.ul.appendChild(_self.a);
							}
						} else if (n4==6) {
							_self.ul = document.createElement("ul");
							_self.mleft4.appendChild(_self.ul);
							for (var i4 =0; i4 <12; i4++) {
								_self.img = document.createElement("img");
								if (data["IntelligentVehicleProduct"]["IntelligentVehicleProduct" + (n4 )]["p" +(i4)]) {
									_self.img.src = "img/" + (data["IntelligentVehicleProduct"]["IntelligentVehicleProduct" + (n4)]["p" + (i4)]);
									_self.ul.appendChild(_self.img);
								}
							}
						}
					}
					//////
				}
			}, "json")
		}
	}
	var Addmenu4 = new Addmenu4();
	Addmenu4.addphone4();
	
//影音娱乐
function Addmenu5() {
		this.mleft5 = document.getElementById("mleft5");
		var _self = this;
		this.addphone5 = function() {
			_self.ul = null;
			_self.a = null;
			_self.img = null;
			$.get("json/demo.json", null, function(data, textStatus) {
				if (textStatus == "success") {
					
					for (var n5 = 0; n5 < 8; n5++) {
						if (n5 <5) {
							_self.ul = document.createElement("ul");
							_self.mleft5.appendChild(_self.ul);
							for (var i5 = 0; i5 < 10; i5++) {
								_self.a = document.createElement("a");
								if (data["Entertainment"]["Entertainment" + (n5 + 1)]["p" + (i5)]) {
									_self.a.innerHTML = data["Entertainment"]["Entertainment" + (n5 + 1)]["p" + (i5)];
								}
								_self.ul.appendChild(_self.a);
							}
						} else if (n5==6) {
							_self.ul = document.createElement("ul");
							_self.mleft5.appendChild(_self.ul);
							for (var i5 =0; i5 <6; i5++) {
								_self.img = document.createElement("img");
								if (data["Entertainment"]["Entertainment" + (n5 )]["p" +(i5)]) {
									_self.img.src = "img/" + (data["Entertainment"]["Entertainment" + (n5)]["p" + (i5)]);
									_self.ul.appendChild(_self.img);
								}
							}
						}
					}
					//////
				}
			}, "json")
		}
	}
	var Addmenu5 = new Addmenu5();
	Addmenu5.addphone5();



//电脑游戏
function Addmenu6() {
		this.mleft6 = document.getElementById("mleft6");
		var _self = this;
		this.addphone6 = function() {
			_self.ul = null;
			_self.a = null;
			_self.img = null;
			$.get("json/demo.json", null, function(data, textStatus) {
				if (textStatus == "success") {
		
					for (var n6 = 0; n6 < 8; n6++) {
						if (n6 <6) {
							_self.ul = document.createElement("ul");
							_self.mleft6.appendChild(_self.ul);
							for (var i6 = 0; i6 < 10; i6++) {
								_self.a = document.createElement("a");
								if (data["computer"]["computer" + (n6 + 1)]["p" + (i6)]) {
									_self.a.innerHTML = data["computer"]["computer" + (n6 + 1)]["p" + (i6)];
								}
								_self.ul.appendChild(_self.a);
							}
						} else if (n6==7) {
							_self.ul = document.createElement("ul");
							_self.mleft6.appendChild(_self.ul);
							for (var i6 =0; i6 <6; i6++) {
								_self.img = document.createElement("img");
								if (data["computer"]["computer" + (n6 )]["p" +(i6)]) {
									_self.img.src = "img/" + (data["computer"]["computer" + (n6)]["p" + (i6)]);
									_self.ul.appendChild(_self.img);
								}
							}
						}
					}
					//////
				}
			}, "json")
		}
	}
	var Addmenu6 = new Addmenu6();
	Addmenu6.addphone6();
	
	
//无人机
function Addmenu7() {
		this.mleft7 = document.getElementById("mleft7");
		var _self = this;
		this.addphone7 = function() {
			_self.ul = null;
			_self.a = null;
			_self.img = null;
			$.get("json/demo.json", null, function(data, textStatus) {
				if (textStatus == "success") {
					
					for (var n7 = 0; n7 < 6; n7++) {
						if (n7 <4) {
							_self.ul = document.createElement("ul");
							_self.mleft7.appendChild(_self.ul);
							for (var i7 = 0; i7 < 10; i7++) {
								_self.a = document.createElement("a");
								if (data["UAV"]["UAV" + (n7 + 1)]["p" + (i7)]) {
									_self.a.innerHTML = data["UAV"]["UAV" + (n7 + 1)]["p" + (i7)];
								}
								_self.ul.appendChild(_self.a);
								
							}
						} else if (n7==5) {
							_self.ul = document.createElement("ul");
							_self.mleft7.appendChild(_self.ul);
							for (var i7 =0; i7 <6; i7++) {
								_self.img = document.createElement("img");
								if (data["UAV"]["UAV" + (n7 )]["p" +(i7)]) {
									_self.img.src = "img/" + (data["UAV"]["UAV" + (n7)]["p" + (i7)]);
									_self.ul.appendChild(_self.img);
								}
							}
						}
					}
				}
			}, "json")
		}
	}
	var Addmenu7 = new Addmenu7();
	Addmenu7.addphone7();
	
//母婴玩具
function Addmenu8() {
		this.mleft8 = document.getElementById("mleft8");
		var _self = this;
		this.addphone8 = function() {
			_self.ul = null;
			_self.a = null;
			_self.img = null;
			$.get("json/demo.json", null, function(data, textStatus) {
				if (textStatus == "success") {
		
					for (var n8 = 0; n8 < 8; n8++) {
						if (n8 <5) {
							_self.ul = document.createElement("ul");
							_self.mleft8.appendChild(_self.ul);
							for (var i8 = 0; i8 < 14; i8++) {
								_self.a = document.createElement("a");
								if (data["Baby"]["Baby" + (n8 + 1)]["p" + (i8)]) {
									_self.a.innerHTML = data["Baby"]["Baby" + (n8 + 1)]["p" + (i8)];
								}
								_self.ul.appendChild(_self.a);
							}
						} else if (n8==6) {
							_self.ul = document.createElement("ul");
							_self.mleft8.appendChild(_self.ul);
							for (var i8 =0; i8 <6; i8++) {
								_self.img = document.createElement("img");
								if (data["Baby"]["Baby" + (n8)]["p" +(i8)]) {
									_self.img.src = "img/" + (data["Baby"]["Baby" + (n8)]["p" + (i8)]);
									_self.ul.appendChild(_self.img);
								}
							}
						}
					}
					//////
				}
			}, "json")
		}
	}
	var Addmenu8 = new Addmenu8();
	Addmenu8.addphone8();
	
$("#menuone dl dt").each(function() {
		$(this).mouseenter(function() {
//			$(this).find(".mleft").slideDown("normal");
		$(this).find(".mleft").css("display","block");
			//				}
		});
		$(this).mouseleave(function() {
			//$(this).find(".Phone3").hide("fast");	
//			$(this).find(".mleft").slideUp("normal");
		$(this).find(".mleft").css("display","none");
		})
	})



//热门商品
function Hot() {
	this.floorone = document.getElementById("floorone");
	var _self = this;
	this.hot1 = function() {
		_self.img = null;
		_self.span = null;
		$.get("json/demo.json", null, function(data, textStatus) {
					if (textStatus == "success") {
						//智能穿戴
						for (var i = 0; i < 7; i++) {
							_self.img = document.createElement("img");
							if (data["Hot"]["Hot1"]["h" + (i)]) {
								_self.img.src = "img/" + (data["Hot"]["Hot1"]["h" + (i)]);
							}
							_self.floorone.appendChild(_self.img);
						}
						
						
						
						
						for (var i = 0; i < 7; i++) {
							_self.img = document.createElement("img");
							if (data["Hot"]["Hot1"]["h" + (i)]) {
								_self.img.src = "img/" + (data["Hot"]["Hot1"]["h" + (i)]);
							}
							_self.floorone.appendChild(_self.img);
						}
					
				}
			}, "json")
		}
	}
	var hot1 = new Hot();
		hot1.hot1();














});












