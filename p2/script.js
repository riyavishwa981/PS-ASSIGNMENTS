


function SecondQues()  //1st
{
  
var q=document.getElementById('q1');
 q.innerHTML= 'What is your good name?';
  q.setAttribute('style',"color:white;");
 var b= document.getElementById('button-div');
 while(b.firstChild)
 {
   b.removeChild(b.firstChild);
 }
var f= document.createElement('form');
f.setAttribute('method',"get");
//f.setAttribute('action',"script.js");
  f.innerHTML= "<input type= 'text' id = 'uname' required> <button class='btn btn-primary' type='submit' onclick='newPanel()' >Submit</button>";
 b.appendChild(f);
}

function NormalMsg()  //2nd
{
  var msg= document.getElementById('q1');
  msg.innerHTML= 'Ok..No problem..come again next time but be prepared ;) !';
  var brr= document.getElementById('button-div');
 while(brr.firstChild)
 {
   brr.removeChild(brr.firstChild);
 }
var b1= document.createElement('button');
b1.setAttribute('class',"btn btn-primary");
b1.innerHTML= "Back";
b1.setAttribute('onclick',"location.reload()");
brr.appendChild(b1);

}

function newPanel()  //3rd
{
  var aud = new Audio('E:/javascript/Project3/webAud.m4a');
  aud.play();
  aud.loop = true;
  var nameee= document.getElementById('uname').value;
  var main= document.getElementById('SabseMain');

 var x= document.getElementById('flex-contain-1');
 while(x.firstChild)
 {
   x.removeChild(x.firstChild);
 }
x.setAttribute('style',"border-bottom-left-radius: 0px; border-bottom-right-radius: 0px;")
 var lab1= document.createElement('div');
 lab1.setAttribute('id',"bot");
 lab1.innerHTML= "<h3 style='color: white; background-color: red; '> Mr Bot </h3> <h3 style='color: white; background-color: red; '> Score : <span id='botscore' style='color:white;'>0</span>/10 </h3> ";

 var images= document.createElement('div');
 images.setAttribute('id',"Imgs");
 images.setAttribute('style',"display:flex ; justify-content: space-around");

 var newE1 = document.createElement('img');
 newE1.setAttribute('id',"rock");
 newE1.setAttribute('src',"stone1.png");
 newE1.setAttribute('width',"24%");
 newE1.setAttribute('height',"80%");

 var newE2 = document.createElement('img');
 newE2.setAttribute('id',"paper");
 newE2.setAttribute('src',"paper.png");
 newE2.setAttribute('width',"24%");
 newE2.setAttribute('height',"80%");

 var newE3 = document.createElement('img');
 newE3.setAttribute('id',"scissor");
 newE3.setAttribute('src',"scissor.png");
 newE3.setAttribute('width',"24%");
 newE3.setAttribute('height',"80%");

 x.appendChild(lab1);
 images.appendChild(newE1);
 images.appendChild(newE2);
 images.appendChild(newE3);
 x.appendChild(images);
 
  var y= document.createElement('div');
  y.setAttribute('class',"flex-box-container-2");
  y.setAttribute('id',"flex-contain-2");

  
  var g1= document.createElement('img');
  g1.setAttribute('src',"cheer.gif");
  g1.setAttribute('width',"24%");
  g1.setAttribute('height',"50%");

  var g2= document.createElement('img');
  g2.setAttribute('src',"cheer.gif");
  g2.setAttribute('width',"24%");
  g2.setAttribute('height',"50%");
 
  var d= document.createElement('div');
  var h= document.createElement('h2');
  h.innerHTML="Game starts on the count of 3";
  h.setAttribute('id',"ti");
  h.setAttribute('style',"padding-top:63px;color:white;");
  d.appendChild(h);
  
 
  y.appendChild(g1);
  y.appendChild(d);
  y.appendChild(g2);

 
  var z= document.createElement('div');
  z.setAttribute('class',"flex-box-container-3");
  z.setAttribute('id',"flex-contain-3");

  ///
  var lab2= document.createElement('div');
 lab2.setAttribute('id',"user");
 lab2.innerHTML= "<h3 style='color: white; background-color: blue; '>"+nameee+" </h3> <h3 style='color: white; background-color: blue; '> Score : <span id='yourscore' style='color:white;'>0</span>/10 </h3> ";
 
 var images1= document.createElement('div');
 images1.setAttribute('id',"Imgs1");
 images1.setAttribute('style',"display:flex ; justify-content: space-around");

 var newE11 = document.createElement('img');
 newE11.setAttribute('id',"rock1");
 newE11.setAttribute('src',"stone1.png");
 newE11.setAttribute('width',"24%");
 newE11.setAttribute('height',"80%");
 

 var newE22 = document.createElement('img');
 newE22.setAttribute('id',"paper1");
 newE22.setAttribute('src',"paper.png");
 newE22.setAttribute('width',"24%");
 newE22.setAttribute('height',"80%");
 

 var newE33 = document.createElement('img');
 newE33.setAttribute('id',"scissor1");
 newE33.setAttribute('src',"scissor.png");
 newE33.setAttribute('width',"24%");
 newE33.setAttribute('height',"80%");

 z.appendChild(lab2);
 images1.appendChild(newE11);
 images1.appendChild(newE22);
 images1.appendChild(newE33);
 z.appendChild(images1);
 

 main.appendChild(y);
 main.appendChild(z);
  setTimeout(late,1500);
}

