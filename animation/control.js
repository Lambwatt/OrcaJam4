//alert("aaaaagh");

var dialogManager = new DialogManager();

dialogManager.add({"id":"1", "sets":[], "line":"one.", "choices":[{"prereqs":[], "leadsTo":"2", "line":"two?"},{"prereqs":[], "leadsTo":"3", "line":"three?"},{"prereqs":[], "leadsTo":"4", "line":"four?"}]});
dialogManager.add({"id":"2", "sets":[], "line":"two.", "choices":[{"prereqs":[], "leadsTo":"1", "line":"one?"},{"prereqs":[], "leadsTo":"3", "line":"three?"},{"prereqs":[], "leadsTo":"4", "line":"four?"}]});
dialogManager.add({"id":"3", "sets":["a"], "line":"three.", "choices":[{"prereqs":[], "leadsTo":"1", "line":"one?"},{"prereqs":[], "leadsTo":"2", "line":"two?"},{"prereqs":[], "leadsTo":"4", "line":"four?"}]});
dialogManager.add({"id":"4", "sets":[], "line":"four.", "choices":[{"prereqs":[], "leadsTo":"2", "line":"two?"},{"prereqs":[], "leadsTo":"3", "line":"three?"},{"prereqs":["a"], "leadsTo":"5", "line":"five?"}]});
dialogManager.add({"id":"5", "sets":[], "line":"five.", "choices":[]});

dialogManager.initialize(1);
/*alert("about to run choose");
dialogManager.choose();
alert("chose the thing");
*/
window.requestAnimFrame = (function(callback) {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
        function(callback) {
          window.setTimeout(callback, 1000 / 60);
        };
      })();
var img = document.getElementById("smiley");

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
context.font="18px Comic Sans MS";


var sheet = new SpriteSheetAnimationSet();
sheet.addFrameStrip("smile", 0, 0, 15, 15, 15, 0, 4);
//alert(sheet.frameSetCount);
sheet.addAnimation("smile", "smile", [0,1,2,3,2,1,0]);

var instance = sheet.getAnimationInstance("smile", 10, true);
var clockTicks = 0;

setInterval(function() {
    //var startTime = //(new Date()).getTime();
    animate(canvas, context, clockTicks);
		clockTicks++;
		//console.log(clockTicks);
}, 30);

function animate(canvas, context, startTime){
	context.clearRect(0 , 0 , canvas.width, canvas.height); 
	instance.drawCurrentFrame(context, startTime, img, 0, 0, 16, 16);
	dialogManager.printQuestion(context, 20, 20);
	dialogManager.printChoices(context, 0, 40, 20);		
}

window.addEventListener("keydown", onKeyDown, false);

function onKeyDown(e){
	switch(e.keyCode){
		case 13:
			dialogManager.choose();
			break;
		case 83:
			dialogManager.selectUp();
			break;
		case 87:
			dialogManager.selectDown();
			break;
		default:
			break;
	} 
 }
