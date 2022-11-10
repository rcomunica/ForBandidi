

var InicioBotton = document.getElementById("StartButton");
var CartelInicio = document.getElementById("StartMessage");

function iniciar(){
    CartelInicio.style.display="none"
    document.getElementById("SecondMessage").style.display="block"
    const music = new Audio('cancion.wav')
	music.play();
}

////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////

var SecondButton = document.getElementById("SecondButton");
var SecondMessage = document.getElementById("SecondMessage");


function segundo(){
    SecondMessage.style.display="none"
    document.getElementById("ThirdMessage").style.display="block"
}

////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////

var ThirdButton = document.getElementById("ThirdButton");
var ThirdMessage = document.getElementById("ThirdMessage");

function tercero(){
    ThirdMessage.style.display="none"
    document.getElementById("FourthMessage").style.display="block"
}

////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////

var FourtButton = document.getElementById("FourthButton");
var FourthMessage = document.getElementById("FourthMessage");


function cuarto(){
    FourthMessage.style.display="none"
    FourtButton.style.display="none"
    document.getElementById("EndMessage").style.display="block"
    setTimeout(function(){
        document.getElementById("EndText").classList.add('animacionFin');

    }, 1500);
    setTimeout(function(){
        document.getElementById("endImg").style.display="block"
    }, 3500);
    
    

}