function late()
{
  var timer=3;
  var display= document.getElementById('ti');
  console.log(display);
  startTimer(timer,display);
}
var sum1=0,sum2=0;

function startTimer(timer,display)
{
  display.innerHTML= "Game starts on the count of "+timer;
  display.setAttribute('style',"padding-top:63px; color:white;");
  if(timer==0)
  {
    var u= document.getElementById('flex-contain-2');
    while(u.firstChild)
    {
      u.removeChild(u.firstChild);
    }
    kuchbhi();
   return;
  }
  else{
  
    timer= timer-1;
    console.log(timer);
    setTimeout(startTimer,1000,timer,display);
  }
}

function kuchbhi()
{
  var u= document.getElementById('flex-contain-2');
  
    var dis= document.createElement('h2');
     dis.innerHTML= "Choose one !";
     dis.setAttribute('style',"text-align:center; color:white;")
     dis.setAttribute('id',"uju");
     var i1= document.getElementById('rock1');
     var i2= document.getElementById('paper1');
     var i3= document.getElementById('scissor1');
     console.log(i1 +" "+i2+" "+i3);
     i1.setAttribute('onclick',"rpsGame(this)");
     i2.setAttribute('onclick',"rpsGame(this)");
     i3.setAttribute('onclick',"rpsGame(this)");
     u.appendChild(dis);
    
}
//4th func
function rpsGame(yourChoice)
{
  console.log(yourChoice);
  var humanChoice, botChoice;
  humanChoice= yourChoice.id;
  botChoice= numToChoice(randTorpsInt());
  console.log(botChoice);
  var result= decideWinner(humanChoice,botChoice);
  finalMessage(result);
  rpsFrontEnd(humanChoice,botChoice,result);
}

function randTorpsInt()
{
  return Math.floor(Math.random()*3);
}

function numToChoice(number)
{
  var a=['rock','paper','scissor']
  return a[number];
}

