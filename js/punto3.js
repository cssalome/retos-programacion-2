// Se ingresa por teclado un número positivo
// de uno o dos dígitos (1..99) mostrar un mensaje indicando si
// el número tiene uno o dos dígitos. Tener en cuenta que
// condición debe cumplirse para tener dos dígitos.

const num = Number(
  prompt("Imgrese un numero positivo de uno o dos digitos", "")
);

if (num < 10) {
  alert(`El numero ingresado posee un solo digito`);
} else if ((num < 100) & (num > 9)) {
  alert(`El numero ingresado posee dos digitos`);
} else {
  alert("El numero posee mas de dos digitos");
}
