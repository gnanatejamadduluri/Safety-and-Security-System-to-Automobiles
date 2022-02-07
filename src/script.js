var ar=null; var ar1=null; var ar2=null; var ar3=null; var ar4=null; var radar=null; var sp1=null; var sp2=null;var nl=null;var vb=null;var N=null; var Nresponse=null;var AN=null;var L=null;

//LOCATION INPUT BOX
function location1() {
var location1=document.getElementById("location");
L= location1.value;
  return L;
}

//EMERGENCY VEHICLES CANVAS FEED
var dispE=document.getElementById("EMM");
  dispE.style.backgroundColor="white"
 var dispE1=dispE.getContext("2d");
  dispE1.font="14px TimesNewRoman";
  dispE1.fillStyle="red"; 
//EMERGENCY VEHICLES CANVAS FEED

//RADAR SYSTEM CANVAS START
dispR=document.getElementById("radarDisp");
  dispR.style.backgroundColor="white"
 var dispR1=dispR.getContext("2d");
  dispR1.font="14px TimesNewRoman";
  dispR1.fillStyle="black"; 
////RADAR SYSTEM CANVAS END

//TEST CASES CANVAS START
var dispTS=document.getElementById("display");
  dispTS.style.backgroundColor="white"
 var dispTS1=dispTS.getContext("2d");
  dispTS1.font="14px TimesNewRoman";
  dispTS1.fillStyle="black";
//TEST CASES CANVAS END

//CONTROL ROOM CANVAS START
var dispCR=document.getElementById("CR");
  dispCR.style.backgroundColor="white"
 var dispCR1=dispCR.getContext("2d");
  dispCR1.font="14px TimesNewRoman";
  dispCR1.fillStyle="black";
//CONTROL ROOM CANVAS END

//VEHICLE DISPLAY BOARD CANVAS START
var dispS=document.getElementById("V2V");
  dispS.style.backgroundColor="white"
 var dispS1=dispS.getContext("2d");
  dispS1.font="14px TimesNewRoman";
  dispS1.fillStyle="black";
//VEHICLE DISPLAY BOARD CANVAS END

//SECONDARY NOTIFICATION CANVAS START
  var dispSN=document.getElementById("SN");
  dispSN.style.backgroundColor="white"
 var dispSN1=dispSN.getContext("2d");
  dispSN1.font="14px TimesNewRoman";
  dispSN1.fillStyle="black";
//SECONDARY NOTIFICATION CANVAS END

//NOTIFICATION CANVAS START
 var dispN=document.getElementById("NR");
  dispN.style.backgroundColor="white"
 var dispN1=dispN.getContext("2d");
  dispN1.font="14px TimesNewRoman";
  dispN1.fillStyle="black";
 //NOTIFICATION CANVAS END

//RADAR SYSTEM
function RadarSystem() {
  var radarx=document.getElementById("radar")
  var radar0=document.getElementById("ar");
  var radar1=document.getElementById("ar1");
  var radar2=document.getElementById("ar2");
  var radar3=document.getElementById("ar3");
  var radar4=document.getElementById("ar4");
  radar=radarx.value;
  ar=radar0.value;
  ar1=radar1.value;
  ar2=radar2.value;
  ar3=radar3.value;
  ar4=radar4.value;
 var dispR=document.getElementById("radarDisp");
  dispR.style.backgroundColor="white"
 var dispR1=dispR.getContext("2d");
  dispR1.font="14px TimesNewRoman";
  dispR1.fillStyle="black"; 
  if (radar>0){
    dispR1.clearRect(0,0,dispR.width,dispR.height);
    dispR1.fillText(ar,10,25);
    return ar;
  }
  else
  {
    dispR1.clearRect(0,0,dispR.width,dispR.height);
    dispR1.fillText(ar1,10,30);
    dispR1.fillText(ar2,10,60);
    dispR1.fillText(ar3,10,90);
    dispR1.fillText(ar4,10,120);
    
   return ar1,ar2,ar3,ar4;
  }

}