function decideWinner(yourChoice,computerChoice)
{
 var rpsDatabase= {
   'rock1': {'scissor':1, 'rock':0.5, 'paper':0},
   'paper1': {'rock':1, 'paper':0.5, 'scissor':0},
   'scissor1': {'paper':1, 'scissor':0.5, 'rock':0}
 };

 var rpsDatabase1= {
  'rock': {'scissor1':1, 'rock1':0.5, 'paper1':0},
  'paper': {'rock1':1, 'paper1':0.5, 'scissor1':0},
  'scissor': {'paper1':1, 'scissor1':0.5, 'rock1':0}
};
 var yourScore =rpsDatabase[yourChoice][computerChoice];
 var botScore = rpsDatabase1[computerChoice][yourChoice];

 return [yourScore,botScore];
}

var arr=['red','green','yellow'];
 function rpsFrontEnd(humanChoice,botChoice,result)
 {
   var c= document.getElementById('Imgs');
   while(c.firstChild)
   {
     c.removeChild(c.firstChild);
   }
   var r= document.createElement('img');
   r.setAttribute('src',"stone1.png");
   r.setAttribute('width',"24%");
   r.setAttribute('height',"80%");
   var p= document.createElement('img');
   p.setAttribute('src',"paper.png");
   p.setAttribute('width',"24%");
   p.setAttribute('height',"80%");
   var s= document.createElement('img');
   s.setAttribute('src',"scissor.png");
   s.setAttribute('width',"24%");
   s.setAttribute('height',"80%");
   if(result[0]==0 && result[1]==1)
   {
   if(botChoice=="rock")
   {
     r.setAttribute('style',"box-shadow:0px 10px 50px rgb(98, 168, 50, 1);");
     c.appendChild(r);
   }
   else if(botChoice=="paper")
   {
    p.setAttribute('style',"box-shadow:0px 10px 50px rgb(98, 168, 50, 1);");
     c.appendChild(p);
   }
   else if(botChoice=="scissor")
   {
    s.setAttribute('style',"box-shadow:0px 10px 50px rgb(98, 168, 50, 1);");
     c.appendChild(s);
   }
  }
  else if(result[0]==1 && result[1]==0)
  {
    if(botChoice=="rock")
   {
     r.setAttribute('style',"box-shadow:0px 10px 50px rgb(235, 37, 19, 1);");
     c.appendChild(r);
   }
   else if(botChoice=="paper")
   {
    p.setAttribute('style',"box-shadow:0px 10px 50px rgb(235, 37, 19, 1);");
     c.appendChild(p);
   }
   else if(botChoice=="scissor")
   {
    s.setAttribute('style',"box-shadow:0px 10px 50px rgb(235, 37, 19, 1);");
     c.appendChild(s);
   }
  }
  else
  {
    if(botChoice=="rock")
   {
     r.setAttribute('style',"box-shadow:0px 10px 50px rgb(235, 224, 19, 1);");
     c.appendChild(r);
   }
   else if(botChoice=="paper")
   {
    p.setAttribute('style',"box-shadow:0px 10px 50px rgb(235, 224, 19, 1);");
     c.appendChild(p);
   }
   else if(botChoice=="scissor")
   {
    s.setAttribute('style',"box-shadow:0px 10px 50px rgb(235, 224, 19, 1);");
     c.appendChild(s);
   }
  }
   var c1= document.getElementById('Imgs1');
   while(c1.firstChild)
   {
     c1.removeChild(c1.firstChild);
   }
   var r1= document.createElement('img');
   r1.setAttribute('src',"stone1.png");
   r1.setAttribute('width',"24%");
   r1.setAttribute('height',"80%");
   var p1= document.createElement('img');
   p1.setAttribute('src',"paper.png");
   p1.setAttribute('width',"24%");
   p1.setAttribute('height',"80%");
   var s1= document.createElement('img');
   s1.setAttribute('src',"scissor.png");
   s1.setAttribute('width',"24%");
   s1.setAttribute('height',"80%");
   if(result[0]==1 && result[1]==0)
   {
   if(humanChoice=="rock1")
   {
     r1.setAttribute('style',"box-shadow:0px 10px 50px rgb(98, 168, 50, 1);");
     c1.appendChild(r1);
   }
   else if(humanChoice=="paper1")
   {
    p1.setAttribute('style',"box-shadow:0px 10px 50px rgb(98, 168, 50, 1);");
     c1.appendChild(p1);
   }
   else if(humanChoice=="scissor1")
   {
    s1.setAttribute('style',"box-shadow:0px 10px 50px rgb(98, 168, 50, 1);");
     c1.appendChild(s1);
   }
  }
  else if(result[0]==0 && result[1]==1)
  {
    if(humanChoice=="rock1")
   {
     r1.setAttribute('style',"box-shadow:0px 10px 50px rgb(235, 37, 19, 1);");
     c1.appendChild(r1);
   }
   else if(humanChoice=="paper1")
   {
    p1.setAttribute('style',"box-shadow:0px 10px 50px rgb(235, 37, 19, 1);");
     c1.appendChild(p1);
   }
   else if(humanChoice=="scissor1")
   {
    s1.setAttribute('style',"box-shadow:0px 10px 50px rgb(235, 37, 19, 1);");
     c1.appendChild(s1);
   }
  }
  else
  {
    if(humanChoice=="rock1")
    {
      r1.setAttribute('style',"box-shadow:0px 10px 50px rgb(235, 224, 19, 1);");
      c1.appendChild(r1);
    }
    else if(humanChoice=="paper1")
    {
     p1.setAttribute('style',"box-shadow:0px 10px 50px rgb(235, 224, 19, 1);");
      c1.appendChild(p1);
    }
    else if(humanChoice=="scissor1")
    {
     s1.setAttribute('style',"box-shadow:0px 10px 50px rgb(235, 224, 19, 1);");
      c1.appendChild(s1);
    }
  }

  
}

