document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contato-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const cidade = document.getElementById("cidade").value.trim();
        const estado = document.getElementById("estado").value.trim();

        if (!nome || !email || !cidade || !estado) {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        alert("Formulário enviado com sucesso!");
        form.reset();
    });
});