



onload= changeBcolorblanc1();
/*function animation1(){
	var tab=document.getElementsByClassName("groupe1");
	n=tab.length;
	for(i=0;i<n;i++){
		tab[i].style.backgroundColor="black";	
	}
	setTimeout(animation2,1000);
}
function animation2(){
	var tab=document.getElementsByClassName("groupe2");
	n=tab.length;
	for(i=0;i<n;i++){
		tab[i].style.backgroundColor="white";	
	}

	setTimeout(animation3,1000);
}

function animation3(){
	var tab=document.getElementsByClassName("groupe1");
	n=tab.length;
	for(i=0;i<n;i++){
		tab[i].style.backgroundColor="green";	
	}
setTimeout(animation4,1000);
}
function animation4(){
	var tab=document.getElementsByClassName("groupe2");
	n=tab.length;
	for(i=0;i<n;i++)
	 for(j=0;j<n;j++){
	    if(i==j)
		tab[i].style.backgroundColor="yellow";	
	}
setTimeout(animation5,1000);
}
function animation5(){
	var tab=document.getElementsByClassName("groupe1");
	n=tab.length;
	for(i=0;i<n;i++){
		tab[i].style.backgroundColor="pink";	
	}
setTimeout(animation6,1000);
}
function animation6(){
	var tab=document.getElementsByClassName("groupe2");
	n=tab.length;
	for(i=0;i<n;i++){
		tab[i].style.backgroundColor="blue";	
	}
setTimeout(animation7,1000);
}
function animation7(){
	var tab=document.getElementsByClassName("groupe1");
	n=tab.length;
	for(i=0;i<n;i++){
		tab[i].style.backgroundColor="grey";	
	}
setTimeout(animation8,1000);
}
function animation8(){
	var tab=document.getElementsByClassName("groupe2");
	n=tab.length;
	for(i=0;i<n;i++){
		tab[i].style.backgroundColor="purple";	
	}
setTimeout(animation9,1000);
}*/

function animation1(){
	var tab=document.getElementsByClassName("groupe1");
	n=tab.length;
	for(i=0;i<n;i++){
		tab[i].style.backgroundColor="black";	
	}
setTimeout(animation2,1400);
}
function animation2(){
	var tab=document.getElementsByClassName("groupe2");
	n=tab.length;
	for(i=0;i<n;i++){
		tab[i].style.backgroundColor="white";	
	}
		//changeBcolor();

setTimeout(animation3,1400);
}

function animation3(){
	var tab=document.getElementsByClassName("groupe1");
	n=tab.length;
	for(i=0;i<n;i++){
		tab[i].style.backgroundColor="green";	
	}
setTimeout(animation4,1400);
}
function animation4(){
	var tab=document.getElementsByClassName("groupe2");
	n=tab.length;
	for(i=0;i<n;i++)
	 for(j=0;j<n;j++){
	    if(i==j)
		tab[i].style.backgroundColor="yellow";	
	}
setTimeout(animation5,1400);
}
function animation5(){
	var tab=document.getElementsByClassName("groupe1");
	n=tab.length;
	for(i=0;i<n;i++){
		tab[i].style.backgroundColor="pink";	
	}
	changeBcolor();
setTimeout(animation6,1400);
}
function animation6(){
	var tab=document.getElementsByClassName("groupe2");
	n=tab.length;
	for(i=0;i<n;i++){
		tab[i].style.backgroundColor="blue";
		}
		changeBcolorbis();
setTimeout(animation7,1400);
}
function animation7(){
	var tab=document.getElementsByClassName("groupe2");
	n=tab.length;
	for(i=0;i<n;i++){
		tab[i].style.backgroundColor="grey";
	}
	changeBcolorbis2();
setTimeout(animation8,1400);
		changeBcolorbis3();

}
function animation8(){
	var tab=document.getElementsByClassName("groupe1");
	n=tab.length;
	for(i=0;i<n;i++){
		tab[i].style.backgroundColor="purple";	
	}
	changeBcolorbis3();
		
setTimeout(animation9,1400);

}
function animation9(){
	var tab=document.getElementsByClassName("groupe1");
	n=tab.length;
	for(i=0;i<n;i++){
		tab[i].style.backgroundColor="rgb(128,64,0)";	
	}
setTimeout(animation10,1000);
}

