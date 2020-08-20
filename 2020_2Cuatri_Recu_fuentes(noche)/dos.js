/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más liviano de los sólidos
*/

function mostrar()
{
  let marca;
  let precio;
  let peso;
  let tipo;
  let acumPeso = 0;
  let mayorePrecio = 0;
  let marcaCara = 0;
  let menorPeso = 700000;
  let marcaLiviana ="No hubo solido";
  let respuesta = "s";



  while (respuesta == "s") {

      do {
          marca = prompt("Ingrese la marca");
      } while (marca == "")
      do {
          precio = parseFloat(prompt("Ingrese precio"));
      } while (isNaN(precio))

      do {
          peso = parseFloat(prompt("Ingrese el peso en kilogramos"));
      } while (isNaN(peso))

      do {
          tipo = prompt("Es solido o liquido? s/l").toLowerCase();
      } while (!(tipo == "s" || tipo == "l"))

     
      respuesta = prompt("Desea ingrasar otro producto s/n");
      
      //punto a
      
      acumPeso += peso;

      //punto b
      if (tipo == "l") {
          if (precio >= mayorePrecio) {
              if (precio == mayorePrecio) { 
                //guardo los nombres de las marcas si hay mas de uno con el mismo precio
                marcaCara += " y " + marca;
              }
              else {
                mayorePrecio = precio;
                marcaCara = marca;
              }
          }
      }

      //punto c
      if (tipo == "s") {
          if (peso <= menorPeso) {
              if (peso == menorPeso) { 
                //guardo los nombres de las marcas si hay mas de uno con un peso minimo
                marcaLiviana += " y " + marca;
              }
              else {
                menorPeso = peso;
                marcaLiviana = marca;
              }
          }
          
      }
  }


  console.log("El peso total de la compra es de " + acumPeso + " kg");
  console.log("La marca mas cara de los liquidos es " + marcaCara);
  console.log("El mas liviano de los solidos es " + marcaLiviana);


}
