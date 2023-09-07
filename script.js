var form=document.querySelector(".form-1");
var userName=document.getElementById("text");
var email=document.getElementById("email");
var number=document.getElementById("number");
var curentStep=1;
var steps=[];
var buttonNext=document.querySelector(".button-next");
var curentForm=document.querySelector(".window-1");
var currentSidebar=document.querySelector(".number1");
var form1={
    username:0 ,
    email:0 ,
    number:0
}; 
var x=0;
var y;
var packetType=document.querySelector('.packet-type');
var costumer={
    username: 0 ,
    email: 0 ,
    number: 0 ,
    time: "monthly " ,
    packetType: " " ,
    onlineService: 0 ,
    largerStorage: 0 ,
    costomizableProfile: 0
}
var z;
var t=0;
var switchButton=document.querySelector(".switch");
var page3=document.querySelector(".page-3");
var icons ={
    icon1: 0,
    icon2: 0,
    icon3: 0
}
var buttonBack=document.querySelector(".button-back");
// SideBar click Event
var change=document.querySelector(".button3");
var price=0;
var price1=0;
var confirm=document.querySelector(".button-confirm");
document.querySelector(".numbers").addEventListener('click',function(e){
    var nextStage=e.target;
    currentSidebar=document.querySelector(".number" + curentStep );
    // if(nextStage.classList.contains("number") && form1.username==1 && form1.email==1 && form1.number==1){
    //     if((+nextStage.innerText)==1){
    //         document.querySelector(".circle1").style.visibility="hidden";
    //         document.querySelector(".circle2").style.visibility="hidden";
    //         document.querySelector(".circle3").style.visibility="hidden";
    //         document.querySelector(".small1").style.visibility="hidde";
    //         document.querySelector(".small2").style.visibility="hidde";
    //         document.querySelector(".small3").style.visibility="hidde";
    //         document.querySelector(".yearly-small1").style.visibility="hidden";
    //         document.querySelector(".yearly-small2").style.visibility="hidden";
    //         document.querySelector(".yearly-small3").style.visibility="hidden";
    //         document.querySelector(".button-confirm").style.visibility="hidden";
    //         document.querySelector(".button-back").style.visibility="hidden";
    //         document.querySelector(".button-next").style.visibility="visible";
    //         currentSidebar.style.backgroundColor="rgb(66, 66, 239)";
    //         e.target.style.backgroundColor = "rgb(41, 41, 223)";
    //         curentStep=+nextStage.innerText;
    //         curentForm=document.querySelector(".window-"+curentStep);
    //         if(xy == 0)costumer.time="monthly";
    //         if(xy==1)costumer.time="yearly";
    //     }else if((+nextStage.innerText)==2){
    //         if(xy == 0)costumer.time="monthly";
    //         if(xy==1)costumer.time="yearly";
    //         if(costumer.time=="monthly" && x==0)
    //         {
    //             document.querySelector(".small1").style.visibility="visible";
    //             document.querySelector(".small2").style.visibility="visible";
    //             document.querySelector(".small3").style.visibility="visible";
    //             document.querySelector(".yearly-small1").style.visibility="hidden";
    //             document.querySelector(".yearly-small2").style.visibility="hidden";
    //             document.querySelector(".yearly-small3").style.visibility="hidden";
    //         }
    //         else if(costumer.time=="yearly" && x==0){
    //             document.querySelector(".small1").style.visibility="visible";
    //             document.querySelector(".small2").style.visibility="visible";
    //             document.querySelector(".small3").style.visibility="visible";
    //             document.querySelector(".yearly-small1").style.visibility="visible";
    //             document.querySelector(".yearly-small2").style.visibility="visible";
    //             document.querySelector(".yearly-small3").style.visibility="visible";
    //         } else if(costumer.time=="monthly" && x==1){
    //             document.querySelector(".small1").style.visibility="hidden";
    //             document.querySelector(".small2").style.visibility="hidden";
    //             document.querySelector(".small3").style.visibility="hidden";
    //             document.querySelector(".yearly-small1").style.visibility="hidden";
    //             document.querySelector(".yearly-small2").style.visibility="hidden";
    //             document.querySelector(".yearly-small3").style.visibility="hidden";
    //         } else if(costumer.time=="yearly" && x==1){
    //             document.querySelector(".small1").style.visibility="hidden";
    //             document.querySelector(".small2").style.visibility="hidden";
    //             document.querySelector(".small3").style.visibility="hidden";
    //             document.querySelector(".yearly-small1").style.visibility="visible";
    //             document.querySelector(".yearly-small2").style.visibility="visible";
    //             document.querySelector(".yearly-small3").style.visibility="visible";
    //         }
    //         document.querySelector(".circle1").style.visibility="hidden";
    //         document.querySelector(".circle2").style.visibility="hidden";
    //         document.querySelector(".circle3").style.visibility="hidden";
    //         document.querySelector(".button-confirm").style.visibility="hidden";
    //         document.querySelector(".button-back").style.visibility="visible";
    //         document.querySelector(".button-next").style.visibility="visible";
    //         currentSidebar.style.backgroundColor="rgb(66, 66, 239)";
    //         e.target.style.backgroundColor = "rgb(41, 41, 223)";
    //         curentStep=+nextStage.innerText;
    //         curentForm=document.querySelector(".window-"+curentStep);
    //     } else if((+nextStage.innerText)==3 && x!=0){
    //         if(icons.icon1==1 && icons.icon2==0 && icons.icon3==0) document.querySelector(".circle1").style.visibility="visible";
    //         if(icons.icon1==0 && icons.icon2==1 && icons.icon3==0) document.querySelector(".circle2").style.visibility="visible";       
    //         if(icons.icon1==0 && icons.icon2==0 && icons.icon3==1) document.querySelector(".circle3").style.visibility="visible";
    //         if(icons.icon1==1 && icons.icon2==1 && icons.icon3==0) {document.querySelector(".circle1").style.visibility="visible"; document.querySelector(".circle2").style.visibility="visible";}
    //         if(icons.icon1==1 && icons.icon2==0 && icons.icon3==1) {document.querySelector(".circle1").style.visibility="visible"; document.querySelector(".circle3").style.visibility="visible";}
    //         if(icons.icon1==0 && icons.icon2==1 && icons.icon3==1) {document.querySelector(".circle2").style.visibility="visible"; document.querySelector(".circle3").style.visibility="visible";}
    //         if(icons.icon1==1 && icons.icon2==1 && icons.icon3==1) {document.querySelector(".circle1").style.visibility="visible"; document.querySelector(".circle2").style.visibility="visible"; document.querySelector(".circle3").style.visibility="visible"; }
    //         document.querySelector(".button-confirm").style.visibility="hidden";
    //         document.querySelector(".button-back").style.visibility="visible";
    //         document.querySelector(".button-next").style.visibility="visible";
    //         currentSidebar.style.backgroundColor="rgb(66, 66, 239)";
    //         e.target.style.backgroundColor = "rgb(41, 41, 223)";
    //         curentStep=+nextStage.innerText;
    //         curentForm=document.querySelector(".window-"+curentStep);
    //         document.querySelector(".small1").style.visibility="hidde";
    //         document.querySelector(".small2").style.visibility="hidde";
    //         document.querySelector(".small3").style.visibility="hidde";
    //         document.querySelector(".yearly-small1").style.visibility="hidden";
    //         document.querySelector(".yearly-small2").style.visibility="hidden";
    //         document.querySelector(".yearly-small3").style.visibility="hidden";
    //         if(xy == 0)costumer.time="monthly";
    //         if(xy==1)costumer.time="yearly";
    //     } else if((+nextStage.innerText)==4 && x!=0){
    //         document.querySelector(".button-confirm").style.visibility="visible";
    //         document.querySelector(".button-back").style.visibility="visible";
    //         document.querySelector(".button-next").style.visibility="hidden";
    //         currentSidebar.style.backgroundColor="rgb(66, 66, 239)";
    //         e.target.style.backgroundColor = "rgb(41, 41, 223)";
    //         curentStep=+nextStage.innerText;
    //         curentForm=document.querySelector(".window-"+curentStep);
    //         document.querySelector(".small1").style.visibility="hidde";
    //         document.querySelector(".small2").style.visibility="hidde";
    //         document.querySelector(".small3").style.visibility="hidde";
    //         document.querySelector(".yearly-small1").style.visibility="hidden";
    //         document.querySelector(".yearly-small2").style.visibility="hidden";
    //         document.querySelector(".yearly-small3").style.visibility="hidden";
    //         if(xy == 0)costumer.time="monthly";
    //         if(xy==1)costumer.time="yearly";
    //         document.querySelector(".circle1").style.visibility="hidden";
    //         document.querySelector(".circle2").style.visibility="hidden";
    //         document.querySelector(".circle3").style.visibility="hidden";

    //     }
    //     currentSidebar=nextStage;
    // }
    // else{
    //     checkRequired([userName,email,number]);
    // }

    if((+nextStage.innerText)!=3 && t==0){
        document.querySelector(".circle1").style.visibility="hidden";
        document.querySelector(".circle2").style.visibility="hidden";
        document.querySelector(".circle3").style.visibility="hidden";
    }
    else if(t==0){
        if(icons.icon1==1 && icons.icon2==0 && icons.icon3==0) document.querySelector(".circle1").style.visibility="visible";
        if(icons.icon1==0 && icons.icon2==1 && icons.icon3==0) document.querySelector(".circle2").style.visibility="visible";       
        if(icons.icon1==0 && icons.icon2==0 && icons.icon3==1) document.querySelector(".circle3").style.visibility="visible";
        if(icons.icon1==1 && icons.icon2==1 && icons.icon3==0) {document.querySelector(".circle1").style.visibility="visible"; document.querySelector(".circle2").style.visibility="visible";}
        if(icons.icon1==1 && icons.icon2==0 && icons.icon3==1) {document.querySelector(".circle1").style.visibility="visible"; document.querySelector(".circle3").style.visibility="visible";}
        if(icons.icon1==0 && icons.icon2==1 && icons.icon3==1) {document.querySelector(".circle2").style.visibility="visible"; document.querySelector(".circle3").style.visibility="visible";}
        if(icons.icon1==1 && icons.icon2==1 && icons.icon3==1) {document.querySelector(".circle1").style.visibility="visible"; document.querySelector(".circle2").style.visibility="visible"; document.querySelector(".circle3").style.visibility="visible"; }
    }
    if(nextStage.classList.contains("number") && form1.username==1 && form1.email==1 && form1.number==1 && t==0){
        if((+nextStage.innerText) == 2 && x==0){
            console.log(13);
            document.querySelector(".window-"+(+currentSidebar.innerText)).style.visibility='hidden';
            document.querySelector(".window-"+(+nextStage.innerText)).style.visibility='visible';
            currentSidebar.style.backgroundColor="rgb(66, 66, 239)";
            e.target.style.backgroundColor = "rgb(41, 41, 223)";
            curentStep=+nextStage.innerText;
            curentForm=document.querySelector(".window-"+curentStep);
            if(xy == 0)costumer.time="monthly";
            if(xy==1)costumer.time="yearly";
            if(costumer.time=="monthly")
            {
                document.querySelector(".small1").style.visibility="visible";
                document.querySelector(".small2").style.visibility="visible";
                document.querySelector(".small3").style.visibility="visible";
                document.querySelector(".yearly-small1").style.visibility="hidden";
                document.querySelector(".yearly-small2").style.visibility="hidden";
                document.querySelector(".yearly-small3").style.visibility="hidden";
            }
            else{
                document.querySelector(".small1").style.visibility="visible";
                document.querySelector(".small2").style.visibility="visible";
                document.querySelector(".small3").style.visibility="visible";
                document.querySelector(".yearly-small1").style.visibility="visible";
                document.querySelector(".yearly-small2").style.visibility="visible";
                document.querySelector(".yearly-small3").style.visibility="visible";
            }
            // document.querySelector(".small1").style.visibility="visible";
            // document.querySelector(".small2").style.visibility="visible";
            // document.querySelector(".small3").style.visibility="visible";
            // document.querySelector(".yearly-small1").style.visibility="visible";
            // document.querySelector(".yearly-small2").style.visibility="visible";
            // document.querySelector(".yearly-small3").style.visibility="visible";
            // document.querySelector(".button-confirm").style.visibility="hidden";
            // document.querySelector(".button-back").style.visibility="visible";
            // document.querySelector(".button-next").style.visibility="visible";
        }
        else if((+nextStage.innerText) != 2 && x==0){
            if(xy == 0)costumer.time="monthly";
            if(xy==1)costumer.time="yearly";
            if(costumer.time=="monthly")
            {
                document.querySelector(".small1").style.visibility="visible";
                document.querySelector(".small2").style.visibility="visible";
                document.querySelector(".small3").style.visibility="visible";
                document.querySelector(".yearly-small1").style.visibility="hidden";
                document.querySelector(".yearly-small2").style.visibility="hidden";
                document.querySelector(".yearly-small3").style.visibility="hidden";
            }
            else{
                document.querySelector(".small1").style.visibility="visible";
                document.querySelector(".small2").style.visibility="visible";
                document.querySelector(".small3").style.visibility="visible";
                document.querySelector(".yearly-small1").style.visibility="visible";
                document.querySelector(".yearly-small2").style.visibility="visible";
                document.querySelector(".yearly-small3").style.visibility="visible";
            }
        } 
        if(x==1 || (+nextStage.innerText) == 2){
            if(xy == 0)costumer.time="monthly";
            if(xy==1)costumer.time="yearly";
            if((+nextStage.innerText) == 2 && costumer.time == "yearly"){
                console.log(50);
                document.querySelector(".small1").style.visibility="hidden";
                document.querySelector(".small2").style.visibility="hidden";
                document.querySelector(".small3").style.visibility="hidden";
                document.querySelector(".yearly-small1").style.visibility="visible";
                document.querySelector(".yearly-small2").style.visibility="visible";
                document.querySelector(".yearly-small3").style.visibility="visible";
            }else{
                 document.querySelector(".small1").style.visibility="hidden";
                document.querySelector(".small2").style.visibility="hidden";
                document.querySelector(".small3").style.visibility="hidden";
                document.querySelector(".yearly-small1").style.visibility="hidden";
                document.querySelector(".yearly-small2").style.visibility="hidden";
                document.querySelector(".yearly-small3").style.visibility="hidden";
            }
            
           

            document.querySelector(".window-"+(+currentSidebar.innerText)).style.visibility='hidden';
            document.querySelector(".window-"+(+nextStage.innerText)).style.visibility='visible';
            currentSidebar.style.backgroundColor="rgb(66, 66, 239)";
            e.target.style.backgroundColor = "rgb(41, 41, 223)";
            curentStep=+nextStage.innerText;
            curentForm=document.querySelector(".window-"+curentStep);
            if((+nextStage.innerText)!==1){
                document.querySelector(".button-confirm").style.visibility="hidden";
                document.querySelector(".button-back").style.visibility="visible";
                document.querySelector(".button-next").style.visibility="visible";
            
            }
            else {
                document.querySelector(".button-confirm").style.visibility="hidden";
                document.querySelector(".button-back").style.visibility="hidden";
                document.querySelector(".button-next").style.visibility="visible";
            }

            if(+nextStage.innerText == 4){
                document.querySelector(".button-confirm").style.visibility="visible";
                document.querySelector(".button-back").style.visibility="visible";
                document.querySelector(".button-next").style.visibility="hidden";
            }
            currentSidebar=nextStage;
        }
    }     
    else{
        checkRequired([userName,email,number]);
    }
    if(xy==1){
        console.log(777);
        document.querySelector(".payment-1 p").innerText=costumer.packetType;
        if(costumer.packetType=="$90/yr"){
            price1=90;
        }
        if(costumer.packetType=="$120/yr"){
            price1=120;
        }
        if(costumer.packetType=="$150/yr"){
            price1=150;
        }
        if(icons.icon1==1 && icons.icon2==0 && icons.icon3==0) {document.querySelector(".pp1").innerText="+$10/yr"; document.querySelector(".pp2").innerText="---"; document.querySelector(".pp3").innerText="---"; price=10;}
        if(icons.icon1==0 && icons.icon2==1 && icons.icon3==0) {document.querySelector(".pp1").innerText="---"; document.querySelector(".pp2").innerText="+$20/yr"; document.querySelector(".pp3").innerText="---"; price=20; }      
        if(icons.icon1==0 && icons.icon2==0 && icons.icon3==1) {document.querySelector(".pp1").innerText="---"; document.querySelector(".pp2").innerText="---"; document.querySelector(".pp3").innerText="+$20/yr"; price=20; }
        if(icons.icon1==1 && icons.icon2==1 && icons.icon3==0) {document.querySelector(".pp1").innerText="+$10/yr"; document.querySelector(".pp2").innerText="+$20/yr"; document.querySelector(".pp3").innerText="---"; price=30}
        if(icons.icon1==1 && icons.icon2==0 && icons.icon3==1) {document.querySelector(".pp1").innerText="+$10/yr"; document.querySelector(".pp2").innerText="---"; document.querySelector(".pp3").innerText="+$20/yr"; price=30}
        if(icons.icon1==0 && icons.icon2==1 && icons.icon3==1) {document.querySelector(".pp1").innerText="---"; document.querySelector(".pp2").innerText="+$20/yr"; document.querySelector(".pp3").innerText="+$20/yr"; price=40}
        if(icons.icon1==1 && icons.icon2==1 && icons.icon3==1) {document.querySelector(".pp1").innerText="+$10/yr"; document.querySelector(".pp2").innerText="+$20/yr"; document.querySelector(".pp3").innerText="+$20/yr"; price=50 } 
        if(icons.icon1==0 && icons.icon2==0 && icons.icon3==0) {document.querySelector(".pp1").innerText="---"; document.querySelector(".pp2").innerText="---"; document.querySelector(".pp3").innerText="---"; price=0}
       
        document.querySelector(".payment-3 h2").innerText="=$"+(price+price1)+"/yr";
    } 
    else if(xy==0){
        document.querySelector(".payment-1 p").innerText=costumer.packetType;
        if(costumer.packetType=="$9/mo"){
            price1=9;
        }
        if(costumer.packetType=="$12/mo"){
            price1=12;
        }
        if(costumer.packetType=="$15/mo"){
            price1=15;
        }
        if(icons.icon1==1 && icons.icon2==0 && icons.icon3==0) {document.querySelector(".pp1").innerText="+$1/mo"; document.querySelector(".pp2").innerText="+$1/mo---"; document.querySelector(".pp3").innerText="---";  price=1}
        if(icons.icon1==0 && icons.icon2==1 && icons.icon3==0) {document.querySelector(".pp1").innerText="---"; document.querySelector(".pp2").innerText="+$2/mo"; document.querySelector(".pp3").innerText="---"; price=2}      
        if(icons.icon1==0 && icons.icon2==0 && icons.icon3==1) {document.querySelector(".pp1").innerText="---"; document.querySelector(".pp2").innerText="---"; document.querySelector(".pp3").innerText="+$2/mo"; price=2}
        if(icons.icon1==1 && icons.icon2==1 && icons.icon3==0) {document.querySelector(".pp1").innerText="+$1/mo"; document.querySelector(".pp2").innerText="+$2/mo"; document.querySelector(".pp3").innerText="---"; price=3}
        if(icons.icon1==1 && icons.icon2==0 && icons.icon3==1) {document.querySelector(".pp1").innerText="+$1/mo"; document.querySelector(".pp2").innerText="---"; document.querySelector(".pp3").innerText="+$2/mo"; price=3}
        if(icons.icon1==0 && icons.icon2==1 && icons.icon3==1) {document.querySelector(".pp1").innerText="---"; document.querySelector(".pp2").innerText="+$2/mo"; document.querySelector(".pp3").innerText="+$2/mo"; price=4}
        if(icons.icon1==1 && icons.icon2==1 && icons.icon3==1) {document.querySelector(".pp1").innerText="+$1/mo"; document.querySelector(".pp2").innerText="+$2/mo"; document.querySelector(".pp3").innerText="+$2/mo"; price=5}
        if(icons.icon1==0 && icons.icon2==0 && icons.icon3==0) {document.querySelector(".pp1").innerText="---"; document.querySelector(".pp2").innerText="---"; document.querySelector(".pp3").innerText="---"; price=0}
        document.querySelector(".payment-3 h2").innerText="=$"+(price+price1)+"/mo";
    }
    

})

