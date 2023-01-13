			var i = 7;
			var t;
			function lunbo(){
				var obj=document.getElementById("lb");
				i++;
				if(i>11){
					i = 7;
					obj.src="img/DBJ7.jpg";
				}
				else{
					obj.src="img/DBJ"+i+".jpg";
				}
			}
			function start(){
				t=setInterval("lunbo()",1000);
				document.getElementById("btn").disabled=true;
			}
			function stop(){
				clearInterval(t);
				document.getElementById("btn").disabled=false;
			}