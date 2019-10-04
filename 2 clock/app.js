function setDate(){
   let now= new Date();
   let seconds= now.getSeconds();
   let secondsDeg= ((seconds/60)*360)+90;

   let minutes= now.getMinutes();
   let minDeg= ((minutes/60)*360)+90;

   let hours= now.getHours();
   let hourDeg= ((hours/12)*360)+90;
   
   
   let secondHand= document.querySelector(".second-hand")
   let minHand= document.querySelector(".min-hand")
   let hourHand= document.querySelector(".hour-hand")




   secondHand.style.transform = `rotate(${secondsDeg}deg)`; 
   minHand.style.transform=`rotate(${minDeg}deg)`
   hourHand.style.transform=`rotate(${hourDeg}deg)` 
} ;

setInterval(setDate, 1000);