// show Error and show Success

function showError(input, message){
    var formControl = input.parentElement;
    formControl.className="form-control error";
    var small=formControl.querySelector("small");
    small.textContent=message;  
}
function showSuccess(input){
    var formControl=input.parentElement;
    formControl.className="form-control success";
}

// form checkRequired

function checkRequired(inputArr){
    for(var index=0; index<inputArr.length; index++){
        const element=inputArr[index];
        if(element.value.trim()===''){
            showError(element,"This field is required");
        }
        else{
            if(element==userName){
                form1.username=1;
                chekLength(userName,3,15);


            }
            if(element==email){
                form1.email=1;
                var re =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
                if(re.test(String(email.value).toLocaleLowerCase())){
                    showSuccess(element);
                    form1.email=1;
                } 
                else{
                    form1.email=0;
                    showError(email,"Emeil is not valid");
                }
            }
            if(element==number){
                form1.number=1;
                showSuccess(element);
            }
            
        }
    }
}

// length validation

function chekLength(input,min,max){
    if(input.value.length<min){
        showError(input," username must be at list "+min+" charachters");
    }
    else{
        if(input.value.length>max){
            showError(input," username must be less than "+max+" charachters")
        }
        else{
            showSuccess(input);
        }
        
    }
}

// userName.addEventListener('click',function(){
//     checkRequired([userName]);
    

