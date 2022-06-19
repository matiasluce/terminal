let input  = document.getElementById("inputc");
let commands = document.getElementById("commands");
let prefix = 'matlu@user ~ $ ';
let keywords = new Array("help","about","projects","clear");
let es = document.querySelector('.es');
let en = document.querySelector('.en');
const url = "https://raw.githubusercontent.com/matiasluce/terminal/main/data/lang.json";
let idioma = 'en';

const opt = {
	"lang": [
	{
		"intro": "Type 'help' to see list of available commands.",
		"help": [
		"Available commands:",
		"help, about, projects, clear"
		],
		"about": ["My name is Matías Lucero, Im a full-stack developer from Argentina.","Visit my Github profile to see my projects (https://github.com/matiasluce/)."],
		"projects": ["Projects:","Monster Energy Website: https://github.com/matiasluce/monster-web/","Studio Ghibli Films: https://github.com/matiasluce/ghibli-api"]
	},
	{
		"intro": "Usa 'help' para conocer la lista de comandos disponibles.",
		"help": ["Comandos disponibles:","help, about, projects, clear"],
		"about": ["Mi nombre es Matías Lucero, Soy un programador full-stack de Argentina.","Visita mi perfil de Github para ver mis projectos más recientes (https://github.com/matiasluce/)."],
		"projects": ["Proyectos:","Monster Energy Website: https://github.com/matiasluce/monster-web/","Studio Ghibli Films: https://github.com/matiasluce/ghibli-api"]
	}
	]
}




function init(){
  commands.innerHTML = "<p>" + intro + "</p><br>";
  console.log(intro);

  if(idioma == 'en'){
    en.classList.add("activo");
    es.classList.remove("activo");
  }
  else{
    es.classList.add("activo");
    en.classList.remove("activo");
  }
}


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
]

function resetInput(){
  input.value = '';
}

function clearScreen(){
  commands.innerHTML = "";
}

function changeLang(l){
  if(l == 'es'){
    intro = opt.lang[1].intro;
    help = opt.lang[1].help;
    about = opt.lang[1].about;
    projects = opt.lang[1].projects;
    idioma = 'es';
  }
  else{
    intro = opt.lang[0].intro;
    help = opt.lang[0].help;
    about = opt.lang[0].about;
    projects = opt.lang[0].projects;
    idioma = 'en';
  }

  clearScreen();
  init();
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
  changeLang('en');
});

es.addEventListener('click', function(e){
  changeLang('es');
});

init();