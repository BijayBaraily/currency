let dropdowns=document.querySelectorAll(".dropdown select");
fromcurr=document.querySelector(".from select");
tocurr=document.querySelector(".to select");

for(select of dropdowns){
    for(curcode in countryList){
        let newopt=document.createElement('option');
        newopt.innerText=curcode;
        newopt.value=curcode;
        if(select.name==="from" && curcode==="NPR"){
            newopt.selected="selected";
        }
        else if(select.name==="to" && curcode==="INR"){
            newopt.selected="selected";
        }
        select.append(newopt);

    }
    select.addEventListener("click",(evt)=>{
        updateflag(evt.target);

    });
}
const updateflag=(element)=>{
   cuncode=countryList[element.value];
   
  let img= element.parentElement.querySelector("img");
  img.src=`https://flagsapi.com/${cuncode}/flat/64.png`;
   

};
let newbtn=document.querySelector("button");
newbtn.addEventListener("click",(evt)=>{
    evt.preventDefault();
    updateexchangerate();
  

   


});
let updateexchangerate=async()=>{
    let amount=document.querySelector(".amount input");
    let amtval=amount.value;
    if(amtval==="" || amtval<1){
        amtval=1;
        amount.value="1";
    }
    let from=fromcurr.value.toLowerCase();
    let to=tocurr.value.toLowerCase();
    let url=`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${from}.json`;
    let data=await (await fetch(url)).json();
    finalval=data[from][to];
    let msg=document.querySelector(".msg");
    msg.innerText=`${amtval} ${fromcurr.value} = ${amtval*finalval} ${tocurr.value} `;
    msg.style.padding="15px";
};
window.addEventListener("load",()=>{
    updateexchangerate();

});