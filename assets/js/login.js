// =======SHOW HIDDEN- PASSWORD=====
    const showHiddenPassword = () => {
    const input = document.getElementById("login-pass");
    const IconEye = document.getElementById("login-eye");

IconEye.addEventListener("click", () => {
// change password to text
if (input.type === "password") {
    // switch to text 
    input.type = "text";

    // icon change
    IconEye.classList.remove("ri-eye-off-line");
    IconEye.classList.add("ri-eye-line");
} else {
//  change to passoword
input.type = "password";
IconEye.classList.remove("ri-eye-line");
IconEye.classList.add("ri-eye-off-line")
}
});
};

showHiddenPassword ();

let tentativas = 0;

document.querySelector("form").addEventListener("submit",(event) => {   
     event.preventDefault();
    const emailLogin = document.getElementById("login-email").value;
    const senhalogin =  document.getElementById("login-pass").value;

    //recuperar dados do local storage
    const email_cadastro = localStorage.getItem("emailCadastrado");
    const senhaCadastro = localStorage.getItem("senhaCadastrada");
    
    if ((emailLogin === email_cadastro) && (senhalogin === senhaCadastro)) {
        alert("login realizado com suscesso!!")
    } else {

        if (emailLogin !== email_cadastro) {
            alert("E-mail não cadastrado!")

        };

        if (senhalogin !== senhaCadastro) {
            alert("Senha incorreta!")

            tentativas +=1;

            alert(`tentativa ${tentativas}/3`)

            if (tentativas === 3) {
                alert("*SENHA BLOQUEADA POR EXCESSO DE TENTATIVAS!*");
                window.location = "././pages/recuperar.html"

            }
        }
    };
   
});