function animation10(){
	var tab=document.getElementsByClassName("groupe2");
	n=tab.length;
	for(i=0;i<n;i++){
		tab[i].style.backgroundColor="rgb(128,128,64)";	
	}
setTimeout(animation11,1000);
}

function animation11(){
	var tab=document.getElementsByClassName("groupe1");
	n=tab.length;
	for(i=0;i<n;i++){
		tab[i].style.backgroundColor="rgb(64,0,0)";	
	}
setTimeout(animation12,1000);
}

function animation12(){
	var tab=document.getElementsByClassName("groupe2");
	n=tab.length;
	for(i=0;i<n;i++){
		tab[i].style.backgroundColor="rgb(128,128,64)";	
	}
setTimeout(animation13,1000);
}

function animation13(){
	var tab=document.getElementsByClassName("groupe1");
	n=tab.length;
	for(i=0;i<n;i++){
		tab[i].style.backgroundColor="rgb(85,85,234)";	
	}
setTimeout(animation14,1000);
}

function animation14(){
	var tab=document.getElementsByClassName("groupe2");
	n=tab.length;
	for(i=0;i<n;i++){
		tab[i].style.backgroundColor="rgb(128,128,64)";	
	}
setTimeout(animation15,1000);
}

function animation15(){
	var tab=document.getElementsByClassName("groupe1");
	n=tab.length;
	for(i=0;i<n;i++){
		tab[i].style.backgroundColor="rgb(234,85,85)";	
	}
setTimeout(animation2,1000);
}