// })

// form validation 

userName.addEventListener("keyup", function(event) {
    // event.preventDefault();
    if (event.keyCode === 13) {
        checkRequired([userName]);
        // console.log(event.keyCode);
        if(form1.username==1 && form1.email==1 && form1.number==1){
            document.querySelector(".button-confirm").style.visibility="hidden";
            document.querySelector(".button-back").style.visibility="visible";
            document.querySelector(".button-next").style.visibility="visible";
            costumer.username=userName.value;
            costumer.email=email.value;
            costumer.number=number.value;
            curentForm.style.visibility='hidden';
            document.querySelector(".window-"+2).style.visibility='visible';
            document.querySelector(".number"+1).style.backgroundColor="rgb(66, 66, 239)";
            document.querySelector(".number"+2).style.backgroundColor = "rgb(41, 41, 223)";
            curentStep++;
            curentForm=document.querySelector(".window-"+ curentStep);
        }
        email.focus();
    }   
    checkRequired([userName]);
    // if(event=="click"){
    //     console.log(1);
    // }
    
});

email.addEventListener("keyup", function(event) {
    // event.preventDefault();
    if (event.keyCode === 13) {
        checkRequired([email]);
        // console.log(event.keyCode);
        if(form1.username==1 && form1.email==1 && form1.number==1){
            document.querySelector(".button-confirm").style.visibility="hidden";
            document.querySelector(".button-back").style.visibility="visible";
            document.querySelector(".button-next").style.visibility="visible";
            costumer.username=userName.value;
            costumer.email=email.value;
            costumer.number=number.value;
            curentForm.style.visibility='hidden';
            document.querySelector(".window-"+2).style.visibility='visible'; 
            document.querySelector(".number"+1).style.backgroundColor="rgb(66, 66, 239)";
            document.querySelector(".number"+2).style.backgroundColor = "rgb(41, 41, 223)";
            curentStep++;
            curentForm=document.querySelector(".window-"+ curentStep);
        }
        else{
            number.focus();
        }
    }  
    if(form1.username==1 && form1.email==1 && form1.number==1){
            curentForm.style.visibility='hidden';
            document.querySelector(".window-"+2).style.visibility='visible';
        }
    // checkRequired([email]);
    

   

      
});
number.addEventListener("keyup", function(event) {
    // event.preventDefault();
    if (event.keyCode === 13) {
        checkRequired([number]);
        // console.log(event.keyCode);
        if(form1.username==1 && form1.email==1 && form1.number==1){
            document.querySelector(".button-confirm").style.visibility="hidden";
            document.querySelector(".button-back").style.visibility="visible";
            document.querySelector(".button-next").style.visibility="visible";
            costumer.username=userName.value;
            costumer.email=email.value;
            costumer.number=number.value;
            
            document.querySelector(".window-"+1).style.visibility='hidden';
            document.querySelector(".window-"+2).style.visibility='visible';
            document.querySelector(".number"+1).style.backgroundColor="rgb(66, 66, 239)";
            document.querySelector(".number"+2).style.backgroundColor = "rgb(41, 41, 223)";
            curentStep++;
            curentForm=document.querySelector(".window-"+ curentStep);
        }
        if(form1.username==0){
            userName.focus();
        }
        if(form1.username==1 && form1.email==0){
            email.focus();
        }
        
    }
    checkRequired([number]);
    
    
});

