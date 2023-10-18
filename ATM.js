let cuentas = [
    { nombre: "Evelyn Acosta", saldo: 200, password: "2525" },
    { nombre: "Uzziel Meza", saldo: 290, password: "987654" },
    { nombre: "Loreto Meza", saldo: 67, password: "123456" }
  ];
  
  let cuentaSeleccionada = null;
  
  function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
  
    cuentaSeleccionada = cuentas.find(function(cuenta) {
      return cuenta.nombre === username && cuenta.password === password;
    });
  
    if (cuentaSeleccionada) {
      document.getElementById("section 1").style.display = "none";
      document.getElementById("section 2").style.display = "block";
    } else {
      document.getElementById("login-error").textContent = "Credenciales incorrectas";
    }
  }
  
  function consultarSaldo() {
    document.getElementById("action-message").textContent = "Saldo actual: $" + cuentaSeleccionada.saldo;
  }
  
  function ingresarMonto() {
    let monto = parseFloat(prompt("Ingrese el monto a ingresar:"));
  
    if (isNaN(monto) || monto <= 0) {
      document.getElementById("action-message").textContent = "Monto inválido";
    } else {
      let nuevoSaldo = cuentaSeleccionada.saldo + monto;
      cuentaSeleccionada.saldo = nuevoSaldo;
      document.getElementById("action-message").textContent = "Se ha ingresado $" + monto + ". Nuevo saldo: $" + nuevoSaldo;
    }
  }
  
  function retirarMonto() {
    let monto = parseFloat(prompt("Ingrese el monto a retirar:"));
  
    if (isNaN(monto) || monto <= 0) {
      document.getElementById("action-message").textContent = "Monto inválido";
    } else if (monto > cuentaSeleccionada.saldo) {
      document.getElementById("action-message").textContent = "Saldo insuficiente";
    } else {
      let nuevoSaldo = cuentaSeleccionada.saldo - monto;
      cuentaSeleccionada.saldo = nuevoSaldo;
      document.getElementById("action-message").textContent = "Se ha retirado $" + monto + ". Nuevo saldo: $" + nuevoSaldo;
    }
  }