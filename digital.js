const hour1=document.getElementsByClassName("hour")[0];
const minutes1=document.getElementsByClassName("minutes")[0];
const secondsele=document.getElementsByClassName("second")[0];

const  ampme1=document.getElementById("ampm");

function updateclock(){
  let h=new Date().getHours();
  let m=new Date().getMinutes();
  let s=new Date().getSeconds();

  let ap="AM";
  if(h>12){
    h=h-12;
    ap="PM";
  }

  h=h<10 ? "0"+h :h;
  s=s<10 ? "0"+s :s;
  m=m<10 ? "0"+m :m;

  hour1.innerText=h;
  minutes1.innerText=m;
  secondsele.innerText=s;
  ampme1.innerText=ap;

  setTimeout(()=>{
    updateclock()
  },1000)


}

updateclock();
