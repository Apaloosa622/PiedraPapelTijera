/*Se crea la funcion "aleatorio" para que escoja aleatoriamente entre un numero*/
/*minimo y un numero maximo que esta declarado en la variable "opcionMaquina"*/
/*entre 0 hasta 2 y retorne el numero escogido aletoriamente en la variable  */
/*"opcionMaquina" */
function aleatorio(minimo,maximo)
{
    var numero = Math.floor( Math.random() * (maximo - minimo +1) + minimo);
    return numero;
}
/*Se declaran las siguientes variables para que el prompt pueda asociar*/
/*la opcion escogida en la variable opcionUsuario */
var piedra= 0;
var papel= 1;
var tijera= 2;
/*Se hace el array opciones para mostrar en el alert que opcion escogio*/
/*tanto el programa como el usuario*/
var opciones = ["piedra","papel","tijera"];


function botonPiedra(){
    var opcionUsuario;
    var opcionMaquina = aleatorio(0,2);


    opcionUsuario = piedra;
    alert("Elegiste " + opciones[opcionUsuario]);
    alert("La maquina eligió " + opciones[opcionMaquina]);


    if(opcionUsuario == piedra)
        {
        if(opcionMaquina == piedra)
            {
            alert("Es un empate entre tu y la maquina");
            }
        else if(opcionMaquina == papel)
            {
            alert("Habeis perdido");
            }
        else if(opcionMaquina == tijera)
            {
            alert("Habeis ganado");
            }
        }
    
    else{
        alert("Elegiste una opción invalida");
        } 
    }

function botonPapel(){
    var opcionUsuario;
    var opcionMaquina = aleatorio(0,2);
    
    opcionUsuario = papel;
    alert("Elegiste " + opciones[opcionUsuario]);
    alert("La maquina eligió " + opciones[opcionMaquina]);
    
    
    if(opcionUsuario == papel)
        {
        if(opcionMaquina == piedra)
            {
            alert("Habeis ganado");
            }
        else if(opcionMaquina == papel)
            {
            alert("Es un empate entre tu y la maquina");
            }
       else if(opcionMaquina == tijera)
            {
            alert("Habeis perdido");
            }
        }
        
    else{
        alert("Elegiste una opción invalida");
        } 
    }

function botonTijera(){
    var opcionUsuario;
    var opcionMaquina = aleatorio(0,2);
        
        
    opcionUsuario = tijera;
    alert("Elegiste " + opciones[opcionUsuario]);
    alert("La maquina eligió " + opciones[opcionMaquina]);
        
        
         
    if(opcionUsuario == tijera)
        {
        if(opcionMaquina == piedra)
            {
            alert("Habeis perdido");
            }
            else if(opcionMaquina == papel)
            {
            alert("Habeis ganado");
            }
            else if(opcionMaquina == tijera)
            {
            alert("Es un empate entre tu y la maquina");
            }
        }
        else{
            alert("Elegiste una opción invalida");
        } 
    }

    