function finalMessage(result)
{

  var main= document.getElementById('SabseMain');
  var flex1 = document.getElementById('flex-contain-1');
  var flex2 = document.getElementById('flex-contain-2');
  var flex3 = document.getElementById('flex-contain-3');
  var ys= document.getElementById('yourscore');
  var bs= document.getElementById('botscore');
  var msgg= document.getElementById('uju');
  console.log(result);
  var gif1= document.createElement('img');
  gif1.setAttribute('src',"gif1.gif");
  gif1.setAttribute('id',"gif1");
  var gif2= document.createElement('img');
  gif2.setAttribute('src',"gif2.gif");
  gif2.setAttribute('id',"gif2");
  var gif3= document.createElement('img');
  gif3.setAttribute('src',"gif3.gif");
  gif3.setAttribute('id',"gif3");
  var gif4= document.createElement('img');
  gif4.setAttribute('src',"gif4.gif");
  gif4.setAttribute('id',"gif4");
  var imagesWin = [gif1,gif2,gif3,gif4];

  var fig1= document.createElement('img');
  fig1.setAttribute('src',"fig1.gif");
  fig1.setAttribute('id',"fig1");
  var fig2= document.createElement('img');
  fig2.setAttribute('src',"fig2.gif");
  fig2.setAttribute('id',"fig2");
  var fig3= document.createElement('img');
  fig3.setAttribute('src',"fig3.gif");
  fig3.setAttribute('id',"fig3");
  var fig4= document.createElement('img');
  fig4.setAttribute('src',"fig4.gif");
  fig4.setAttribute('id',"fig4");
  var imagesLoss = [fig1,fig2,fig3,fig4];
  var ran = Math.floor(Math.random()* 4);

  while(flex2.firstChild)
  {
    flex2.removeChild(flex2.firstChild);
  }
 if(result[0]==1 && result[1]==0)
 {

     sum1=sum1+1;
     ys.innerHTML= sum1;
     msgg.innerHTML="You got a point ;) !";
     msgg.setAttribute('style',"text-align:center; color:green;");
     if(sum1==10)
     {
       setTimeout(() =>{ while(flex1.firstChild)
        {
          flex1.removeChild(flex1.firstChild);
        }
        main.removeChild(flex2);
        main.removeChild(flex3);
        var win= document.createElement('h2');
        win.innerHTML="Hurray you won the challenge !!";
        win.setAttribute('style',"color:white; display:flex;justify-content:space-around;");
         
        flex1.appendChild(win);
        flex1.appendChild(imagesWin[ran]);
        setTimeout(function(){
          location.reload()
        },5000);
      
     },1000);
    }
     else
     {
      setTimeout(appendimg,2000);
      setTimeout(kuchbhi,2500);
     }
 }
 else if(result[0]==0 && result[1]==1)
 {
    sum2=sum2+1;
    bs.innerHTML= sum2;
    msgg.innerHTML="Oops :(..try again !";
    msgg.setAttribute('style',"color:red;display:flex; justify-content:space-around;");
    if(sum2==10)
    {
      setTimeout(() =>{ while(flex1.firstChild)
        {
          flex1.removeChild(flex1.firstChild);
        }
        main.removeChild(flex2);
        main.removeChild(flex3);
        var loss= document.createElement('h2');
        loss.innerHTML="Sorry friend try again !!";
        loss.setAttribute('style',"color:white; text-align:center; color:red;");
         
        
         flex1.appendChild(loss);
         flex1.appendChild(imagesLoss[ran]);
         setTimeout(function(){
           location.reload()
         },5000);
    },1000);
  }
    else
    {
      setTimeout(appendimg,2000);
      setTimeout(kuchbhi,2500);
    }
 }
 else
 {
   msgg.innerHTML=" It's a tie !";
   msgg.setAttribute('style',"text-align:center; color:yellow;");
     setTimeout(appendimg,2000);
     setTimeout(kuchbhi,2500);
   
 }
  
 flex2.appendChild(msgg);
}

