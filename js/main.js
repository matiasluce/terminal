let input  = document.getElementById("inputc");
let commands = document.getElementById("commands");
let prefix = 'matlu@user ~ $ '
let mtab = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';

let help = [
    '<br>',
    `help    ${mtab}show commands`,
    'about  information about me',
    'projects    some projects that I made with much love',
    '<br>'
]

let about = [
  '<br>',
  'My name is Matías Lucero, I\'m a full-stack developer from Argentina.',
  'Visit my Github profile to see my projects (https://github.com/matiasluce/).',
  '<br>'
]

let projects = [
  '<br>',
  'Projects:',
  'Monster Energy Website: https://github.com/matiasluce/monster-web/',
  'Studio Ghibli Films: https://github.com/matiasluce/ghibli-api',
  '<br>'
]

function resetInput(){
  input.value = '';
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
        default: s+="<p>Comando incorrecto, digite help para conocer los comandos disponibles.</p>";
      }

      resetInput()
      s+="<br></div>"
      commands.innerHTML += s;
      
    }
});
