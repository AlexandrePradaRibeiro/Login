const btnCadastrar = document.getElementById("cadastrar");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const emailCadastro = document.getElementById("login-email").value;
    const senhaCadastro = document.getElementById("login-pass").value;
    const senhaConfirma = document.getElementById("password_confirma").value;
    
                                                        
    if (senhaCadastro === senhaConfirma) {
        alert(" cadastro realizado com suscesso")
        //SALVAR EM LOCALSTORAGE O VALOR DO EMAIL E SENHA CADASTRADO
        localStorage.setItem("emailCadastrado",emailCadastro);
        localStorage.setItem("senhaCadastrada",senhaCadastro);
        window.location.href = "../index.html"
    } else {
        alert( "senhas nao conferem")
    }
});                                                                                                                                                                                                                                                             