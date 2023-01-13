window.onload=function()
{
	var video=document.getElementById("myvideo");
	var play=document.getElementById("play");
	var progress=document.getElementById("progress");
	var bar=document.getElementById("bar");
	var control=document.getElementById("control");
	var sound=document.getElementById("sound");
	var Volume=document.getElementById("volume");
	var volume_bar=document.getElementById("volume_bar");
	var volume_control=document.getElementById("volume_control");
	var full=document.getElementById("full");
	
	video.ontimeupdate=function()
	{
		var curTime=video.currentTime;
		var countTime=video.duration;
		var scale=curTime/countTime;
		bar.style.width=progress.offsetWidth*scale+"px";<!--offsetWidth偏移宽度-->
		control.style.left=progress.offsetWidth*scale+"px";
	}

	control.onmousedown=function(e)
{
		video.pause();
		var curTime;
		
	document.onmousemove=function(e)
	{
			
		var lef=e.clientX-box.offsetLeft-progress.offsetLeft;
		if(lef<=0)
				lef=0;
		else
			if(lef>=progress.offsetWidth){
				lef=progress.offsetWidth;
			}
			bar.style.width=lef+"px";
			control.style.left=lef+"px";
			var scales=lef/progress.offsetWidth;
			curTime=video.duration*scales;
	}	
		
	document.onmouseup=function(e)<!--鼠标弹起-->
	{		
			video.currentTime=curTime;
			video.play();
			play.className="pause";	
		document.onmousedown=function(e){
			e.preventDefault();
		}
		document.onmouseup=function(e){
			e.preventDefault();
		}
		document.onmousemove=function(e){
			e.preventDefault();
		}
	}
	
}

Volume.onmousedown=function(e)
{
		var curVoice;
		
	document.onmousemove=function(e)
	{
			
		var lef=e.clientX-box.offsetLeft-progress.offsetLeft-sound.offsetLeft;
		if(lef<=0)
				lef=0;
		else
			if(lef>=Volume.offsetWidth){
				lef=Volume.offsetWidth;
			}
			volume_bar.style.width=lef+"px";
			volume_control.style.left=lef+"px";
			var scales=lef/Volume.offsetWidth;
			curVoice=scales;
	}	
		
	document.onmouseup=function(e)<!--鼠标弹起-->
	{		
		//console.log(curVoice);
			video.volume=curVoice;	
		document.onmousedown=function(e){
			e.preventDefault();
		}
		document.onmouseup=function(e){
			e.preventDefault();
		}
		document.onmousemove=function(e){
			e.preventDefault();
		}
	}
	
}
	
	play.onclick=function()
	{
		if(video.paused)
		{
			video.play();
			play.className="pause";
		}
		else
		{
			video.pause();
			play.className="play";
		}
	}
	
	sound.onclick=function()
	{
		if(video.muted)
		{
			video.muted=false;
			sound.className="soundoff";
		}
		else
		{
			video.muted=true;
			sound.className="soundon";
		}
	}
	
	full.onclick=function(){
		video.webkitRequestFullScreen();
	}
	
}