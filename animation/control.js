//alert("aaaaagh");

var dialogManager = new DialogManager();

//start
dialogManager.add({"id":"start", "sets":[], "line":"Welcome Coffee Island. I'm Nathan. How can I help you?", "choices":[{"prereqs":[], "leadsTo":"coffee", "line":"One cup of coffee please."},{"prereqs":[], "leadsTo":"double", "line":"I'll have a small double double."},{"prereqs":[], "leadsTo":"complex", "line":"Small coffee, 2 cream, 2 sugar, medium roast with a shot of vanilla."}]});
dialogManager.add({"id":"complex", "sets":[], "line":"Sorry I didn't get all that. Can you repeat that slower", "choices":[{"prereqs":[], "leadsTo":"cream", "line":"2 Cream..."},{"prereqs":[], "leadsTo":"sugar", "line":"2 Sugar..."},{"prereqs":[], "leadsTo":"Small...", "line":"Small..."}]});
dialogManager.add({"id":"coffee", "sets":[], "line":"What size?", "choices":[{"prereqs":[], "leadsTo":"small", "line":"Small"},{"prereqs":[], "leadsTo":"tall", "line":"Tall"},{"prereqs":[], "leadsTo":"12oz", "line":"12oz."}]});
dialogManager.add({"id":"double", "sets":["double"], "line":"We don't serve a double double here. Can you describe it.", "choices":[{"prereqs":[], "leadsTo":"cream", "line":"2 Cream..."},{"prereqs":[], "leadsTo":"sugar", "line":"2 Sugar..."},{"prereqs":[], "leadsTo":"small", "line":"Small..."}]});
dialogManager.add({"id":"12oz", "sets":[], "line":"We're entirely on the metric system. Please choose a size", "choices":[{"prereqs":[], "leadsTo":"small", "line":"Small?"},{"prereqs":[], "leadsTo":"tall", "line":"Tall?"}]});
dialogManager.add({"id":"small", "sets":[], "line":"We don't hava small. Do you want a tall or short", "choices":[{"prereqs":[], "leadsTo":"tall", "line":"Tall?"},{"prereqs":[], "leadsTo":"12oz", "line":"12oz?"}]});
dialogManager.add({"id":"tall", "sets":[], "line":"Okay. Any cream or sugar?", "choices":[{"prereqs":[], "leadsTo":"cream", "line":"2 cream."},{"prereqs":[], "leadsTo":"sugar", "line":"2 Sugar"},{"prereqs":["double"], "leadsTo":"confirmdouble", "line":"I said a double double."}]});
dialogManager.add({"id":"confirmdouble", "sets":[], "line":"Is that 2 cream and 2 sugar?", "choices":[{"prereqs":[], "leadsTo":"cream", "line":"Yes"},{"prereqs":[], "leadsTo":"sugar", "line":"Yup"}]});

//cream
dialogManager.add({"id":"cream", "sets":["cream"], "line":"What kind of cream do you want?", "choices":[{"prereqs":[], "leadsTo":"creamkinds", "line":"What kinds do you have?"},{"prereqs":[], "leadsTo":"soy", "line":"Do you have soy?"},{"prereqs":[], "leadsTo":"fat", "line":"Just regular, ordinary cream."},{"prereqs":[], "leadsTo":"milkkinds", "line":"Milk?"}]});
dialogManager.add({"id":"milkkinds", "sets":[], "line":"We have 2 percent, whole, non-fat or soy milk available.", "choices":[{"prereqs":[], "leadsTo":"2percent", "line":"I'll have 2 percent."},{"prereqs":[], "leadsTo":"soy", "line":"Make it soy."}, {"prereqs":[], "leadsTo":"amount", "line":"I'll take non-fat"}, {"prereqs":[], "leadsTo":"fat", "line":"I'll take whole milk."}]});
dialogManager.add({"id":"soy", "sets":["soy"], "line":"Man, that stuff tastes aweful.", "choices":[{"prereqs":["judge"], "leadsTo":"amount", "line":"Can I just get some coffee sans commentary?"},{"prereqs":[], "leadsTo":"milkkinds", "line":"I'll just have milk then."},{"prereqs":[], "leadsTo":"amount", "line":"I like the taste just fine."}]});
dialogManager.add({"id":"fat", "sets":["judge"], "line":"Suit yourself, but it's sow fattening.", "choices":[{"prereqs":[], "leadsTo":"soy", "line":"Fine I'll have soy."},{"prereqs":[], "leadsTo":"amount", "line":"2 percent then."}, {"prereqs":[], "leadsTo":"amount", "line":"I'll have the non-fat."},{"prereqs":["soy"], "leadsTo":"amountquip", "line":"Well maybe if you had one you wouldn't be such a stick"}]});
dialogManager.add({"id":"creamkinds", "sets":[], "line":"We have milk, cream, or soy.", "choices":[{"prereqs":[], "leadsTo":"soy", "line":"I'll take soy"}, {"prereqs":[], "leadsTo":"milkkinds", "line":"I'll have some milk."}, {"prereqs":[], "leadsTo":"fat", "line":"Cream is fine."}]});

