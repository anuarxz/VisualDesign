//Iniciamos la funcion 
getData();

//Cuando pulsamos en el campo o tecleeamos se ejecuta la funcion
document.getElementById("campo").addEventListener("keyup",getData);

//Creamos la funcion para el buscador
function getData(){
  //Recogemos el valor del campo
    let input = document.getElementById("campo").value
    //Recogemos el valor donde ira el contenido
    let content = document.getElementById("content")
    //Recogemos el archivo
    let url = "cargar.php"
    let formaData = new FormData()
    formaData.append("campo", input) 

    //Realizamos las peticiones con JSON mediante el metodo POST
    fetch(url, {
        method: "POST",
        body: formaData
    }).then(response => response.json())
    .then(data => {
        content.innerHTML = data
    }).catch(err => console.log(err));
}

//Creamos una funcion para validar el formulario de contacto
function contacto() {
  //Recogemos los datos en variables
    var nombre = document.getElementsByName("nombre")[0].value;
    var apellidos = document.getElementsByName("apellidos")[0].value;
    var correo = document.getElementsByName("correo")[0].value;
    var ciudad = document.getElementsByName("ciudad")[0].value;
    var texto = document.getElementsByName("texto")[0].value;
    var info = document.getElementById("info");
  
    //Creamos las expresiones regulares para cada valor en variables
    var regex_nombre = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{3,30}$/;
    var regex_apellidos = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{3,30}$/;
    var regex_correo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    var regex_ciudad = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{3,30}$/;
    var regex_texto = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ0-9\s]{10,}/;
  
    //Creamos la variable validado a verdadero
    var validado = true;
    
    //Comparamos las expresiones regulares con los datos y si es falso la varable validado pasar a ser false
    if (!regex_nombre.test(nombre)) {
      //Muestra el mensaje de error
      info.innerHTML = "El nombre debe tener entre 3 y 30 letras.";
      validado = false;
    } else if (!regex_apellidos.test(apellidos)) {
      info.innerHTML = "Los apellidos deben tener entre 3 y 30 letras.";
      validado = false;
    } else if (!regex_correo.test(correo)) {
      info.innerHTML = "El correo electrónico no es válido.";
      validado = false;
    } else if (!regex_ciudad.test(ciudad)) {
      info.innerHTML = "La ciudad debe tener entre 3 y 30 letras.";
      validado = false;
    } else if (!regex_texto.test(texto)) {
      info.innerHTML = "La descripción debe tener al menos 10 carácteres.";
      validado = false;
    }
    
    //Devolvemos el valor de validado
    if (validado) {
      return true;
    }else{
        return false;
    }
  }

  //Creamos una funcion para validar el formulario de registro
  function registro2() {
    //Recogemos los datos en variables
    var nombre2 = document.getElementsByName("nombre")[0].value;
    var apellidos2 = document.getElementsByName("apellidos")[0].value;
    var correo2 = document.getElementsByName("correo")[0].value;
    var ciudad2 = document.getElementsByName("ciudad")[0].value;
    var password2 = document.getElementsByName("password")[0].value;
    var info2 = document.getElementById("info");
  
    //Creamos las expresiones regulares para cada valor en variables
    var regex_nombre2 = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{3,30}$/;
    var regex_apellidos2 = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{3,30}$/;
    var regex_correo2 = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    var regex_ciudad2 = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{3,30}$/;
    var regex_password2 = /^(?=.*\d)(?=.*[a-zA-Z]).{5,}$/;
  
        //Creamos la variable validado a verdadero
    var validado2 = true;
    
        //Comparamos las expresiones regulares con los datos y si es falso la varable validado pasar a ser false
    if (!regex_correo2.test(correo2)) {
      info2.innerHTML = "El correo electrónico no es válido.";
      validado2 = false;
    } else if (!regex_password2.test(password2)) {
      info2.innerHTML = "La contraseña debe tener al menos 5 carácteres con 1 letra y un número.";
      validado2 = false;
    } else if (!regex_nombre2.test(nombre2)) {
      info2.innerHTML = "El nombre debe tener entre 3 y 30 letras.";
      validado2 = false;
    } else if (!regex_apellidos2.test(apellidos2)) {
      info2.innerHTML = "Los apellidos deben tener entre 3 y 30 letras.";
      validado2 = false;
    } else if (!regex_ciudad2.test(ciudad2)) {
      info2.innerHTML = "La ciudad debe tener entre 3 y 30 letras.";
      validado2 = false;
    }

    //Devolvemos el valor de validado
    if (validado2) {
        return true;
      }else{
          return false;
      }
  }

  //Creamos una funcion para validar el formulario de añadir un producto
  function añadir2() {
    var nombre = document.getElementsByName("nombre")[0].value;
    var precio = document.getElementsByName("precio")[0].value;
    var categoria = document.getElementsByName("categoria")[0].value;
    var foto = document.getElementsByName("foto")[0].value;
    var descripcion = document.getElementsByName("descripcion")[0].value;
    var info = document.getElementById("info");
  
    var regex_nombre = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{3,30}$/;
    var regex_precio = /^(3000|[12]?[0-9]{1,3}|[0-9]{1,2})$/;
    var regex_descripcion = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ0-9\s]{10,}$/;
    var regex_categoria = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{3,30}$/;
  
        //Creamos la variable validado a verdadero
    var validado = true;
    
    if (!regex_nombre.test(nombre)) {
      info.innerHTML = "El nombre debe tener entre 3 y 30 letras";
      validado = false;
    } else if (!regex_precio.test(precio)) {
      info.innerHTML = "Escriba un precio entre 0 y 3000";
      validado = false;
    } else if (!regex_categoria.test(categoria)) {
      info.innerHTML = "La categoria debe tener entre 3 y 30 letras";
      validado = false;
    } else if (foto == "") {
      info.innerHTML = "Debes subir una imagen";
      validado = false;
    } else if (!regex_descripcion.test(descripcion)) {
      info.innerHTML = "La descripción debe tener al menos 10 carácteres.";
      validado = false;
    }
    
    //Comprobamos si el archivo es una imagen con la expresion regular
    var extensionesPermitidas = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
    if (!extensionesPermitidas.exec(foto)) {
        info.innerHTML = "Por favor, seleccione una imagen con una extensión válida (jpg, jpeg, png o gif) en el campo foto.";
    return false;
    }

        //Devolvemos el valor de validado
    if (validado) {
      return true;
    }else{
        return false;
    }
  }

  //Realizado por Anuar Iziani