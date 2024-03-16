const nav = document.querySelector("nav");
window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    nav.classList.add("bg-dark");
  } else {
    nav.classList.remove("bg-dark");
  }
});

const inputCorreo = document.getElementById("txt_email");
const inputComentario = document.getElementById("txt_comentario");


const divErrorCorreo = document.getElementById("divErrorCorreo");
const divErrorComentario = document.getElementById("divErrorComentario");


const botonRegistrar = document.getElementById("idSendForm");


divErrorCorreo.classList.add("d-none");
divErrorComentario.classList.add("d-none");




const sendFormFunction = (ev) => {
  ev.preventDefault();

  if (!inputCorreo.value) {
    inputCorreo.classList.add("is-invalid");
    divErrorCorreo.classList.remove("d-none");
  }

  if (!inputComentario.value) {
    inputComentario.classList.add("is-invalid");
    divErrorComentario.classList.remove("d-none");
  }

  };

const validarCorreo = (ev) => {
  const { name, value } = ev.target;
  if (name === "mail") {
    divErrorCorreo.classList.add("d-none");
    inputCorreo.classList.remove("is-invalid");
    if (value.length > 15) {
      inputCorreo.classList.add("is-valid");
    }
  }
};

const validarComentario = (ev) => {
  const { name, value } = ev.target;
  if (name === "comentario") {
    divErrorComentario.classList.add("d-none");
    inputComentario.classList.remove("is-invalid");
    if (value.length > 6) {
      inputComentario.classList.add("is-valid");
    }
  }
};

const validarSiEsCorreo = (txt_email) =>{
let expReg =  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
let esValido = expReg.test(txt_email);
if(esValido == true){
  alert("En caso de haber realizado una consulta, le enviaremos una respuesta al correo suministrado");
}else{
  alert("El correo electronico NO es valido");
}
}


botonRegistrar.addEventListener("click", sendFormFunction);
inputCorreo.addEventListener("input", validarCorreo);
inputComentario.addEventListener("input", validarComentario);

