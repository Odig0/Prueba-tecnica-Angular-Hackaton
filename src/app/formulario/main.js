const datoNombre = document.querySelector('#datoNombre');
const datoMensaje = document.querySelector('#datoMensaje');
const btnEnviar = document.querySelector('#btnEnviar');

var mensaje;

function enviar (){
    mensaje = `https://api.whatsapp.com/send?phone=59163525425&text=${datoNombre.value}%20${datoMensaje.value} `;
    btnEnviar.href= mensaje;
}