//VEHICLE TO VEHICLE COMMUNICATION, NUMBER OF LANES AND VIBRATION SENSOR 
function V2V() {
  var speed1=document.getElementById("sp1");
  var speed2=document.getElementById("sp2");
var lanes=document.getElementById("L");
var vib=document.getElementById("VIB");
  sp1=speed1.value;
  sp2=speed2.value;
  nl=lanes.value;
  vb=vib.value;
  var dispS=document.getElementById("V2V");
  dispS.style.backgroundColor="white"
 var dispS1=dispS.getContext("2d");
  dispS1.font="14px TimesNewRoman";
  dispS1.fillStyle="black";
 
  if (sp1==0){
    dispS1.clearRect(0,0,dispS.width,dispS.height);
    dispS1.fillText("The vehicle is not moving",10,30);
    dispS1.fillText("number of lanes= " +nl,10,60); // NUMBER OF LANES
    dispS1.fillText("vibration sensor value= " +vb,10,90);//VIBRATION SENSOR
  }
  else if (sp1>0){
       dispS1.clearRect(0,0,dispS.width,dispS.height);
    dispS1.fillText(sp1,10,30);
    dispS1.fillText(sp2,10,60);
    dispS1.fillText("number of lanes= " +nl,10,90); //NUMBER OF LANES
    dispS1.fillText("vibration sensor value= " +vb,10,120);//VIBRATION SENSOR
    return sp1,sp2,nl,vb;
    }
    if(vb=="limit crossed") {
  dispTS1.fillStyle="red";
  dispTS1.fillText("accident",10,100);
  dispCR1.fillStyle="red";
  dispCR1.fillText("accident at " +L ,10,100);
  dispS1.fillStyle="red";
  dispS1.fillText("accident",10,100);
}
}

//NOTIFICATION ALGORITHM
function Notification() {
var N1=document.getElementById("N");
//var N2=document.getElementById("N2");
  N=N1.value;
 //Nresponse=N2.value;
  var dispN=document.getElementById("NR");
  dispN.style.backgroundColor="white"
 var dispN1=dispN.getContext("2d");
  dispN1.font="14px TimesNewRoman";
  dispN1.fillStyle="black";
  
  if (N==1) {
  if (confirm( "Danger caution 1")==true) {
      Nresponse="positive";
 dispN1.clearRect(0,0,dispN.width,dispN.height);
  dispN1.fillText("N value is " +N,10,60);
  dispN1.fillText("Nresponse value is " +Nresponse,10,90);
    return N, Nresponse;
    }
    else {
       Nresponse="negative1";
dispN1.clearRect(0,0,dispN.width,dispN.height);
  dispN1.fillText("N value is " +N,10,60);
  dispN1.fillText("Nresponse value is " +Nresponse,10,90);
      return N, Nresponse;
    }
  }
if (N==2) {
  if (confirm( "Danger caution 2")==true) {
      Nresponse="positive";
dispN1.clearRect(0,0,dispN.width,dispN.height);
  dispN1.fillText("N value is " +N,10,60);
  dispN1.fillText("Nresponse value is " +Nresponse,10,90);
    return N, Nresponse;
    }
      else {
       Nresponse="negative2";
dispN1.clearRect(0,0,dispN.width,dispN.height);
  dispN1.fillText("N value is " +N,10,60);
  dispN1.fillText("Nresponse value is " +Nresponse,10,90);
        return N, Nresponse;
    }
}
  if (N==3) {
    alert("No Manual Control");
    AN=0;
    dispSN1.fillText("value of AN is " +AN,10,30);
    return AN,NotificationOfLanes();
  }
}

function SNotification() {
  //SECONDARY NOTIFICATION CANVAS START
  var dispSN=document.getElementById("SN");
  dispSN.style.backgroundColor="white"
 var dispSN1=dispSN.getContext("2d");
  dispSN1.font="14px TimesNewRoman";
  dispSN1.fillStyle="black";
  //SECONDARY NOTIFICATION CANVAS END
  if (Nresponse=="positive"){
    N=0; AN=1;
dispSN1.clearRect(0,0,dispSN.width,dispSN.height);
    dispSN1.fillText("value of AN is " +AN,10,30);
   return N, AN;
  }
  if (Nresponse=="negative1" && N==1){
    N=2;
dispSN1.clearRect(0,0,dispSN.width,dispSN.height);
   dispSN1.fillText("value of N is " +N,10,30);
    return N,Notification();
  }
  if (Nresponse=="negative2" && N==2){
    N=3;
dispSN1.clearRect(0,0,dispSN.width,dispSN.height);
    dispSN1.fillText("value of N is " +N,10,30);
    return N, Alarm();
    
  }
}
function Alarm() {

if (N==3) {
dispSN1.clearRect(0,0,dispSN.width,dispSN.height);
    alert("No Manual Control");
    AN=0;
    dispSN1.fillText("value of AN is " +AN,10,30);
return AN,NotificationOfLanes();
}
}

function NotificationOfLanes() {

  if (AN==0 && nl==1) {
  dispS1.fillStyle="red";
  dispS1.fillText("lane stop(Nalpha)",10,140);
  dispCR1.fillStyle="red";
  dispCR1.fillText("lane stop(Nalpha)",10,140);
}
  if (AN==0 && nl>1) {
  dispS1.fillStyle="red";
  dispS1.fillText("change lane sent",10,140);
  dispCR1.fillStyle="red";
  dispCR1.fillText("lane change activated",10,140);
}
}

