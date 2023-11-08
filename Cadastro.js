const form = document.getElementById("cadastro-form");
        const successMessage = document.getElementById("success-message");
        const errorMessage = document.getElementById("error-message");

        form.addEventListener("submit", function (e) {
            e.preventDefault();

            // Verificar se as senhas coincidem
            const senha = document.getElementById("senha").value;
            const confirmarSenha = document.getElementById("confirmar_senha").value;

            if (senha !== confirmarSenha) {
                errorMessage.style.display = "block";
                successMessage.style.display = "none";
            } else {
                errorMessage.style.display = "none";
                successMessage.style.display = "block";
                form.reset();
                setTimeout(function(){
                    successMessage.style.display = "none";
                }, 3000);
            }
        });