// Window 2 click Event

packetType.addEventListener('click',function(e){
    
    var packet=e.target;
    if(packet.classList.contains("packet") && x==0 ){
        packet.style.border="2px solid rgb(60, 60, 222)";
        x=1;
        y=e.target;
        z=y.className.slice(0,7);
        z="."+z+" .p-1";
        document.querySelector(".small1").style.visibility="hidden";
        document.querySelector(".small2").style.visibility="hidden";
        document.querySelector(".small3").style.visibility="hidden";
        costumer.packetType=document.querySelector(z).innerText;
    } else if(x==1 && e.target==y){
        e.target.style.border="1px solid rgb(164, 164, 164)"; 
        x=0;
        costumer.packetType=" "
    }
})
// Switch Button Click Event
var xy=0;
switchButton.addEventListener('click',function(e){
    console.log(e.target);
    if(e.target.classList.contains("checkbox")){
        if(xy == 0){
        console.log(5);
        document.querySelector(".packet1 .p-1").innerText="$90/yr";
        document.querySelector(".packet2 .p-1").innerText="$120/yr";
        document.querySelector(".packet3 .p-1").innerText="$150/yr";
        document.querySelector(".yearly-small1").style.visibility="visible";
        document.querySelector(".yearly-small2").style.visibility="visible";
        document.querySelector(".yearly-small3").style.visibility="visible";
        document.querySelector(".costume-options1 .p-7").innerText="+$10/yr";
        document.querySelector(".costume-options2 .p-7").innerText="+$20/yr";
        document.querySelector(".costume-options3 .p-7").innerText="+$20/yr";
        costumer.time="yearly;"
        costumer.packetType=document.querySelector(z).innerText;

        xy = 1;
        } 
        else if(xy == 1){
            console.log(6);
            document.querySelector(".packet1 .p-1").innerText="$9/mo";
            document.querySelector(".packet2 .p-1").innerText="$12/mo";
            document.querySelector(".packet3 .p-1").innerText="$15/mo";
            document.querySelector(".yearly-small1").style.visibility="hidden";
            document.querySelector(".yearly-small2").style.visibility="hidden";
            document.querySelector(".yearly-small3").style.visibility="hidden";
            document.querySelector(".costume-options1 .p-7").innerText="+$1/yr";
            document.querySelector(".costume-options2 .p-7").innerText="+$2/yr";
            document.querySelector(".costume-options3 .p-7").innerText="+$2/yr";
            costumer.time="monthly";
            costumer.packetType=document.querySelector(z).innerText;

            xy=0;
        }
    }
    
})

