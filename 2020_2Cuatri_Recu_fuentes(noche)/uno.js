/*
1)De 5  personas que ingresan al hospital se deben tomar y
validar los siguientes datos.
nombre , temperatura, sexo y edad.
a)informar la cantidad de personas de cada sexo.
b)la edad promedio en total
c)la mujer con más temperatura(si la hay)
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar()
{
	 
	let nombre;
	let sexo;
	let edad;
	let temp;
	let cantHom = 0;
	let cantMuj = 0;
	let acumEdad = 0;
	let maxTempMujer = -273;
	let nomMaxTempMujer = "";
  
	let cantidadDePersonas = 5;
	for (let i = 1; i <= cantidadDePersonas; i++) {
  
		do {
			nombre = prompt("Ingrese el nombre");
		} while (nombre == "")
		do {
			sexo = prompt("Ingrese el sexo f/m");
		} while (sexo != "f" && sexo != "m")
		do {
			edad = parseInt(prompt("Ingrese la edad"));
		} while (!(edad > 0 && edad < 150))
		do {
			temp = prompt("Ingrese la temperatura");
		} while (isNaN(temp))
  
		//punto a
		if (sexo == "f") {
			cantMuj++;
  
			//punto c
			if (temp >= maxTempMujer) {				
				if (temp == maxTempMujer) {
					//guardo los nombres si hay mas de una mujer con esa temperatura
					nomMaxTempMujer += " y " + nombre;
				}
				else {
					maxTempMujer = temp;
					nomMaxTempMujer = nombre;
				}
			}
		}
		else {
			cantHom++;
		}
  
		//punto b
		acumEdad += edad;
	}
  
	console.log("Hay " + cantMuj + " mujeres y hay " + cantHom + " hombres");
	console.log("La edad promedio es de  " + acumEdad / cantidadDePersonas)
	console.log("la mujer con mas temperatura es " + nomMaxTempMujer + " con " + maxTempMujer + "°");
  
}
