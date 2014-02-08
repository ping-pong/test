// this sets the background color of the master UIView (when there are no windows/tab groups on it)
//var win = Ti.UI.currentWindow;
 
Titanium.UI.backgroundImage='images/bck_green.png';

// create tab group
var cnt=0;

var questions=[];
questions.push('What are \"near\" and \"far\" pointers?');
questions.push('What do \"lvalue\" and \"rvalue\" mean?');
questions.push('what is a volatile keyword');

var answers=[];
answers.push('These days, they\'re pretty much obsolete; they\'re definitely system-specific. They had to do with 16-bit programming under MS-DOS and perhaps some early versions of Windows. If you really need to know, see a DOS- or Windows-specific programming reference. If you\'re using a machine which doesn\'t require (or permit) making the near/far pointer distinction, just delete the unnecessary "near" and "far" keywords (perhaps using the preprocessor: "#define far /* nothing */").');
answers.push('Simply speaking, an lvalue is an expression that could appear on the left-hand sign of an assignment; you can also think of it as denoting an object that has a location. (But see question 6.7 concerning arrays.) An rvalue is any expression that has a value (and that can therefore appear on the right-hand sign of an assignment).');
answers.push('C\'s volatile keyword is a qualifier that is applied to a variable when it is declared. It tells the compiler that the value of the variable may change at any time--without any action being taken by the code the compiler finds nearby.');
var win = Titanium.UI.createWindow({  
    title:'trial',
    barColor:"#333"
});


var scrollView = Ti.UI.createScrollView({
  top:0,
  left:0,
  contentWidth:320,
  contentHeight:510,
  height:480,
  width:320,
  verticalBounce: false
});

var text_display = Titanium.UI.createLabel({
	color:'#fff',
	text:'I am Window 1',
	font:{fontSize:16,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'300'
});

scrollView.add(text_display);

win.add(scrollView);


var bottomView = Ti.UI.createView({
  top: 400,
  left:0,
  width: 320,
  height: 50,
  backgroundImage:'images/bottom.png',
  borderRadius:6,
  opacity:1
});
var left_arrow = Titanium.UI.createButton({
	color:'#fff',
	backgroundImage:'images/left_arrow.png',
	backgroundDisabledImage: 'images/left_arrow_off.png',
	top:7,
    left:10,
	width:40,
	height:40,
    enabled:false
});
var right_arrow = Titanium.UI.createButton({
    backgroundImage:'images/right_arrow.png',
	backgroundDisabledImage: 'images/right_arrow_off.png',
	top:7,
    left:70,
	width:40,
	height:40,
    enabled:true
});
bottomView.add(left_arrow);
bottomView.add(right_arrow);


right_arrow.addEventListener('click',function(e) {

text_display.text=questions[cnt]+"\n \n ANSWER:\n "+answers[cnt];
cnt++;
left_arrow.enabled=true;
if(cnt>=questions.length)
{
        right_arrow.enabled=false;
        cnt--;
}

});

left_arrow.addEventListener('click',function(e) {
cnt--;
text_display.text=questions[cnt]+"\n \n ANSWER:\n "+answers[cnt];

right_arrow.enabled=true;
if(cnt<=0)
{
       left_arrow.enabled=false;
}

});
var topView = Ti.UI.createView({
  top: 0,
  left:0,
  width: 320,
  height: 50,
  backgroundImage:'images/bottom.png',
  borderRadius:6,
  opacity:1
});

win.add(bottomView);
win.add(topView);

win.open();