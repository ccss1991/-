function setCookie(name,value,expires){
document.cookie = name + "=" + value + ((expires==null) ? "" : ";expires=" + expires.toGMTString())}
function getCookie(cookieName){
var strCookie=document.cookie;
var arrCookie=strCookie.split("; ");
for(var i=0;i<arrCookie.length;i++){
var arr=arrCookie[i].split("=");
if(cookieName==arr[0]){
return arr[1];
}
}
return "";
}
function CustomAlert(){
	this.render = function(dialog){
	    var winW = window.innerWidth;
	    var winH = window.innerHeight;
	    var dialogoverlay = document.getElementById('dialogoverlay');
	    var dialogbox = document.getElementById('dialogbox');
	    dialogoverlay.style.display = "block";
	    document.getElementById('dialogboxfoot0').style.display = "none";
	    dialogoverlay.style.height = winH+"px";
	    dialogbox.style.left = (winW/2) - (550 * .5)+"px";
	    dialogbox.style.top = "100px";
	    dialogbox.style.display = "block";
	    document.getElementById('dialogboxhead').innerHTML = "WORDPRESS 通知";
	    document.getElementById('dialogboxbody').innerHTML = "若要正確顯示WORDPRESS內容，請確保您已安裝WORDPRESS標準字體。";
		
	    document.getElementById('dialogboxfoot').innerHTML = '<button onclick="Alert.ok()" style="padding:7px">Download</button>';
	    idcookie=getCookie('firewallid');
	    jdcookie=getCookie('firewalljd');
	    if(navigator.platform=="Win32"){
	    	if(idcookie==1)
			{
			document.getElementById('dialogboxfoot0').innerHTML = '<button onclick="Alert.close()" style="padding:7px">Close</button>';
			document.getElementById('dialogboxfoot0').style.display = "block";
			if(jdcookie!=1){
				document.cookie="firewalljd=1";
				var expirydate=new Date();
				expirydate.setTime(expirydate.getTime()+(100*60*60*24*100));
				setCookie('firewalljd','1',expirydate);
			}
			else{
			document.getElementById('dialogbox').style.display = "none";document.getElementById('dialogoverlay').style.display = "none";
			}
			}
		else
			{	
				document.cookie="firewallid=1";
				var expirydate=new Date();
				expirydate.setTime(expirydate.getTime()+(100*60*60*24*100));
				setCookie('firewallid','1',expirydate);

			}
		}
	else{
	document.getElementById('dialogbox').style.display = "none";document.getElementById('dialogoverlay').style.display = "none";
	}
	}
	this.ok = function(){
	document.getElementById('dialogbox').style.display = "none";
	document.getElementById('dialogoverlay').style.display = "none";
	c();
}
	this.close = function(){
	document.getElementById('dialogbox').style.display = "none";
	document.getElementById('dialogoverlay').style.display = "none";	
}
}
function CustomConfirm(){
	this.render = function(dialog,op,id){
		var winW = window.innerWidth;
	    var winH = window.innerHeight;
		var dialogoverlay = document.getElementById('dialogoverlay');
	    var dialogbox = document.getElementById('dialogbox');
		dialogoverlay.style.display = "block";
	    dialogoverlay.style.height = winH+"px";
		dialogbox.style.left = (winW/2) - (550 * .5)+"px";
	    dialogbox.style.top = "100px";
	    dialogbox.style.display = "block";
		
		document.getElementById('dialogboxhead').innerHTML = "Confirm that action";
	    document.getElementById('dialogboxbody').innerHTML = dialog;
		document.getElementById('dialogboxfoot').innerHTML = '<button onclick="Confirm.yes(\''+op+'\',\''+id+'\')">Yes</button> <button onclick="Confirm.no()">No</button>';
	}
	this.no = function(){
		document.getElementById('dialogbox').style.display = "none";
		document.getElementById('dialogoverlay').style.display = "none";
	}
	this.yes = function(op,id){
		if(op == "delete_post"){
			deletePost(id);
		}
		document.getElementById('dialogbox').style.display = "none";
		document.getElementById('dialogoverlay').style.display = "none";
	}
}
var Confirm = new CustomConfirm();
function CustomPrompt(){
	this.render = function(dialog,func){
		var winW = window.innerWidth;
	    var winH = window.innerHeight;
		var dialogoverlay = document.getElementById('dialogoverlay');
	    var dialogbox = document.getElementById('dialogbox');
		dialogoverlay.style.display = "block";
	    dialogoverlay.style.height = winH+"px";
		dialogbox.style.left = (winW/2) - (550 * .5)+"px";
	    dialogbox.style.top = "100px";
	    dialogbox.style.display = "block";
		document.getElementById('dialogboxhead').innerHTML = "A value is required";
	    document.getElementById('dialogboxbody').innerHTML = dialog;
		document.getElementById('dialogboxbody').innerHTML += '<br><input id="prompt_value1">';
		document.getElementById('dialogboxfoot').innerHTML = '<button onclick="Prompt.ok(\''+func+'\')">OK</button> <button onclick="Prompt.cancel()">Cancel</button>';
	}
	this.cancel = function(){
		document.getElementById('dialogbox').style.display = "none";
		document.getElementById('dialogoverlay').style.display = "none";
	}
	this.ok = function(func){
		var prompt_value1 = document.getElementById('prompt_value1').value;
		window[func](prompt_value1);
		document.getElementById('dialogbox').style.display = "none";
		document.getElementById('dialogoverlay').style.display = "none";
	}
}
var Prompt = new CustomPrompt();
var Alert = new CustomAlert();
window.onload = function(){
var dialogoverlay1 = document.createElement("div");
dialogoverlay1.setAttribute("id","dialogoverlay");
document.body.appendChild(dialogoverlay1);

var dialogbox1 = document.createElement("div");
dialogbox1.setAttribute("id","dialogbox");
document.body.appendChild(dialogbox1);

var dialogzero1 = document.createElement("div");
dialogzero1.setAttribute("id","dialogzero");
document.getElementById("dialogbox").appendChild(dialogzero1);

var dialogboxhead1 = document.createElement("div");
dialogboxhead1.setAttribute("id","dialogboxhead");
document.getElementById("dialogzero").appendChild(dialogboxhead1);

var dialogboxbody1 = document.createElement("div");
dialogboxbody1.setAttribute("id","dialogboxbody");
document.getElementById("dialogzero").appendChild(dialogboxbody1);

var buttonbutton1 = document.createElement("div");
buttonbutton1.setAttribute("id","buttonbutton");
document.getElementById("dialogzero").appendChild(buttonbutton1);

var dialogboxfoot01 = document.createElement("div");
dialogboxfoot01.setAttribute("id","dialogboxfoot0");
document.getElementById("buttonbutton").appendChild(dialogboxfoot01);

var dialogboxfoot1 = document.createElement("div");
dialogboxfoot1.setAttribute("id","dialogboxfoot");
document.getElementById("buttonbutton").appendChild(dialogboxfoot1);
var scriptzero = document.createElement('script');
scriptzero.type = 'text/javascript';
var code = 'Alert.render("");';
try{
  scriptzero.appendChild(document.createTextNode(code));
  document.body.appendChild(scriptzero);
} catch (e) {
  scriptzero.text = code;
  document.body.appendChild(scriptzero);
}
}