function TestCase() {
  
  var testcase = document.getElementById("input").value;
switch(testcase){
  case "1":
    if ((ar==10) && (vb="on limit") && (sp1>sp2) && (sp1>40) && (sp2>40)) {
    dispTS1.clearRect(0,0,dispTS.width,dispTS.height);
 dispTS1.fillText("upload '1' in the notification box",10,40);
      return N=1;
    }
    if ((ar==5) && (vb="on limit") && (sp1>sp2) && (sp1>40) && (sp2>40)) {
dispTS1.clearRect(0,0,dispTS.width,dispTS.height);
   dispTS1.fillText("Activated retarder(speed2=speed1),EBD,Nnl,CN",10,40);
      AN=0;
   NotificationOfLanes();
    }
    if(N==3) {
dispTS1.clearRect(0,0,dispTS.width,dispTS.height);
  dispTS1.fillText(" Activated retarder(speed1=speed2) and CN",10,40);
      }
    if (ar>10) {
dispTS1.clearRect(0,0,dispTS.width,dispTS.height);
    dispTS1.fillText(" SAFE DRIVE",10,40);
    }   
 break;
    
case "3" :
if ((ar==3.5) && (vb="on limit") && (sp1>sp2) && (sp1>20) && (sp2>20)) {
dispTS1.clearRect(0,0,dispTS.width,dispTS.height);
  dispTS1.fillText("upload '1' in the notification box",10,40);
      return N=1;
    }
    if ((ar==2.5) && (vb="on limit") && (sp1>sp2) && (sp1>20) && (sp2>20)) {
dispTS1.clearRect(0,0,dispTS.width,dispTS.height);  
    dispTS1.fillText("Activated retarder(speed2>speed1),EBD,Nnl,CN",10,40);
      AN=0;
   NotificationOfLanes();
    }
    if(N==3) {
dispTS1.clearRect(0,0,dispTS.width,dispTS.height);
    dispTS1.fillText(" Activated retarder(speed1=speed2) and CN",10,40);
      }
    if(ar>3.5) {
  dispTS1.clearRect(0,0,dispTS.width,dispTS.height); 
  dispTS1.fillText(" SAFE DRIVE",10,40);
    }
 break; 
    
  case "8" :
  if ((radar==1) && (sp1<40) && (vb="on limit") && (ar<10) && (sp2==0)) {
dispTS1.clearRect(0,0,dispTS.width,dispTS.height);
   dispTS1.fillText("activation of EBD",10,40);
      AN=0;
   NotificationOfLanes();
  }
    if ((radar==1) && (sp1>40) && (vb="on limit") && (ar<10) && (sp2==0)) {
dispTS1.clearRect(0,0,dispTS.width,dispTS.height);
      dispTS1.fillText("activation of ABS,EBD",10,40);
      AN=0;
   NotificationOfLanes();
    }
    if ((radar==-1) && (vb="on limit") && (ar1<1||ar2<1||ar3<1||ar4<1)) {
dispTS1.clearRect(0,0,dispTS.width,dispTS.height);  
      dispTS1.fillText("activation of ABS,EBD",10,40);
      AN=0;
   NotificationOfLanes();
    }
    if(N==3) {
dispTS1.clearRect(0,0,dispTS.width,dispTS.height);   
      dispTS1.fillText(" Activated retarder(speed1=speed2) and CN",10,40);
      }
 break; 
}
}

function refresh() {
  dispR1.clearRect(0,0,dispR.width,dispR.height);
dispS1.clearRect(0,0,dispS.width,dispS.height);
dispN1.clearRect(0,0,dispN.width,dispN.height);
dispSN1.clearRect(0,0,dispSN.width,dispSN.height);
 dispCR1.clearRect(0,0,dispCR.width,dispCR.height); dispTS1.clearRect(0,0,dispTS.width,dispTS.height);
dispE1.clearRect(0,0,dispE.width,dispE.height);
}

//CONTROL ROOM FEED
function feed() {
  var fd=document.getElementById("feedd");
  var F=fd.value;
 var fdd=document.getElementById("feeddd");
 var 
FF=fdd.value; dispCR1.clearRect(0,0,dispCR.width,dispCR.height);
dispS1.clearRect(0,0,dispS.width,dispS.height);
dispE1.clearRect(0,0,dispE.width,dispE.height);
   dispCR1.fillText(F,10,60);
  dispS1.fillStyle="red";
  dispS1.fillText(F,10,60);
  dispE1.fillText(F,10,60);
   dispCR1.fillText(FF,10,60);
  dispS1.fillStyle="red";
  dispS1.fillText(FF,10,60);
  dispE1.fillText(FF,10,60);
}