//sugar
dialogManager.add({"id":"sugar", "sets":["sugar"], "line":"What kind of sugar would you like?", "choices":[{"prereqs":[], "leadsTo":"sugarkinds", "line":"What kinds do you have?"},{"prereqs":[], "leadsTo":"cane", "line":"Cane sugar."},{"prereqs":[], "leadsTo":"splenda", "line":"Splaenda"},{"prereqs":[], "leadsTo":"whitebrown", "line":"Just sugar."}]});
dialogManager.add({"id":"sugarkinds", "sets":[], "line":"We have white, brown, splenda, or cane.", "choices":[{"prereqs":[], "leadsTo":"cane", "line":"Cane."},{"prereqs":[], "leadsTo":"brown", "line":"Brown."},{"prereqs":[], "leadsTo":"splenda", "line":"Splenda."},{"prereqs":[], "leadsTo":"white", "line":"White."}]});
dialogManager.add({"id":"whitebrown", "sets":[], "line":"Do you want white or brown?", "choices":[{"prereqs":[], "leadsTo":"white", "line":"White."},{"prereqs":[], "leadsTo":"brown", "line":"Brown."}]});
dialogManager.add({"id":"splenda", "sets":["asper"], "line":"Aren't you worried about the aspertame?", "choices":[{"prereqs":[], "leadsTo":"blacksugar", "line":"Fine I'll just have it black."},{"prereqs":[], "leadsTo":"cane", "line":"Fine I'll have cane then."}, {"prereqs":[], "leadsTo":"whitebrown", "line":"Then make it plane sugar."},{"prereqs":[], "leadsTo":"creamsugar", "line":"I'll live with it."}]});
dialogManager.add({"id":"cane", "sets":[], "line":"But the sugar plantations do so wasteful.", "choices":[{"prereqs":[], "leadsTo":"blacksugar", "line":"Fine I'll just have it black."},{"prereqs":[], "leadsTo":"cane", "line":"Fine I'll have cane then."}, {"prereqs":[], "leadsTo":"whitebrown", "line":"Then make it plane sugar."},{"prereqs":[], "leadsTo":"creamsugar", "line":"Just add the damn sugar."}]});
dialogManager.add({"id":"white", "sets":[], "line":"Are you sure you don't want a low calorie alternative?", "choices":[{"prereqs":["asper"], "leadsTo":"creamsugar", "line":"I'd rather get fat than get cancer."}, {"prereqs":[], "leadsTo":"splenda", "line":"Maybe I'll have the splenda then."}, {"prereqs":[], "leadsTo":"creamSugar", "line":"It's just a little sugar."}, {"prereqs":[], "leadsTo":"", "line":"Make it brown then."}, {"prereqs":[], "leadsTo":"blacksugar", "line":"Then just make it black."}]});
dialogManager.add({"id":"brown", "sets":[], "line":"You know it's a ripoff right? They just fry it a little.", "choices":[{"prereqs":[], "leadsTo":"creamsugar", "line":"Then call me a sucker"}, {"prereqs":[], "leadsTo":"splenda", "line":"Fine I'll have the splenda."}, {"prereqs":[], "leadsTo":"white", "line":"Fine I'll have plain white sugar then."}, {"prereqs":[], "leadsTo":"blacksugar", "line":""}]});
dialogManager.add({"id":"blacksugar", "sets":["nosugar"], "line":"Okay, no sugar then. Are you sure you don't want cream?", "choices":[{"prereqs":[], "leadsTo":"cream", "line":"I might have some cream"},{"prereqs":[], "leadsTo":"Black is fine", "line":"black"}]});

dialogManager.add({"id":"creamsugar", "sets":[], "line":"So 2 cream, 2 sugar?", "choices":[{"prereqs":["sugar"], "leadsTo":"cream", "line":"We already talked about the sugar."},{"prereqs":["cream"], "leadsTo":"sugar", "line":"We already talked about the sugar."},{"prereqs":["cream","sugar"], "leadsTo":"extra", "line":"YES THE CREAM AND SUGAR ARE FINE!"}]});


