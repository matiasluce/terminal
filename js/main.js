let input  = document.getElementById("inputc");
let commands = document.getElementById("commands");
let prefix = 'matlu@user ~ $ ';
let keywords = new Array("help","about","projects","clear");
let es = document.querySelector('.es');
let en = document.querySelector('.en');
const url = "https://raw.githubusercontent.com/matiasluce/terminal/main/data/lang.json";

let intro = "";
let help = "";
let about = "";
let projects = "";

function fetchData(){
  fetch(url).then(response => response.json()).then(data => {
                  data.trim();
                  JSON.parse(data);
                  intro = data.results.en.intro;
                  help = data.results.en.help;
                  about = data.results.en.about;
                  projects = data.results.en.projects;  
                  console.log(data);       
  })
  .catch(err => console.log(err));
}

fetchData();



/*
let intro = "Type 'help' to see list of available commands."

let help = [
    'Available commands:',
    'help, about, projects, clear'
]

let about = [
  'My name is Matías Lucero, I\'m a full-stack developer from Argentina.',
  'Visit my Github profile to see my projects (https://github.com/matiasluce/).'
]

let projects = [
  'Projects:',
  'Monster Energy Website: https://github.com/matiasluce/monster-web/',
  'Studio Ghibli Films: https://github.com/matiasluce/ghibli-api'
]*/

// Hacer boton EN / ESP y desde un Json traer los textos según el idioma elegido.

function resetInput(){
  input.value = '';
}

function clearScreen(){
  commands.innerHTML = "";
}

function init(){
  commands.innerHTML = "<p>" + intro + "</p><br>"
}

input.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      let s = "<div>"
      s+="<p>" + "<span class='prefijo'>"+ prefix + "</span>" + input.value + "</p>"
      switch(input.value){
        case 'help':
          for(c of help){
            s+= "<p>" + c + "</p>";
          } break;
        case 'about':
          for(c of about){
            s+= "<p>" + c + "</p>";
          } break;
        case 'projects':
          for(c of projects){
            s+= "<p>" + c + "</p>";
          } break;
        case 'clear':
          clearScreen(); break;
        default: input.value != "" ? s+="<p>Comando incorrecto, digite help para conocer los comandos disponibles.</p>" : '';
      }

      s+="<br></div>";
      if(input.value != 'clear'){
        commands.innerHTML += s;
      }
      resetInput();
      
    }
});

en.addEventListener('click', function(e){
  alert("Idioma inglés");
});

es.addEventListener('click', function(e){
  alert("Idioma español");
});

init();