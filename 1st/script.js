alert("Contesta correctamente las tablas de multiplicacion para encestar el balon y ganar!.")
alert("REGLAS: agrega la respuesta dentro del recuadro correspondiente. Haz click en el boton jugar, cuando la pelota este en el piso. Observa el score y descubre si acertaste. ")




let duration = 1;

 setTimeout(function(){
     document.getElementById("banner").style.display = "block";
     countdown();
 },1000);

 function countdown(){
     let banner = document.getElementById("banner");
     if(duration > 0) {
         banner.innerHTML = "READY";
     duration--;
 setTimeout(countdown, 1000);
    
    } else {
     banner.innerHTML = "GO!";
     setTimeout(function(){
      document.getElementById("banner").style.display = "none"; // Oculta el banner después de 1 segundo
    }, 1000);
  }
    
  };








             
let hits = 0;

function animarElemento() {
  var balon = document.getElementById('balon');
  balon.style.animationPlayState = 'paused'; // Pausa la animación
  balon.classList.add('mover');
  setTimeout(function() { 
    balon.style.animationPlayState = 'running'; // Reanuda la animación después de 1 segundo
    balon.classList.remove('mover');
    hits++;
    document.getElementById("hitsResult").textContent = hits;
  }, 3000);
};


let mistakes = 0

function ocultar () {
  let ocultarX = document.getElementById("submit");
  let equis = document.getElementById("xRoja");
  if (equis.style.display === "none") {
    equis.style.display = "block";
    mistakes++;
    document.getElementById("mistakesResult").textContent = mistakes;
  setTimeout(function() {
    equis.style.display = "none";
  }, 2000);
  } else {
    equis.style.display = "none";
  }
};



document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita que la página se recargue al enviar el formulario
  var respuestaInput = document.getElementById('respuesta');
  if (respuestaInput.value === '9') { // Verifica si el valor del input es igual a 9
    animarElemento(); // Llama a la función animarElemento si se cumple la condición
  } else  {
    ocultar(); // Llama a la función ocultar si la respuesta es incorrecta
  }
});



document.getElementById('playFlor').addEventListener('click', function() {
  var florInput = document.getElementById('flor');
  if (florInput.value === '18') {
    animarElemento(1);
  } else {
    ocultar();
  }
});

document.getElementById('playMesa').addEventListener('click', function() {
  var mesaInput = document.getElementById('mesa');
  if (mesaInput.value === '27') {
    animarElemento();
  } else {
    ocultar();
  }
});

document.getElementById('playRespuesta4').addEventListener('click', function() {
  var respuesta4Input = document.getElementById('respuesta4');
  if (respuesta4Input.value === '36') {
    animarElemento();
  } else {
    ocultar();
  }
});

document.getElementById('playRespuesta5').addEventListener('click', function() {
  var respuesta5Input = document.getElementById('respuesta5');
  if (respuesta5Input.value === '45') {
    animarElemento();
  } else {
    ocultar();
  }
});

document.getElementById('playRespuesta6').addEventListener('click', function() {
  var respuesta6Input = document.getElementById('respuesta6');
  if (respuesta6Input.value === '54') {
    animarElemento();
  } else {
    ocultar();
  }
});

document.getElementById('playRespuesta7').addEventListener('click', function() {
  var respuesta7Input = document.getElementById('respuesta7');
  if (respuesta7Input.value === '63') {
    animarElemento();
  } else {
    ocultar();
  }
});

document.getElementById('playRespuesta8').addEventListener('click', function() {
  var respuesta8Input = document.getElementById('respuesta8');
  if (respuesta8Input.value === '72') {
    animarElemento();
  } else {
    ocultar();
  }
});

document.getElementById('playRespuesta9').addEventListener('click', function() {
  var respuesta9Input = document.getElementById('respuesta9');
  if (respuesta9Input.value === '81') {
    animarElemento();
  } else {
    ocultar();
  }
});

document.getElementById('playRespuesta10').addEventListener('click', function() {
  var respuesta10Input = document.getElementById('respuesta10');
  if (respuesta10Input.value === '90') {
    animarElemento();
  } else {
    ocultar();
  }
});

document.getElementById('playRespuesta11').addEventListener('click', function() {
  var respuesta11Input = document.getElementById('respuesta11');
  if (respuesta11Input.value === '99') {
    animarElemento();
  } else {
    ocultar();
  }
});

document.getElementById('playRespuesta12').addEventListener('click', function() {
  var respuesta12Input = document.getElementById('respuesta12');
  if (respuesta12Input.value === '108') {
    animarElemento();
  } else {
    ocultar();
  }
});

