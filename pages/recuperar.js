//prevenir o comportamento padrão form
document.querySelector("form").addEventListener("submit", (event)  => {
     event.preventDefault();


     const emailRecupera = document.getElementById("email").value;
     const emailCadastro = localStorage.getItem("emailcadastro");
     const senhaRecupera = document.getElementById("password").value;
     const confirmaSenha =document.getElementById("login-pass").value;

     if (emailCadastro === emailRecupera) {

        if (senhaRecupera === confirmaSenha) {
            localStorage.setItem("senhaCadastrada", confirmaSenha)
               alert("nova senha cadastrada com suscesso !!!")
        } else {
            alert("Senhas não conferem !!!")  
        }
     
     } else {
        alert("e-mail inválido!!!")
     }
});