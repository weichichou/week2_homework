fetch("https://swapi.co/api/people/1") 
  .then(response => response.json()) 
  .then(myJson => { 
    document.getElementById('div1').innerHTML =
      "<pre>" + JSON.stringify(myJson, null, " ") + "</pre>"
  })


function showDarthVader(){
    fetch("https://swapi.co/api/people/4/") 
    .then(response => response.json()) 
    .then(myJson => { 
      document.getElementById('div2').innerHTML =
        "<pre>" + JSON.stringify(myJson, null, " ") + "</pre>"
    }) 
}

document.getElementById('btn').addEventListener('click',function(event){
    showDarthVader();
})