function changeBcolor(){
 //acces by id
 
  var para1,para2,para3,para4,para5,para6,para7,para8,para9;
     para1=document.getElementById("td1");
	 para2=document.getElementById("td2");
	 para3=document.getElementById("td3");
	 para4=document.getElementById("td4");
	 para5=document.getElementById("td5");
	 para6=document.getElementById("td6");
	 para7=document.getElementById("td7");
	 para8=document.getElementById("td8");
	 para9=document.getElementById("td9");
     para1.style.backgroundColor="white";
	  para2.style.backgroundColor="white";
	   para3.style.backgroundColor="white";
	    para4.style.backgroundColor="white";
		 para5.style.backgroundColor="white";
		  para6.style.backgroundColor="white";
		   para7.style.backgroundColor="white";
		    para8.style.backgroundColor="white";
			 para9.style.backgroundColor="white"; 
 }
 
 function changeBcolorbis(){
 //acces by name
 
  var para1,para2,para3,para4,para5,para6,para7,para8,para9;
     para1=document.getElementById("rec1");
	 para2=document.getElementById("rec2");
	 para3=document.getElementById("rec3");
	 para4=document.getElementById("rec4");
	 para6=document.getElementById("rec6");
	 para7=document.getElementById("rec7");
	 para8=document.getElementById("rec8");
	 para9=document.getElementById("rec9");
     para1.style.backgroundColor="white";
	 para2.style.backgroundColor="white";
	 para3.style.backgroundColor="white";
	 para4.style.backgroundColor="white";
	 para6.style.backgroundColor="white";
	 para7.style.backgroundColor="white";
	 para8.style.backgroundColor="white";
	 para9.style.backgroundColor="white"; 
 }
 function changeBcolorbis2(){
 //acces by name
 
  var para1,para2,para3;
     para1=document.getElementById("car4");
	 para2=document.getElementById("car5");
	 para3=document.getElementById("car6");
	 para1.style.backgroundColor="white";
	 para2.style.backgroundColor="white";
	 para3.style.backgroundColor="white";

 
 }
 function changeBcolorbis3(){
 //access by id
 
  var para1,para2,para3,para4,para5,para6,para7,para8,para9,para10,para11,para12,para13;
     para1=document.getElementById("car8");
	 para2=document.getElementById("car9");
	 para3=document.getElementById("car10");
	 para4=document.getElementById("car11");
	 para5=document.getElementById("car12");
	 para6=document.getElementById("car13");
	 para7=document.getElementById("car14");
	 para8=document.getElementById("car15");
	 para9=document.getElementById("car16");
	 para10=document.getElementById("car17");
	 para11=document.getElementById("car18");
	 	 para12=document.getElementById("car19");
		 para13=document.getElementById("pre12");
	 para1.style.backgroundColor="white";
	 para2.style.backgroundColor="white";
	 para3.style.backgroundColor="white";
	 para4.style.backgroundColor="white";
	 para5.style.backgroundColor="white";
	 para6.style.backgroundColor="white";
	 para7.style.backgroundColor="white";
	 para8.style.backgroundColor="white";
	 para9.style.backgroundColor="white";
     para10.style.backgroundColor="white";
	 para11.style.backgroundColor="white";
	 	 para12.style.backgroundColor="white";
		 para13.style.backgroundColor="white";

 
 }
 function changeBcolorblanc1(){
 //acces by id
 var tab=document.getElementsByClassName("groupe1");
	n=tab.length;
	for(i=0;i<n;i++){
		tab[i].style.backgroundColor="white";
	}
setTimeout(changeBcolorblanc2,100);
}
function changeBcolorblanc2(){
 //acces by id
 var tab=document.getElementsByClassName("groupe2");
	n=tab.length;
	for(i=0;i<n;i++){
		tab[i].style.backgroundColor="white";
	}
setTimeout(changeBcolorH,100);
}
function changeBcolorblancH(){
 //acces by id
  var para,para1,para2,para3,para4,para5,para6,para7,para8,para9,para10,
 para11,para12,para13,para14,para12,para13,para14,para15,para16,para17,para18,para19,para20;
  para=document.getElementById("h1");
  para1=document.getElementById("h2");
  para2=document.getElementById("car4");
   para3=document.getElementById("td4");
   para5=document.getElementById("car14");
   para6=document.getElementById("td5");
 para7=document.getElementById("car13");
 para8=document.getElementById("rec4");
 para9=document.getElementById("car8");
 para10=document.getElementById("h3");
 para11=document.getElementById("h4");
 para12=document.getElementById("h7");
 para13=document.getElementById("h8");
 para14=document.getElementById("car6");
 para15=document.getElementById("rec6");
 para16=document.getElementById("car13");
 para17=document.getElementById("td6");
 para18=document.getElementById("car10");
 para19=document.getElementById("h6");
 para20=document.getElementById("h5");
      para.style.backgroundColor="white";
      para1.style.backgroundColor="white";
      para2.style.backgroundColor="white";
	  para3.style.backgroundColor="white";
	  para5.style.backgroundColor="white";
      para6.style.backgroundColor="white";
      para7.style.backgroundColor="white";
	  para8.style.backgroundColor="white";
	  para9.style.backgroundColor="white";
	  para10.style.backgroundColor="white";
      para11.style.backgroundColor="white";
      para12.style.backgroundColor="white";
	  para13.style.backgroundColor="white";
	  para14.style.backgroundColor="white";
      para15.style.backgroundColor="white";
      para16.style.backgroundColor="white";
	  para17.style.backgroundColor="white";
	  para18.style.backgroundColor="white";
	  para19.style.backgroundColor="white";
     para20.style.backgroundColor="white";		
setTimeout(changeBcolorE,100);
}
function changeBcolorH(){
 //acces by name
 var para,para1,para2,para3,para4,para5,para6,para7,para8,para9,para10,
 para11,para12,para13,para14,para12,para13,para14,para15,para16,para17,para18,para19,para20;
  para=document.getElementById("h1");
  para1=document.getElementById("h2");
  para2=document.getElementById("car4");
   para3=document.getElementById("td4");
   para5=document.getElementById("car14");
   para6=document.getElementById("td5");
 para7=document.getElementById("car13");
 para8=document.getElementById("rec4");
 para9=document.getElementById("car8");
 para10=document.getElementById("h3");
 para11=document.getElementById("h4");
 para12=document.getElementById("h7");
 para13=document.getElementById("h8");
 para14=document.getElementById("car6");
 para15=document.getElementById("rec6");
 para16=document.getElementById("car13");
 para17=document.getElementById("td6");
 para18=document.getElementById("car10");
 para19=document.getElementById("h6");
 para20=document.getElementById("h5");
      para.style.backgroundColor="blue";
      para1.style.backgroundColor="blue";
      para2.style.backgroundColor="blue";
	  para3.style.backgroundColor="blue";
	  para5.style.backgroundColor="blue";
      para6.style.backgroundColor="blue";
      para7.style.backgroundColor="blue";
	  para8.style.backgroundColor="blue";
	  para9.style.backgroundColor="blue";
	  para10.style.backgroundColor="blue";
      para11.style.backgroundColor="blue";
      para12.style.backgroundColor="blue";
	  para13.style.backgroundColor="blue";
	  para14.style.backgroundColor="blue";
      para15.style.backgroundColor="blue";
      para16.style.backgroundColor="blue";
	  para17.style.backgroundColor="blue";
	  para18.style.backgroundColor="blue";
	  para19.style.backgroundColor="blue";
     para20.style.backgroundColor="blue";						  

setTimeout(changeBcolorblancH,1400);
 
 }
 function changeBcolorE(){
 //acces by name
 var para,para1,para2,para3,para4,para5,para6,para7,para8,para9,para10,
 para11,para12,para13,para14,para12,para13,para14,para15,para16,para17,para18,para19,para20;
  para=document.getElementById("h1");
  para1=document.getElementById("h10");
  para2=document.getElementById("h8");
   para3=document.getElementById("h2");
   para5=document.getElementById("car4");
   para6=document.getElementById("td4");
 //para7=document.getElementById("car17");
 //para8=document.getElementById("rec6");
 para9=document.getElementById("car14");
 para10=document.getElementById("td5");
 para11=document.getElementById("car13");
 para12=document.getElementById("rec4");
 para13=document.getElementById("car8");
 para14=document.getElementById("h3");
 para15=document.getElementById("h4");
 para16=document.getElementById("h5");
 para17=document.getElementById("h12");
  para18=document.getElementById("td6");
 
      para.style.backgroundColor="blue";
      para1.style.backgroundColor="blue";
      para2.style.backgroundColor="blue";
	  para3.style.backgroundColor="blue";
	  para5.style.backgroundColor="blue";
      para6.style.backgroundColor="blue";
      //para7.style.backgroundColor="blue";
	  //para8.style.backgroundColor="blue";
	  para9.style.backgroundColor="blue";
	  para10.style.backgroundColor="blue";
      para11.style.backgroundColor="blue";
      para12.style.backgroundColor="blue";
	  para13.style.backgroundColor="blue";
	  para14.style.backgroundColor="blue";
      para15.style.backgroundColor="blue";
      para16.style.backgroundColor="blue";
	  para17.style.backgroundColor="blue";
	  para18.style.backgroundColor="white";					  
	  

setTimeout(changeBcolorblancE,1400);
 
 }
 function changeBcolorblancE(){
 //acces by name
 var para,para1,para2,para3,para4,para5,para6,para7,para8,para9,para10,
 para11,para12,para13,para14,para12,para13,para14,para15,para16,para17,para18,para19,para20;
  para=document.getElementById("h1");
  para1=document.getElementById("h10");
  para2=document.getElementById("h8");
   para3=document.getElementById("h2");
   para5=document.getElementById("car4");
   para6=document.getElementById("td4");
 para7=document.getElementById("car17");
 para8=document.getElementById("rec6");
 para9=document.getElementById("car14");
 para10=document.getElementById("td5");
 para11=document.getElementById("car13");
 para12=document.getElementById("rec4");
 para13=document.getElementById("car8");
 para14=document.getElementById("h3");
 para15=document.getElementById("h4");
 para16=document.getElementById("h5");
 para17=document.getElementById("h12");
  para18=document.getElementById("td6");
 
      para.style.backgroundColor="white";
      para1.style.backgroundColor="white";
      para2.style.backgroundColor="white";
	  para3.style.backgroundColor="white";
	  para5.style.backgroundColor="white";
      para6.style.backgroundColor="white";
      para7.style.backgroundColor="white";
	  para8.style.backgroundColor="white";
	  para9.style.backgroundColor="white";
	  para10.style.backgroundColor="white";
      para11.style.backgroundColor="white";
      para12.style.backgroundColor="white";
	  para13.style.backgroundColor="white";
	  para14.style.backgroundColor="white";
      para15.style.backgroundColor="white";
      para16.style.backgroundColor="white";
	  para17.style.backgroundColor="white";
	  para18.style.backgroundColor="white";					  
	  
setTimeout(changeBcolorL1,100);
}

