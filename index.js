var disapearArr = [];
function disapear(obj) {
  var id = obj.id;
  var con = "#"+id+" "+"p";
  disapearArr.push(document.querySelector(con).textContent);
document.querySelector(con).textContent="";

check();
}

function check(){
  var emptyAll;
  var s = document.getElementsByClassName("square");
  for(var i=0;i<s.length;i++)
  {
    id = s[i].id;
    con = "#"+id+" "+"p";
    if(document.querySelector(con).textContent=="")
    {
      continue;

    }
    else{
      return;
    }
  }
  if(document.querySelector("#"+s[(s.length-1)].id+" p").textContent=="")
  alert("The order in which the numbers disapear is "+disapearArr);
}
function change(){
changeColor("#one");
changeColor("#two");
changeColor("#three");
changeColor("#four");
changeColor("#five");
changeColor("#six");
changeColor("#seven");
changeColor("#eight");
changeColor("#nine");

changeText("#one");
changeText("#two");
changeText("#three");
changeText("#four");
changeText("#five");
changeText("#six");
changeText("#seven");
changeText("#eight");
changeText("#nine");

}
  function changeColor(id){
    var num = Math.floor(Math.random() * 9) + 1;
      if (num == 1) {
        document.querySelector(id).style.backgroundColor='red';
      }
      else if (num == 2) {
        document.querySelector(id).style.backgroundColor='orange';
      }
      else if (num == 3) {
        document.querySelector(id).style.backgroundColor='yellow';
      }
      else if (num == 4) {
        document.querySelector(id).style.backgroundColor='green';
      }
      else if (num == 5) {
        document.querySelector(id).style.backgroundColor='lightblue';
      }
      else if (num == 6) {
        document.querySelector(id).style.backgroundColor='blue';
      }
      else if (num == 7) {
        document.querySelector(id).style.backgroundColor='white';
      }
      else if (num == 8) {
        document.querySelector(id).style.backgroundColor='gray';
      }
      else {
        document.querySelector(id).style.backgroundColor='pink';
      }
  }
function changeText(id){
  var num = Math.floor(Math.random() * 9) + 1;
    if (num == 1) {
      document.querySelector(id).textContent ='1';
    }
    else if (num == 2) {
      document.querySelector(id).textContent ='2';
    }
    else if (num == 3) {
      document.querySelector(id).textContent ='3';
    }
    else if (num == 4) {
      document.querySelector(id).textContent ='4';
    }
    else if (num == 5) {
      document.querySelector(id).textContent ='5';
    }
    else if (num == 6) {
      document.querySelector(id).textContent ='6';
    }
    else if (num == 7) {
      document.querySelector(id).textContent ='7';
    }
    else if (num == 8) {
      document.querySelector(id).textContent ='8';
    }
    else {
      document.querySelector(id).textContent ='9';
    }
}