// Window-3 Click Event
var x1=0;
var y1;
// var circle=0;
page3.addEventListener('click',function(e){
    console.log(e.target);
    // circle=e.target.className.slice(31,32);
    if(e.target.classList.contains("costume-options")){
        if(e.target.classList.contains("costume-options") && e.target.style.border != "2px solid rgb(60, 60, 222)"){
            e.target.style.border="2px solid rgb(60, 60, 222)";
            y1=e.target;
            document.querySelector(".circle"+(+e.target.className.slice(31,32))).style.visibility="visible";
            if((+e.target.className.slice(31,32)) == 1){ costumer.onlineService = 1; icons.icon1=1 }
            if((+e.target.className.slice(31,32)) == 2){ costumer.largerStorage = 1; icons.icon2=1}
            if((+e.target.className.slice(31,32)) == 3){ costumer.costomizableProfile = 1; icons.icon3=1}
        } else
            if(e.target.classList.contains("costume-options") && e.target.style.border == "2px solid rgb(60, 60, 222)"){
                e.target.style.border="1.5px solid rgb(212, 207, 207)"
                document.querySelector(".circle"+(+e.target.className.slice(31,32))).style.visibility="hidden";
                if((+e.target.className.slice(31,32)) == 1){ costumer.onlineService = 0; icons.icon1=0 }
                if((+e.target.className.slice(31,32)) == 2){ costumer.largerStorage = 0; icons.icon2=0}
                if((+e.target.className.slice(31,32)) == 3){ costumer.costomizableProfile = 0; icons.icon3=0}
            }       

    }
    
})


//  Buttont-next click event

