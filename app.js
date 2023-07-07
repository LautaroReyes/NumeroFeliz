function esFeliz(num) {
    let suma = 0;
    let cont = 0;
  
    do {
      suma = 0;
      do {
        suma += parseInt(Math.pow(parseInt(num[cont]), 2));
        cont++;
      } while (cont < num.length);
      
      cont = 0;
      num = suma.toString();
    } while (suma != 1 && suma != 4);
  
    return suma == 1;
  }
  
  let numero = parseInt(prompt("Ingrese un número"));
  
  if (esFeliz(numero.toString())) {
    document.write("El número " + numero + " es feliz");
  } else {
    document.write("El número " + numero + " no es feliz");
  } 