function appendimg()
{
  var m= document.getElementById('uju');
  m.remove();
  var p= document.getElementById('Imgs');
  var q= document.getElementById('Imgs1');

  while(p.firstChild)
  {
    p.removeChild(p.firstChild);
  }
  while(q.firstChild)
  {
    q.removeChild(q.firstChild);
  }
  p.setAttribute('style',"display:flex ; justify-content: space-around");

  var newE1 = document.createElement('img');
  newE1.setAttribute('id',"rock");
  newE1.setAttribute('src',"stone1.png");
  newE1.setAttribute('width',"24%");
  newE1.setAttribute('height',"80%");
 
  var newE2 = document.createElement('img');
  newE2.setAttribute('id',"paper");
  newE2.setAttribute('src',"paper.png");
  newE2.setAttribute('width',"24%");
  newE2.setAttribute('height',"80%");
 
  var newE3 = document.createElement('img');
  newE3.setAttribute('id',"scissor");
  newE3.setAttribute('src',"scissor.png");
  newE3.setAttribute('width',"24%");
  newE3.setAttribute('height',"80%");
  
  q.setAttribute('style',"display:flex ; justify-content: space-around");

 var newE11 = document.createElement('img');
 newE11.setAttribute('id',"rock1");
 newE11.setAttribute('src',"stone1.png");
 newE11.setAttribute('width',"24%");
 newE11.setAttribute('height',"80%");
 

 var newE22 = document.createElement('img');
 newE22.setAttribute('id',"paper1");
 newE22.setAttribute('src',"paper.png");
 newE22.setAttribute('width',"24%");
 newE22.setAttribute('height',"80%");
 

 var newE33 = document.createElement('img');
 newE33.setAttribute('id',"scissor1");
 newE33.setAttribute('src',"scissor.png");
 newE33.setAttribute('width',"24%");
 newE33.setAttribute('height',"80%");

 p.appendChild(newE1);
 p.appendChild(newE2);
 p.appendChild(newE3);

 q.appendChild(newE11);
 q.appendChild(newE22);
 q.appendChild(newE33);
}