buttonNext.addEventListener('click',function(){
    if(curentStep != 2){
        document.querySelector(".circle1").style.visibility="hidden";
        document.querySelector(".circle2").style.visibility="hidden";
        document.querySelector(".circle3").style.visibility="hidden";
    }
    if(form1.username==1 && form1.email==1 && form1.number==1 && curentStep==1){
        costumer.username=userName.value;
        costumer.email=email.value;
        costumer.number=number.value;
        steps.push(curentStep);
        curentStep++;
        curentForm.style.visibility='hidden';
        document.querySelector(".window-" + curentStep).style.visibility='visible'; 
        document.querySelector(".number" + 1).style.backgroundColor="rgb(66, 66, 239)";
        document.querySelector(".number" + curentStep).style.backgroundColor = "rgb(41, 41, 223)";
        document.querySelector(".button-confirm").style.visibility="hidden";
        document.querySelector(".button-back").style.visibility="visible";
        curentForm=document.querySelector(".window-"+curentStep);
        if(xy == 0)costumer.time="monthly";
        if(xy==1)costumer.time="yearly";
        if(x!=0){
            if(costumer.time=="monthly")
            {
                document.querySelector(".small1").style.visibility="hidden";
                document.querySelector(".small2").style.visibility="hidden";
                document.querySelector(".small3").style.visibility="hidden";
                document.querySelector(".yearly-small1").style.visibility="hidden";
                document.querySelector(".yearly-small2").style.visibility="hidden";
                document.querySelector(".yearly-small3").style.visibility="hidden";
            }
            else{
                document.querySelector(".small1").style.visibility="hidden";
                document.querySelector(".small2").style.visibility="hidden";
                document.querySelector(".small3").style.visibility="hidden";
                document.querySelector(".yearly-small1").style.visibility="visible";
                document.querySelector(".yearly-small2").style.visibility="visible";
                document.querySelector(".yearly-small3").style.visibility="visible";
            }
        }
        else{
            if(costumer.time=="monthly")
            {
                document.querySelector(".small1").style.visibility="hidden";
                document.querySelector(".small2").style.visibility="hidden";
                document.querySelector(".small3").style.visibility="hidden";
                document.querySelector(".yearly-small1").style.visibility="hidden";
                document.querySelector(".yearly-small2").style.visibility="hidden";
                document.querySelector(".yearly-small3").style.visibility="hidden";
            }
            else{
                document.querySelector(".small1").style.visibility="hidden";
                document.querySelector(".small2").style.visibility="hidden";
                document.querySelector(".small3").style.visibility="hidden";
                document.querySelector(".yearly-small1").style.visibility="visible";
                document.querySelector(".yearly-small2").style.visibility="visible";
                document.querySelector(".yearly-small3").style.visibility="visible";
            }
        } 
    } else if(curentStep == 2 ){
        if(xy == 0)costumer.time="monthly";
        if(xy==1)costumer.time="yearly";
        if(x!=0){
            costumer.packetType=document.querySelector(z).innerText;
            document.querySelector(".number"+curentStep).style.backgroundColor = "rgb(66, 66, 239)";
            document.querySelector(".number"+(curentStep+1)).style.backgroundColor = "rgb(41, 41, 223)";
            document.querySelector(".button-confirm").style.visibility="hidden";
            document.querySelector(".button-back").style.visibility="visible";
            steps.push(curentStep);
            curentForm.style.visibility='hidden';
            curentStep++;
            curentForm=document.querySelector(".window-"+curentStep);
            curentForm.style.visibility='visible';

            if(costumer.time=="monthly")
            {
                document.querySelector(".small1").style.visibility="hidden";
                document.querySelector(".small2").style.visibility="hidden";
                document.querySelector(".small3").style.visibility="hidden";
                document.querySelector(".yearly-small1").style.visibility="hidden";
                document.querySelector(".yearly-small2").style.visibility="hidden";
                document.querySelector(".yearly-small3").style.visibility="hidden";
            }
            else{
                document.querySelector(".small1").style.visibility="hidden";
                document.querySelector(".small2").style.visibility="hidden";
                document.querySelector(".small3").style.visibility="hidden";
                document.querySelector(".yearly-small1").style.visibility="hidden";
                document.querySelector(".yearly-small2").style.visibility="hidden";
                document.querySelector(".yearly-small3").style.visibility="hidden";
            }
        }
        else{
            if(costumer.time=="monthly")
            {
                document.querySelector(".small1").style.visibility="visible";
                document.querySelector(".small2").style.visibility="visible";
                document.querySelector(".small3").style.visibility="visible";
                document.querySelector(".yearly-small1").style.visibility="hidden";
                document.querySelector(".yearly-small2").style.visibility="hidden";
                document.querySelector(".yearly-small3").style.visibility="hidden";
                document.querySelector(".circle1").style.visibility="hidden";
                document.querySelector(".circle2").style.visibility="hidden";
                document.querySelector(".circle3").style.visibility="hidden";
            }
            else{
                document.querySelector(".small1").style.visibility="visible";
                document.querySelector(".small2").style.visibility="visible";
                document.querySelector(".small3").style.visibility="visible";
                document.querySelector(".yearly-small1").style.visibility="visible";
                document.querySelector(".yearly-small2").style.visibility="visible";
                document.querySelector(".yearly-small3").style.visibility="visible";
                document.querySelector(".circle1").style.visibility="hidden";
                document.querySelector(".circle2").style.visibility="hidden";
                document.querySelector(".circle3").style.visibility="hidden";
            }
        } 
        if(x==1){
            if(icons.icon1==1 && icons.icon2==0 && icons.icon3==0) document.querySelector(".circle1").style.visibility="visible";
            if(icons.icon1==0 && icons.icon2==1 && icons.icon3==0) document.querySelector(".circle2").style.visibility="visible";       
            if(icons.icon1==0 && icons.icon2==0 && icons.icon3==1) document.querySelector(".circle3").style.visibility="visible";
            if(icons.icon1==1 && icons.icon2==1 && icons.icon3==0) {document.querySelector(".circle1").style.visibility="visible"; document.querySelector(".circle2").style.visibility="visible";}
            if(icons.icon1==1 && icons.icon2==0 && icons.icon3==1) {document.querySelector(".circle1").style.visibility="visible"; document.querySelector(".circle3").style.visibility="visible";}
            if(icons.icon1==0 && icons.icon2==1 && icons.icon3==1) {document.querySelector(".circle2").style.visibility="visible"; document.querySelector(".circle3").style.visibility="visible";}
            if(icons.icon1==1 && icons.icon2==1 && icons.icon3==1) {document.querySelector(".circle1").style.visibility="visible"; document.querySelector(".circle2").style.visibility="visible"; document.querySelector(".circle3").style.visibility="visible"; } 
        }
          
    } else if(curentStep == 3 ){
        document.querySelector(".number"+curentStep).style.backgroundColor = "rgb(66, 66, 239)";
        document.querySelector(".number"+(curentStep+1)).style.backgroundColor = "rgb(41, 41, 223)";
        document.querySelector(".button-confirm").style.visibility="visible";
        document.querySelector(".button-back").style.visibility="visible";
        document.querySelector(".button-next").style.visibility="hidden";
        curentForm.style.visibility='hidden';
        curentStep++;
        document.querySelector(".window-" + curentStep).style.visibility='visible';
        curentForm=document.querySelector(".window-"+curentStep);
        
    }

         checkRequired([userName,email,number]);
         if(xy==1){
            console.log(777);
            document.querySelector(".payment-1 p").innerText=costumer.packetType;
            if(costumer.packetType=="$90/yr"){
                price1=90;
            }
            if(costumer.packetType=="$120/yr"){
                price1=120;
            }
            if(costumer.packetType=="$150/yr"){
                price1=150;
            }
            if(icons.icon1==1 && icons.icon2==0 && icons.icon3==0) {document.querySelector(".pp1").innerText="+$10/yr"; document.querySelector(".pp2").innerText="---"; document.querySelector(".pp3").innerText="---"; price=10;}
            if(icons.icon1==0 && icons.icon2==1 && icons.icon3==0) {document.querySelector(".pp1").innerText="---"; document.querySelector(".pp2").innerText="+$20/yr"; document.querySelector(".pp3").innerText="---"; price=20; }      
            if(icons.icon1==0 && icons.icon2==0 && icons.icon3==1) {document.querySelector(".pp1").innerText="---"; document.querySelector(".pp2").innerText="---"; document.querySelector(".pp3").innerText="+$20/yr"; price=20; }
            if(icons.icon1==1 && icons.icon2==1 && icons.icon3==0) {document.querySelector(".pp1").innerText="+$10/yr"; document.querySelector(".pp2").innerText="+$20/yr"; document.querySelector(".pp3").innerText="---"; price=30}
            if(icons.icon1==1 && icons.icon2==0 && icons.icon3==1) {document.querySelector(".pp1").innerText="+$10/yr"; document.querySelector(".pp2").innerText="---"; document.querySelector(".pp3").innerText="+$20/yr"; price=30}
            if(icons.icon1==0 && icons.icon2==1 && icons.icon3==1) {document.querySelector(".pp1").innerText="---"; document.querySelector(".pp2").innerText="+$20/yr"; document.querySelector(".pp3").innerText="+$20/yr"; price=40}
            if(icons.icon1==1 && icons.icon2==1 && icons.icon3==1) {document.querySelector(".pp1").innerText="+$10/yr"; document.querySelector(".pp2").innerText="+$20/yr"; document.querySelector(".pp3").innerText="+$20/yr"; price=50 } 
            if(icons.icon1==0 && icons.icon2==0 && icons.icon3==0) {document.querySelector(".pp1").innerText="---"; document.querySelector(".pp2").innerText="---"; document.querySelector(".pp3").innerText="---"; price=0}
            document.querySelector(".payment-3 h2").innerText="=$"+(price+price1)+"/yr";
        } 
        else if(xy==0){
            console.log(6666);
            document.querySelector(".payment-1 p").innerText=costumer.packetType;
            if(costumer.packetType=="$9/mo"){
                price1=9;
            }
            if(costumer.packetType=="$12/mo"){
                price1=12;
            }
            if(costumer.packetType=="$15/mo"){
                price1=15;
            }
            if(icons.icon1==1 && icons.icon2==0 && icons.icon3==0) {document.querySelector(".pp1").innerText="+$1/mo"; document.querySelector(".pp2").innerText="+$1/mo---"; document.querySelector(".pp3").innerText="---";  price=1}
            if(icons.icon1==0 && icons.icon2==1 && icons.icon3==0) {document.querySelector(".pp1").innerText="---"; document.querySelector(".pp2").innerText="+$2/mo"; document.querySelector(".pp3").innerText="---"; price=2}      
            if(icons.icon1==0 && icons.icon2==0 && icons.icon3==1) {document.querySelector(".pp1").innerText="---"; document.querySelector(".pp2").innerText="---"; document.querySelector(".pp3").innerText="+$2/mo"; price=2}
            if(icons.icon1==1 && icons.icon2==1 && icons.icon3==0) {document.querySelector(".pp1").innerText="+$1/mo"; document.querySelector(".pp2").innerText="+$2/mo"; document.querySelector(".pp3").innerText="---"; price=3}
            if(icons.icon1==1 && icons.icon2==0 && icons.icon3==1) {document.querySelector(".pp1").innerText="+$1/mo"; document.querySelector(".pp2").innerText="---"; document.querySelector(".pp3").innerText="+$2/mo"; price=3}
            if(icons.icon1==0 && icons.icon2==1 && icons.icon3==1) {document.querySelector(".pp1").innerText="---"; document.querySelector(".pp2").innerText="+$2/mo"; document.querySelector(".pp3").innerText="+$2/mo"; price=4}
            if(icons.icon1==1 && icons.icon2==1 && icons.icon3==1) {document.querySelector(".pp1").innerText="+$1/mo"; document.querySelector(".pp2").innerText="+$2/mo"; document.querySelector(".pp3").innerText="+$2/mo"; price=5}
            if(icons.icon1==0 && icons.icon2==0 && icons.icon3==0) {document.querySelector(".pp1").innerText="---"; document.querySelector(".pp2").innerText="---"; document.querySelector(".pp3").innerText="---"; price=0}
            document.querySelector(".payment-3 h2").innerText="=$"+(price+price1)+"/mo";
        }
})

