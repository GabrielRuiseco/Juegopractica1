var palabras=['palabra','raton','teclado','computadora','pantalla','programa','consola','aplicacion','base','dato'];
var respuesta=[];
var intentosrestantes=6;
var palabra;
var aciertos=0;
var letra;
$(document).ready(function iniciar()
{
    var palabra= palabras[Math.floor(Math.random()*palabras.length)];
    for(var i=0;i<palabra.length;i++)
    {
        respuesta.push('_');
    }
    $('#espacios').append(respuesta.join(" "));
    intentosrestantes=6;
    document.getElementById("leterror").textContent=intentosrestantes;

    console.log(respuesta);
    console.log(palabra)
    $("#btn1").click(function guardar() {
        letra=$("#l_in").val();
        console.log(letra);
        if(palabra.indexOf(letra)>-1)
        {
            for(var j=0;j<palabra.length;j++)
            {
                if (respuesta[j]===letra)
                {
                    break;
                }
                else
                {
                    if (palabra[j]===letra){
                        respuesta[j]=letra;
                        aciertos++;
                        document.getElementById("espacios").textContent=respuesta.join(" ");
                    }
                }
            }
        }
        else{
            intentosrestantes--;
            document.getElementById("leterror").textContent=intentosrestantes;
        }
        if(aciertos===palabra.length)
        {
            alert("GANASTE!");
            $("#btn1").prop('disabled',true);

        }
        else if (intentosrestantes===0)
        {
            alert("Perdiste");
            $("#btn1").prop('disabled',true);
        }
        $("#l_in").val("");
    });
});
