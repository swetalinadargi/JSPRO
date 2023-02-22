let button=document.getElementById("btn");
button.addEventListener("mouseover",function(){
    this.innerText="Party Time";
})
button.addEventListener("mouseout",function(){
    this.innerText="Set Alarm";
})
button.addEventListener("click",function(){
    let date=new Date();
    let hours=date.getHours();
    let wakeuptime = document.getElementById("wakeuptime" ); 
    let lunchtime = document.getElementById("lunchtime"); 
    let naptime = document.getElementById("naptime"); 
    let nighttime = document.getElementById("nighttime");

    if(parseInt(wakeuptime.value)===hours){
        document.getElementById("msg").innerText="GRAB SOME HEALTHY BREAKFAST!!!";
        document.getElementById("img").style.backgroundImage ="url(Wakeup.png)";
    }
    if(parseInt(lunchtime.value)===hours){
        document.getElementById("msg").innerText="LET'S HAVE SOME LUNCH!!!";
        document.getElementById("img").style.backgroundImage ="url(lunch2.png)";
    }
    if(parseInt(naptime.value)===hours){
        document.getElementById("msg").innerText="STOP YAWNING,GET SOME TEA...I'TS JUST EVENING!!!";
        document.getElementById("img").style.backgroundImage ="url(lunch2.png)";
    }
    if(parseInt(nighttime.value)===hours){
        document.getElementById("msg").innerText="CLOSE YOUR EYES AND GOT TO SLEEP";
        document.getElementById("img").style.backgroundImage ="url(gudnight.png)";
    }
    let timing = document.getElementsByClassName("timing");
    timing[0].innerText = wakeuptime.options[wakeuptime.selectedIndex].text;
    timing[1].innerText = wakeuptime.options[lunchtime.selectedIndex].text;
    timing[2].innerText = wakeuptime.options[naptime.selectedIndex].text;
    timing[3].innerText = wakeuptime.options[nighttime.selectedIndex].text;
})

function clock(){
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    console.log(hours,minutes,seconds);

    if(hours>12){
        hours=hours-12;
    }

    let hr = document.getElementById("hr");
    hr.innerText = hours;
    
    let min = document.getElementById("min");
    min.innerText = minutes;
    
    let sec = document.getElementById("sec");
    sec.innerText = seconds;
    
}

setInterval(()=>{
    clock();
},1000);

let date = new Date();
let hours = date.getHours();
    
if(hours>=12){
    let ampm = document.getElementById("ampm");
    ampm.innerText = "PM";
}
else if(hours<12){
    let ampm = document.getElementById("ampm");
    ampm.innerText = "AM";
}

let good = document.getElementById("good");
        if(hours<12){
            good.innerText="GOOD MORNING!! WAKE UP!!";
        }
        if(hours>=12 && hours<16){
            good.innerText="GOOD AFTERNOON!! TAKE SOME SLEEP";
        }

        if(hours>=16 && hours<20){
            good.innerText="GOOD EVENING!!";
        }
        if(hours>=20 && hours<24){
            good.innerText="GOOD NIGHT!!";
        }