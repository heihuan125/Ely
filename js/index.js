	var oBtn = document.getElementById('btn');
	var aLi = document.getElementsByTagName('li');
	var oTooltips = document.getElementById('tooltips');
	var oConfirm = document.getElementById('confirm');
	var oContent = document.getElementById('content');
	var oImg = document.getElementById('img');
	var nowIndex = 0;//定义滚动指定的li
	oBtn.onclick = function(){
		var number = getRandom(10,28);//获取中奖随机号码
		//抽奖背景切换
	var	scrollLi = setInterval(function(){
     colorChange(aLi,nowIndex);
     	 nowIndex++;
     	 //中奖or为中奖内容设置
if(nowIndex==number)
{
	clearInterval(scrollLi);
	oTooltips.style.display = "block";
	
	if(aLi[nowIndex%9].innerHTML=="Ely"){
	oContent.innerHTML ='恭喜~ 娜娜 获得了' + aLi[nowIndex%9].innerHTML + '（四月后送达）';
	oImg.src="img/love.png"
		nowIndex = 0;
	}
                else if(aLi[nowIndex%9].innerHTML=="500万分手费"){
	oContent.innerHTML ='Ely是不会让这件事情发生的';
	oImg.src="img/cry.jpg"
		nowIndex = 0;
	}
                else{
	oContent.innerHTML ='很遗憾娜娜~这个奖品' + aLi[nowIndex%9].innerHTML + '需要先获取Ely才能领取~';
	oImg.src="img/fool.jpg"
		nowIndex = 0;
	}
}

	},100)
		
	}
	
//改变颜色
function colorChange(aLi,nowIndex){
	 //把所有li背景设置为白色
      for (var i= 0;i<aLi.length;i++) {
      	aLi[i].style.backgroundColor = "white"
      }
      //背景
		aLi[(nowIndex+1)%9].style.backgroundColor = "red";
}
	
//点击确认后消失
oConfirm.onclick = function(){
	oTooltips.style.display = "none";
}
	//获取随机获奖数字
	function getRandom(min,max){
		return Math.floor(Math.random()*(max-min+1) + min)
	}
	
