const inputUser = document.getElementById("idUser");
const inputPass = document.getElementById("idPass");
const inputMail = document.getElementById("idMail");

const divErrorUser = document.getElementById("divErrorUser");
const divErrorPass = document.getElementById("divErrorPass");
const divErrorMail = document.getElementById("divErrorMail")

const botonRegistrar = document.getElementById("idSendForm");
const botonRegistrar2 = document.getElementById("idSendForm2");


const usersLocalStorage = JSON.parse(localStorage.getItem("users")) || [];


divErrorUser.classList.add("d-none");
divErrorPass.classList.add("d-none");
divErrorMail.classList.add("d-none");



const sendFormFunction = (ev) => {
  ev.preventDefault();

  if (!inputUser.value) {
    inputUser.classList.add("is-invalid");
    divErrorUser.classList.remove("d-none");
  }

  if (!inputPass.value) {
    inputPass.classList.add("is-invalid");
    divErrorPass.classList.remove("d-none");
  }



  if (inputUser.value && inputPass.value) {

    const userExist= usersLocalStorage.find((user) => user.userName === inputUser.value);
    const userIndex = usersLocalStorage.findIndex(
        (user) => user.userName === inputUser.value
      );
  

    if(!userExist){
        return alert("Usuario y/o contraseña incorrecto / USUARIO");
    }

    if (inputPass.value !== userExist.pass) {
        return alert("Usuario y/o contraseña incorrecto / CONTRASEÑA");
      }
  
      usersLocalStorage[userIndex].login = true;
      localStorage.setItem("users", JSON.stringify(usersLocalStorage));
      
      if (userExist.role === "admin" || userExist.role === "superAdmin") {
        location.href = "../pages/administracion.html";
      } else {
        location.href = "../pages/home.html";
      }
    }

  };

const validarCampos = (ev) => {
  const { name, value } = ev.target;
  if (name === "user") {
    divErrorUser.classList.add("d-none");
    inputUser.classList.remove("is-invalid");
    if (value.length > 5) {
      inputUser.classList.add("is-valid");
    }
  }
};

const validarPass = (ev) => {
  const { name, value } = ev.target;
  if (name === "pass") {
    divErrorPass.classList.add("d-none");
    inputPass.classList.remove("is-invalid");
    if (value.length > 5) {
      inputPass.classList.add("is-valid");
    }
  }
};

const sendFormFunction2= (ev) => {
    ev.preventDefault();

    if (!inputMail.value) {
        inputMail.classList.add("is-invalid");
        divErrorMail.classList.remove("d-none");
      }
  }


    const validarMail = (ev) => {
        const { name, value } = ev.target;
        if (name === "mail") {
          divErrorMail.classList.add("d-none");
          inputMail.classList.remove("is-invalid");
          if (value.length > 5) {
            inputMail.classList.add("is-valid");
          }
      };
    }

botonRegistrar.addEventListener("click", sendFormFunction);
botonRegistrar2.addEventListener("click", sendFormFunction2);
inputUser.addEventListener("input", validarCampos);
inputPass.addEventListener("input", validarPass);
inputMail.addEventListener("input", validarMail);