buttonBack.addEventListener('click',function(e){

    if(curentStep == 2){
        document.querySelector(".number"+curentStep).style.backgroundColor = "rgb(66, 66, 239)";
        document.querySelector(".number"+(curentStep-1)).style.backgroundColor = "rgb(41, 41, 223)";
        document.querySelector(".button-confirm").style.visibility="hidden";
        document.querySelector(".button-back").style.visibility="hidden";
        document.querySelector(".button-next").style.visibility="visible";
        curentForm.style.visibility='hidden';
        curentStep--;
        curentForm=document.querySelector(".window-"+curentStep);
        curentForm.style.visibility='visible';
        document.querySelector(".small1").style.visibility="hidden";
        document.querySelector(".small2").style.visibility="hidden";
        document.querySelector(".small3").style.visibility="hidden";
        document.querySelector(".yearly-small1").style.visibility="hidden";
        document.querySelector(".yearly-small2").style.visibility="hidden";
        document.querySelector(".yearly-small3").style.visibility="hidden";

    } else if(curentStep == 3){
        if(xy == 0)costumer.time="monthly";
        if(xy==1)costumer.time="yearly";
        if(x!=0){
            costumer.packetType=document.querySelector(z).innerText;
            document.querySelector(".number"+curentStep).style.backgroundColor = "rgb(66, 66, 239)";
            document.querySelector(".number"+(curentStep-1)).style.backgroundColor = "rgb(41, 41, 223)";
            document.querySelector(".button-confirm").style.visibility="hidden";
            document.querySelector(".button-back").style.visibility="visible";
            document.querySelector(".button-next").style.visibility="visible";
            steps.push(curentStep);
            curentForm.style.visibility='hidden';
            curentStep--;
            curentForm=document.querySelector(".window-"+curentStep);
            curentForm.style.visibility='visible';

            if(costumer.time=="monthly")
            {
                document.querySelector(".small1").style.visibility="hidden";
                document.querySelector(".small2").style.visibility="hidden";
                document.querySelector(".small3").style.visibility="hidden";
                document.querySelector(".yearly-small1").style.visibility="hidden";
                document.querySelector(".yearly-small2").style.visibility="hidden";
                document.querySelector(".yearly-small3").style.visibility="hidden";
            }
            else{
                document.querySelector(".small1").style.visibility="hidden";
                document.querySelector(".small2").style.visibility="hidden";
                document.querySelector(".small3").style.visibility="hidden";
                document.querySelector(".yearly-small1").style.visibility="visible";
                document.querySelector(".yearly-small2").style.visibility="visible";
                document.querySelector(".yearly-small3").style.visibility="visible";
            }
        }
        else{
            if(costumer.time=="monthly")
            {
                document.querySelector(".small1").style.visibility="visible";
                document.querySelector(".small2").style.visibility="visible";
                document.querySelector(".small3").style.visibility="visible";
                document.querySelector(".yearly-small1").style.visibility="hidden";
                document.querySelector(".yearly-small2").style.visibility="hidden";
                document.querySelector(".yearly-small3").style.visibility="hidden";
            }
            else{
                document.querySelector(".small1").style.visibility="visible";
                document.querySelector(".small2").style.visibility="visible";
                document.querySelector(".small3").style.visibility="visible";
                document.querySelector(".yearly-small1").style.visibility="visible";
                document.querySelector(".yearly-small2").style.visibility="visible";
                document.querySelector(".yearly-small3").style.visibility="visible";
            }
        }

        document.querySelector(".circle1").style.visibility="hidden";
        document.querySelector(".circle2").style.visibility="hidden";
        document.querySelector(".circle3").style.visibility="hidden";
    } else if(curentStep == 4){
        // costumer.packetType=document.querySelector(z).innerText;
        document.querySelector(".number"+curentStep).style.backgroundColor = "rgb(66, 66, 239)";
        document.querySelector(".number"+(curentStep-1)).style.backgroundColor = "rgb(41, 41, 223)";
        document.querySelector(".button-confirm").style.visibility="hidden";
        document.querySelector(".button-back").style.visibility="visible";
        document.querySelector(".button-next").style.visibility="visible";
        steps.push(curentStep);
        curentForm.style.visibility='hidden';
        curentStep--;
        curentForm=document.querySelector(".window-"+curentStep);
        curentForm.style.visibility='visible';
        if(icons.icon1==1 && icons.icon2==0 && icons.icon3==0) document.querySelector(".circle1").style.visibility="visible";
        if(icons.icon1==0 && icons.icon2==1 && icons.icon3==0) document.querySelector(".circle2").style.visibility="visible";       
        if(icons.icon1==0 && icons.icon2==0 && icons.icon3==1) document.querySelector(".circle3").style.visibility="visible";
        if(icons.icon1==1 && icons.icon2==1 && icons.icon3==0) {document.querySelector(".circle1").style.visibility="visible"; document.querySelector(".circle2").style.visibility="visible";}
        if(icons.icon1==1 && icons.icon2==0 && icons.icon3==1) {document.querySelector(".circle1").style.visibility="visible"; document.querySelector(".circle3").style.visibility="visible";}
        if(icons.icon1==0 && icons.icon2==1 && icons.icon3==1) {document.querySelector(".circle2").style.visibility="visible"; document.querySelector(".circle3").style.visibility="visible";}
        if(icons.icon1==1 && icons.icon2==1 && icons.icon3==1) {document.querySelector(".circle1").style.visibility="visible"; document.querySelector(".circle2").style.visibility="visible"; document.querySelector(".circle3").style.visibility="visible"; } 
    }

    if(xy==1){
        console.log(777);
        document.querySelector(".payment-1 p").innerText=costumer.packetType;
        if(costumer.packetType=="$90/yr"){
            price1=90;
        }
        if(costumer.packetType=="$120/yr"){
            price1=120;
        }
        if(costumer.packetType=="$150/yr"){
            price1=150;
        }
        if(icons.icon1==1 && icons.icon2==0 && icons.icon3==0) {document.querySelector(".pp1").innerText="+$10/yr"; document.querySelector(".pp2").innerText="---"; document.querySelector(".pp3").innerText="---"; price=10;}
        if(icons.icon1==0 && icons.icon2==1 && icons.icon3==0) {document.querySelector(".pp1").innerText="---"; document.querySelector(".pp2").innerText="+$20/yr"; document.querySelector(".pp3").innerText="---"; price=20; }      
        if(icons.icon1==0 && icons.icon2==0 && icons.icon3==1) {document.querySelector(".pp1").innerText="---"; document.querySelector(".pp2").innerText="---"; document.querySelector(".pp3").innerText="+$20/yr"; price=20; }
        if(icons.icon1==1 && icons.icon2==1 && icons.icon3==0) {document.querySelector(".pp1").innerText="+$10/yr"; document.querySelector(".pp2").innerText="+$20/yr"; document.querySelector(".pp3").innerText="---"; price=30}
        if(icons.icon1==1 && icons.icon2==0 && icons.icon3==1) {document.querySelector(".pp1").innerText="+$10/yr"; document.querySelector(".pp2").innerText="---"; document.querySelector(".pp3").innerText="+$20/yr"; price=30}
        if(icons.icon1==0 && icons.icon2==1 && icons.icon3==1) {document.querySelector(".pp1").innerText="---"; document.querySelector(".pp2").innerText="+$20/yr"; document.querySelector(".pp3").innerText="+$20/yr"; price=40}
        if(icons.icon1==1 && icons.icon2==1 && icons.icon3==1) {document.querySelector(".pp1").innerText="+$10/yr"; document.querySelector(".pp2").innerText="+$20/yr"; document.querySelector(".pp3").innerText="+$20/yr"; price=50 } 
        if(icons.icon1==0 && icons.icon2==0 && icons.icon3==0) {document.querySelector(".pp1").innerText="---"; document.querySelector(".pp2").innerText="---"; document.querySelector(".pp3").innerText="---"; price=0}
        document.querySelector(".payment-3 h2").innerText="=$"+(price+price1)+"/yr";
    } 
    else if(xy==0){
        console.log(6666);
        document.querySelector(".payment-1 p").innerText=costumer.packetType;
        if(costumer.packetType=="$9/mo"){
            price1=9;
        }
        if(costumer.packetType=="$12/mo"){
            price1=12;
        }
        if(costumer.packetType=="$15/mo"){
            price1=15;
        }
        if(icons.icon1==1 && icons.icon2==0 && icons.icon3==0) {document.querySelector(".pp1").innerText="+$1/mo"; document.querySelector(".pp2").innerText="+$1/mo---"; document.querySelector(".pp3").innerText="---";  price=1}
        if(icons.icon1==0 && icons.icon2==1 && icons.icon3==0) {document.querySelector(".pp1").innerText="---"; document.querySelector(".pp2").innerText="+$2/mo"; document.querySelector(".pp3").innerText="---"; price=2}      
        if(icons.icon1==0 && icons.icon2==0 && icons.icon3==1) {document.querySelector(".pp1").innerText="---"; document.querySelector(".pp2").innerText="---"; document.querySelector(".pp3").innerText="+$2/mo"; price=2}
        if(icons.icon1==1 && icons.icon2==1 && icons.icon3==0) {document.querySelector(".pp1").innerText="+$1/mo"; document.querySelector(".pp2").innerText="+$2/mo"; document.querySelector(".pp3").innerText="---"; price=3}
        if(icons.icon1==1 && icons.icon2==0 && icons.icon3==1) {document.querySelector(".pp1").innerText="+$1/mo"; document.querySelector(".pp2").innerText="---"; document.querySelector(".pp3").innerText="+$2/mo"; price=3}
        if(icons.icon1==0 && icons.icon2==1 && icons.icon3==1) {document.querySelector(".pp1").innerText="---"; document.querySelector(".pp2").innerText="+$2/mo"; document.querySelector(".pp3").innerText="+$2/mo"; price=4}
        if(icons.icon1==1 && icons.icon2==1 && icons.icon3==1) {document.querySelector(".pp1").innerText="+$1/mo"; document.querySelector(".pp2").innerText="+$2/mo"; document.querySelector(".pp3").innerText="+$2/mo"; price=5}
        if(icons.icon1==0 && icons.icon2==0 && icons.icon3==0) {document.querySelector(".pp1").innerText="---"; document.querySelector(".pp2").innerText="---"; document.querySelector(".pp3").innerText="---"; price=0}
        document.querySelector(".payment-3 h2").innerText="=$"+(price+price1)+"/mo";

    }
})

