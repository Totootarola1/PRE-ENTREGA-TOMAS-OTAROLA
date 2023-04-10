function generarTabla() {
  // Obtener el número ingresado por el usuario
  var num = document.getElementById("numero").value;
  // Validar que el número sea un entero positivo
  if (num > 0 && num == Math.floor(num)) {
    // Generar la tabla de multiplicación
    var tabla = "";
    for (var i = 1; i <= 10; i++) {
      tabla += num + " x " + i + " = " + (num * i) + "<br>";
    }
    // Mostrar la tabla en la página
    document.getElementById("resultado").innerHTML = tabla;
  } else {
    // Mostrar un mensaje de error si el número ingresado no es válido
    document.getElementById("resultado").innerHTML = "Por favor ingrese un número entero positivo";
  }
}