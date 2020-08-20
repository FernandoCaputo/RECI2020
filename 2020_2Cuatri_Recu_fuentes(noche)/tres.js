/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones,
validando los datos ingresados. 
nombre del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el nombre de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar()
{
	let nombre;
    let lugar;
    let temporada;
	let persona;
	let respuesta = "s";
	
	let cantPersonasEnInvierno = 0;
	let cantViajes=0;

    let contCataratas=0;
    let contBariloche=0;
    let contSalta=0;

    let masPasajeros=0;
    let titularConMasPasajeros;

    while (respuesta == "s") {

        do {
            nombre = prompt("Ingrese la nombre del titular");
        } while (nombre == "")
        do {
            lugar = prompt("Ingrese destino (bariloche/cataratas/salta)").toLowerCase();
        }
        while (!(lugar == "bariloche" || lugar == "cataratas" || lugar == "salta"));
        do {
            temporada = prompt("Ingrese la temporada (otoño/invierno/verano/primavera)").toLowerCase();
        }
        while (!(temporada == "primavera" || temporada == "verano" || temporada == "invierno" || temporada == "otoño"));
        do {
            persona = parseInt(prompt("Ingrese la cantidad de personas"));
        }while (isNaN(persona) && !(persona > 0))


		//punta a
		//acumulo la cantidad por viaje
        switch (lugar) {
            case "bariloche":
                contCataratas += persona;
                break;
            case "cataratas":
                contBariloche += persona;
                break;
            case "salta":
                contSalta += persona;
                break;
        }

		//punto b
        if (persona >= masPasajeros) {
			if (persona == masPasajeros) { 
				//guardo los titulares que lleven la misma cantidad de pasajeros y esta sea la mayor
                titularConMasPasajeros += " y " + nombre;
              }
              else {
				masPasajeros = persona;
				titularConMasPasajeros = nombre;
              }
		}
		
		//punto c
        if (temporada == "invierno") {
            cantPersonasEnInvierno += persona;
            cantViajes++;
		}
		respuesta = prompt("Desea ingrasar otra persona s/n");
    }


	//punto a  - suponiendo que no hay la misma cantidad por destino
    if(contCataratas>contBariloche)
    {
        if(contCataratas>contSalta)
        {
            console.log("El lugar mas vicitado fue: ");
        }
        else
        {
            console.log("El lugar mas vicitado fue: Salta");
        }
        
    }
    else if(contBariloche>contSalta)
    {
        console.log("El lugar mas vicitado fue: Bariloche");
    }
    else
    {
        console.log("El lugar mas vicitado fue: Salta");
    }

    console.log("El titular que llevó más pasajeros fue: "+titularConMasPasajeros);
    console.log("El promedio de personas por viaje en invierno es de: "+cantPersonasEnInvierno/cantViajes);
}