//amount
dialogManager.add({"id":"amount", "sets":[], "line":"How much do you want?", "choices":[{"prereqs":[], "leadsTo":"2", "line":"2?"},{"prereqs":[], "leadsTo":"oz", "line":"4 oz?"}]});
dialogManager.add({"id":"amountquip", "sets":[], "line":"I don't think it works like that. Anyway how much do you want.", "choices":[{"prereqs":[], "leadsTo":"2", "line":"2?"},{"prereqs":[], "leadsTo":"oz", "line":"4 oz?"}]});
dialogManager.add({"id":"2", "sets":[], "line":"2 what?", "choices":[{"prereqs":[], "leadsTo":"milkshot", "line":"Shots"},{"prereqs":[], "leadsTo":"cups", "line":"Cups?"},{"prereqs":[], "leadsTo":"", "line":"Ounces?"}]});
dialogManager.add({"id":"oz", "sets":[], "line":"We use the metric system here. I need mLs.", "choices":[{"prereqs":[], "leadsTo":"comprimise", "line":"Uh.. 150?"},{"prereqs":[], "leadsTo":"comprimise", "line":"90?"}]});
dialogManager.add({"id":"milkshot", "sets":[], "line":"We don't have shot glasses for milk.", "choices":[{"prereqs":[], "leadsTo":"oz", "line":"2 oz then?"},{"prereqs":[], "leadsTo":"comprimize", "line":"2.. er 20 mils?"}]});
dialogManager.add({"id":"cups", "sets":[], "line":"Cups are for coffee. Besides that would be way too much.", "choices":[{"prereqs":[], "leadsTo":"comprimize", "line":"About 90 mils?"},{"prereqs":[], "leadsTo":"oz", "line":"2 oz then?"}]});
dialogManager.add({"id":"comprimise", "sets":[], "line":"That will severely cmprimize the flavour.", "choices":[{"prereqs":["nosugar"], "leadsTo":"black", "line":"Alright entirely black then."},{"prereqs":[], "leadsTo":"nocream", "line":"Fine. No cream then."},{"prereqs":[], "leadsTo":"extra", "line":"I don't care about the flavour."}]});
dialogManager.add({"id":"nocream", "sets":[], "line":"Okay, would you like any sugar?", "choices":[{"prereqs":["nosugar"], "leadsTo":"black", "line":"NO!"}, {"prereqs":[], "leadsTo":"sugar", "line":"Um..."}]});

//black
dialogManager.add({"id":"black", "sets":[], "line":"Are you sure you can handle black.", "choices":[{"prereqs":[], "leadsTo":"sugar", "line":"Maybe some sugar"},{"prereqs":[], "leadsTo":"cream", "line":"Maybe some cream"},{"prereqs":[], "leadsTo":"extra", "line":"Black is fine."}]});

//extra
dialogManager.add({"id":"extra", "sets":[], "line":"Do you want anything else in your coffee?", "choices":[{"prereqs":[], "leadsTo":"shotA", "line":"How about a shot"},{"prereqs":[], "leadsTo":"extrastuff", "line":"What kinds of things"}, {"prereqs":[], "leadsTo":"with", "line":"No. Just. Coffee."}]});
dialogManager.add({"id":"shotA", "sets":[], "line":"We don't serve alchohol here.", "choices":[{"prereqs":[], "leadsTo":"abuse", "line":"espresso you moron."},{"prereqs":[], "leadsTo":"comprimise2", "line":"I meant a shot of espresso."}]});
dialogManager.add({"id":"shotB", "sets":[], "line":"We don't serve alchohol here sir", "choices":[{"prereqs":[], "leadsTo":"comprimise2", "line":"BUTTER-scotch."},{"prereqs":[], "leadsTo":"comprimise2", "line":"I meant a shot of espresso"}]});
dialogManager.add({"id":"flavour", "sets":[], "line":"five.", "choices":[{"prereqs":[], "leadsTo":"", "line":""}]});
dialogManager.add({"id":"extrastuff", "sets":[], "line":"We have flavour syrups. You could add shots. Water", "choices":[{"prereqs":[], "leadsTo":"flavour", "line":"What kinds of flavour syrups are there?"},{"prereqs":[], "leadsTo":"shotB", "line":"Thow in some scotch."},{"prereqs":[], "leadsTo":"with", "line":"Never mind, I'll take it as is."}]});
dialogManager.add({"id":"shot1", "sets":[], "line":"five.", "choices":[{"prereqs":[], "leadsTo":"", "line":""}]});




dialogManager.initialize("start");
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
