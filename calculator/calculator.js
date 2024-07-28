let string="";
      let buttons=document.querySelectorAll(".btn");

      Array.from(buttons).forEach((button)=>{
        button.addEventListener("click",(e)=>{
            
            
            if(e.target.value=="="){
                string=eval(string);
                display.innerText=string;
            }
            else if(e.target.value=="AC"){
               
                
                display.innerText="";
            }
            else if(e.target.value=="+/-"){
                string=string.substring(0,string.length-1);
                display.innerText=string;
                
            }
            else{
                string=string + e.target.value;
            let display=document.querySelector(".display");
            display.innerText=string;

            }
           
        });
      });