function changeBcolorL1(){
 //acces by name
 var para,para1,para2,para3,para4,para5,para6,para7,para8,para9,para10;
  para=document.getElementById("h1");
  para1=document.getElementById("h2");
  para2=document.getElementById("car4");
   para3=document.getElementById("td4");
   para4=document.getElementById("car14");
  para5=document.getElementById("rec4");
  para6=document.getElementById("car8");
   para7=document.getElementById("h5");
   para8=document.getElementById("h4");
	para9=document.getElementById("h12");
   para10=document.getElementById("h3");
      para.style.backgroundColor="blue";
      para1.style.backgroundColor="blue";
      para2.style.backgroundColor="blue";
	  para3.style.backgroundColor="blue";
	  para4.style.backgroundColor="blue";
      para5.style.backgroundColor="blue";
      para6.style.backgroundColor="blue";
	  para7.style.backgroundColor="blue";
	  para8.style.backgroundColor="blue";
      para9.style.backgroundColor="blue";
      para10.style.backgroundColor="blue";
setTimeout(changeBcolorblancL1,1400);
 
 }
 function changeBcolorL2(){
 //acces by name
 var para,para1,para2,para3,para4,para5,para6,para7,para8,para9,para10;
  para=document.getElementById("h1");
  para1=document.getElementById("h2");
  para2=document.getElementById("car4");
   para3=document.getElementById("td4");
   para4=document.getElementById("car14");
  para5=document.getElementById("rec4");
  para6=document.getElementById("car8");
   para7=document.getElementById("h5");
   para8=document.getElementById("h4");
	para9=document.getElementById("h12");
   para10=document.getElementById("h3");
      para.style.backgroundColor="blue";
      para1.style.backgroundColor="blue";
      para2.style.backgroundColor="blue";
	  para3.style.backgroundColor="blue";
	  para4.style.backgroundColor="blue";
      para5.style.backgroundColor="blue";
      para6.style.backgroundColor="blue";
	  para7.style.backgroundColor="blue";
	  para8.style.backgroundColor="blue";
      para9.style.backgroundColor="blue";
      para10.style.backgroundColor="blue";
setTimeout(changeBcolorblancL2,1400);
}
 function changeBcolorblancL1(){
 //acces by name
 var para,para1,para2,para3,para4,para5,para6,para7,para8,para9,para10;
  para=document.getElementById("h1");
  para1=document.getElementById("h2");
  para2=document.getElementById("car4");
   para3=document.getElementById("td4");
   para4=document.getElementById("car14");
  para5=document.getElementById("rec4");
  para6=document.getElementById("car8");
   para7=document.getElementById("h5");
   para8=document.getElementById("h4");
	para9=document.getElementById("h12");
   para10=document.getElementById("h3");
      para.style.backgroundColor="white";
      para1.style.backgroundColor="white";
      para2.style.backgroundColor="white";
	  para3.style.backgroundColor="white";
	  para4.style.backgroundColor="white";
      para5.style.backgroundColor="white";
      para6.style.backgroundColor="white";
	  para7.style.backgroundColor="white";
	  para8.style.backgroundColor="white";
      para9.style.backgroundColor="white";
      para10.style.backgroundColor="white";
setTimeout(changeBcolorL2,100);
 
 }
 function changeBcolorblancL2(){
 //acces by name
 var para,para1,para2,para3,para4,para5,para6,para7,para8,para9,para10,
 para11,para12,para13,para14,para12,para13,para14,para15,para16,para17,para18,para19,para20;
  para=document.getElementById("h1");
  para1=document.getElementById("h2");
  para2=document.getElementById("car4");
   para3=document.getElementById("td4");
   para4=document.getElementById("car14");
  para5=document.getElementById("rec4");
  para6=document.getElementById("car8");
   para7=document.getElementById("h5");
   para8=document.getElementById("h4");
	para9=document.getElementById("h12");
   para10=document.getElementById("h3");
      para.style.backgroundColor="white";
      para1.style.backgroundColor="white";
      para2.style.backgroundColor="white";
	  para3.style.backgroundColor="white";
	  para4.style.backgroundColor="white";
      para5.style.backgroundColor="white";
      para6.style.backgroundColor="white";
	  para7.style.backgroundColor="white";
	  para8.style.backgroundColor="white";
      para9.style.backgroundColor="white";
      para10.style.backgroundColor="white";
setTimeout(changeBcolorO,100);
 
 }
 
 function changeBcolorO(){
 //acces by name
 var para,para1,para2,para3,para4,para5,para22,para7,para8,para9,para10,
 para11,para12,para13,para14,para12,para13,para14,para15,para16,para17,para18,para19,para20,para21;
  para=document.getElementById("h1");
  para1=document.getElementById("h2");
  para2=document.getElementById("car4");
   para3=document.getElementById("td4");
   para5=document.getElementById("car14");
   //para6=document.getElementById("td5");
 para7=document.getElementById("car13");
 para8=document.getElementById("rec4");
 para9=document.getElementById("car8");
 para10=document.getElementById("h3");
 para11=document.getElementById("h4");
 para12=document.getElementById("h7");
 para13=document.getElementById("h8");
 para14=document.getElementById("car6");
 para15=document.getElementById("rec6");
 para16=document.getElementById("car13");
 para17=document.getElementById("td6");
 para18=document.getElementById("car10");
 para19=document.getElementById("h6");
 para20=document.getElementById("h5");
  para21=document.getElementById("h10");
para22=document.getElementById("h12");
      para.style.backgroundColor="blue";
      para1.style.backgroundColor="blue";
      para2.style.backgroundColor="blue";
	  para3.style.backgroundColor="blue";
	  para5.style.backgroundColor="blue";
      para21.style.backgroundColor="blue";
      para7.style.backgroundColor="blue";
	  para8.style.backgroundColor="blue";
	  para9.style.backgroundColor="blue";
	  para10.style.backgroundColor="blue";
      para11.style.backgroundColor="blue";
      para12.style.backgroundColor="blue";
	  para13.style.backgroundColor="blue";
	  para14.style.backgroundColor="blue";
      para15.style.backgroundColor="blue";
      para16.style.backgroundColor="blue";
	  para17.style.backgroundColor="blue";
	  para18.style.backgroundColor="blue";
	  para19.style.backgroundColor="blue";
     para20.style.backgroundColor="blue";			
     para22.style.backgroundColor="blue";						  
	 

setTimeout(changeBcolorblancO,2400);
 }
 
  function changeBcolorblancO(){
 //acces by name
 var para,para1,para2,para3,para4,para5,para22,para7,para8,para9,para10,
 para11,para12,para13,para14,para12,para13,para14,para15,para16,para17,para18,para19,para20,para21;
  para=document.getElementById("h1");
  para1=document.getElementById("h2");
  para2=document.getElementById("car4");
   para3=document.getElementById("td4");
   para5=document.getElementById("car14");
   //para6=document.getElementById("td5");
 para7=document.getElementById("car13");
 para8=document.getElementById("rec4");
 para9=document.getElementById("car8");
 para10=document.getElementById("h3");
 para11=document.getElementById("h4");
 para12=document.getElementById("h7");
 para13=document.getElementById("h8");
 para14=document.getElementById("car6");
 para15=document.getElementById("rec6");
 para16=document.getElementById("car13");
 para17=document.getElementById("td6");
 para18=document.getElementById("car10");
 para19=document.getElementById("h6");
 para20=document.getElementById("h5");
  para21=document.getElementById("h10");
para22=document.getElementById("h12");
      para.style.backgroundColor="white";
      para1.style.backgroundColor="white";
      para2.style.backgroundColor="white";
	  para3.style.backgroundColor="white";
	  para5.style.backgroundColor="white";
      para21.style.backgroundColor="white";
      para7.style.backgroundColor="white";
	  para8.style.backgroundColor="white";
	  para9.style.backgroundColor="white";
	  para10.style.backgroundColor="white";
      para11.style.backgroundColor="white";
      para12.style.backgroundColor="white";
	  para13.style.backgroundColor="white";
	  para14.style.backgroundColor="white";
      para15.style.backgroundColor="white";
      para16.style.backgroundColor="white";
	  para17.style.backgroundColor="white";
	  para18.style.backgroundColor="white";
	  para19.style.backgroundColor="white";
     para20.style.backgroundColor="white";			
     para22.style.backgroundColor="white";						  
	 setTimeout(animation1,100);
}