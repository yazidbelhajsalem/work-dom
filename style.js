var addtshirt = document.getElementById("addtshirt");
var addaddpantalon = document.getElementById("addpantalon");
var addchaussure = document.getElementById("addchaussure");
var prixUnitaire = "";
var clear = document.getElementById("cl");
var click =document.getElementById("click")
function item1() {

      document.getElementById("imgvide").src = document.getElementById("img1").src;
      document.getElementById("total").innerHTML = document.getElementById("prix1").innerHTML

      prixUnitaire = document.getElementById("prix1").innerHTML;
    
       
    }
    function plus(){
        
    document.getElementById("count").innerHTML++;
       var total=prixUnitaire*document.getElementById("count").innerHTML;
   document.getElementById("total").innerHTML=total
      
    }
    function moins(){
        if(document.getElementById("count").innerHTML>1){
document.getElementById("count").innerHTML--;
       
}

total=prixUnitaire*document.getElementById("count").innerHTML
document.getElementById("total").innerHTML=total
}
      
    
    addtshirt.addEventListener("click", ()=> item1());

    function item2() {

        document.getElementById("imgvide").src = document.getElementById("img2").src;
        document.getElementById("total").innerHTML = document.getElementById("prix2").innerHTML
  
        prixUnitaire = document.getElementById("prix2").innerHTML;
      
         
      }
      function plus(){
          
      document.getElementById("count").innerHTML++;
         var total=prixUnitaire*document.getElementById("count").innerHTML;
     document.getElementById("total").innerHTML=total
        
      }
      function moins(){
          if(document.getElementById("count").innerHTML>1){
  document.getElementById("count").innerHTML--;
         
  }
  
  total=prixUnitaire*document.getElementById("count").innerHTML
  document.getElementById("total").innerHTML=total
  }
        
      
  addaddpantalon.addEventListener("click", ()=> item2());
  function item3() {

    document.getElementById("imgvide").src = document.getElementById("img3").src;
    document.getElementById("total").innerHTML = document.getElementById("prix3").innerHTML

    prixUnitaire = document.getElementById("prix").innerHTML;
  
     
  }
  function plus(){
      
  document.getElementById("count").innerHTML++;
     var total=prixUnitaire*document.getElementById("count").innerHTML;
 document.getElementById("total").innerHTML=total
    
  }
  function moins(){
      if(document.getElementById("count").innerHTML>1){
document.getElementById("count").innerHTML--;
     
}

total=prixUnitaire*document.getElementById("count").innerHTML
document.getElementById("total").innerHTML=total
}
    
  
addchaussure.addEventListener("click", ()=> item3());
function clean(){
    document.getElementById("imgvide").src =""
    document.getElementById("total").innerHTML=""
    document.getElementById("count").innerHTML="1"
}
cl.addEventListener("click", ()=> clean());
function coeur(){
     var kalb = document.getElementById("coeur")
     var m3ebi = "fa-regular fa-heart";

     var feragh = "fas fa-heart";
     if(kalb.className == m3ebi){
        console.log("m3ebi",feragh);
        document.getElementById("coeur").className = feragh

     }else{
        console.log("feragh",m3ebi);

        document.getElementById("coeur").className = "fa-regular fa-heart"
     }


}
