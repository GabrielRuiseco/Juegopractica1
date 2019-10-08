var palabras=[[palabra],[raton],[teclado],[computadora],[pantalla],[programa],[consola],[aplicacion],[base],[dato]];
var respuesta=[];
var letraserroneas=[];
var intentosrestantes=6;
var usersguesses=[];
var palabra;
var aciertos=0;

function iniciar()
{
    var palabra= palabras[Math.floor(Math.random()*palabras.length)];

    for(var i=0;i<palabra.length;i++)
    {
        respuesta.push('_');
    }
    document.getElementById('letras').textContent=respuesta.join(" ");
    letraserroneas=[];
    intentosrestantes=6;

    document.getElementById("leterror").textContent=intentosrestantes;
}

function win()
{
    if(aciertos===palabra.length)
    {
        alert("GANASTE!");
    }
    else if (intentosrestantes===0)
    {
        alert("Perdiste")
        iniciar();
    }
}

document.onkeyup=function (event) {
    usersguesses = event.key;
    if (palabra.indexOf(usersguesses)>-1)
    {
        for(var i=0;i<palabra.length;i++)
        {
            if(palabra[i]===usersguesses)
            {
                respuesta[i]= usersguesses;
                aciertos++;
            }
        }
    }
    else
        {
            letraserroneas.push(usersguesses);
            intentosrestantes--;
        }

}
iniciar();