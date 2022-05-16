var convidados = []

function add(){
  var guestName = document.getElementById("nome1").value;
  convidados.push(guestName);
  console.log("Adicionando ============> "+guestName)
}



function listar(){
  var htmldata="";
  convidados.sort();
  for(var i=0;i<convidados.length;i++){
    htmldata=htmldata+ convidados[i] + '<br>'
 }
 
 document.getElementById("displayConvidados").innerHTML = htmldata;
}

function searching(){
  var s = document.getElementById("s1").value;
  var found=0;
  var j;
  console.log("Pesquisando ============> "+s)
  for(j=0; j<convidados.length; j++){
    if(s.toUpperCase()==convidados[j].toUpperCase()){
      found=found+1;
    }
  }
  document.getElementById("p2").innerHTML="nome encontrado "+found+" vez(es)";
  console.log("nome encontrado "+found+" vez(es)"); 
  
}