change.addEventListener('click',function(e){
    document.querySelector(".window-"+4).style.visibility="hidden";
    document.querySelector(".window-"+2).style.visibility="visible";
    document.querySelector(".number" + 4).style.backgroundColor="rgb(66, 66, 239)";
    document.querySelector(".number" + 2 ).style.backgroundColor = "rgb(41, 41, 223)";
    if(x!=0){
        document.querySelector(".button-confirm").style.visibility="hidden";
        document.querySelector(".button-back").style.visibility="visible";
        document.querySelector(".button-next").style.visibility="visible";
        curentStep=2;
        curentForm=document.querySelector(".window-"+curentStep);
        if(costumer.time=="monthly")
        {
            document.querySelector(".small1").style.visibility="hidden";
            document.querySelector(".small2").style.visibility="hidden";
            document.querySelector(".small3").style.visibility="hidden";
            document.querySelector(".yearly-small1").style.visibility="hidden";
            document.querySelector(".yearly-small2").style.visibility="hidden";
            document.querySelector(".yearly-small3").style.visibility="hidden";
        }
        else{
            document.querySelector(".small1").style.visibility="hidden";
            document.querySelector(".small2").style.visibility="hidden";
            document.querySelector(".small3").style.visibility="hidden";
            document.querySelector(".yearly-small1").style.visibility="visible";
            document.querySelector(".yearly-small2").style.visibility="visible";
            document.querySelector(".yearly-small3").style.visibility="visible";
        }
    }
    else{
        if(costumer.time=="monthly")
        {
            document.querySelector(".small1").style.visibility="visible";
            document.querySelector(".small2").style.visibility="visible";
            document.querySelector(".small3").style.visibility="visible";
            document.querySelector(".yearly-small1").style.visibility="hidden";
            document.querySelector(".yearly-small2").style.visibility="hidden";
            document.querySelector(".yearly-small3").style.visibility="hidden";
        }
        else{
            document.querySelector(".small1").style.visibility="visible";
            document.querySelector(".small2").style.visibility="visible";
            document.querySelector(".small3").style.visibility="visible";
            document.querySelector(".yearly-small1").style.visibility="visible";
            document.querySelector(".yearly-small2").style.visibility="visible";
            document.querySelector(".yearly-small3").style.visibility="visible";
        }
    } 
})

confirm.addEventListener('click',function(e){
    document.querySelector(".window-4").style.visibility="hidden";
    document.querySelector(".window-5").style.visibility="visible";
    document.querySelector(".button-confirm").style.visibility="hidden";
    document.querySelector(".button-back").style.visibility="hidden";
    document.querySelector(".button-next").style.visibility="hidden";
    document.querySelector(".number4").style.backgroundColor="rgb(66, 66, 239)";
    t=1;
})
