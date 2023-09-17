document.addEventListener("DOMContentLoaded", function() {

    const nomeInput = document.getElementById("nome");
    const emailInput = document.getElementById("email");
    const idadeInput = document.getElementById("idade");
    const formulario = document.forms.form; // Obtém o formulário pelo nome
  
    formulario.addEventListener("submit", function(event) {
      event.preventDefault();
  
      function isEmpty(value) {
        return value.trim() === "";
      }

      if (isEmpty(nomeInput.value)) {
        alert("O campo Nome é obrigatório.");
        nomeInput.focus();
        return;
      }

      if (isEmpty(emailInput.value)) {
        alert("O campo E-mail é obrigatório.");
        emailInput.focus();
        return;
      }

      const idadeValue = idadeInput.value;
      if (isEmpty(idadeValue)) {
        alert("O campo Idade é obrigatório.");
        idadeInput.focus();
        return;
      }

      if (isNaN(idadeValue)) {
        alert("O campo Idade deve conter apenas números.");
        idadeInput.focus();
        return;
      }
  
      if (parseInt(idadeValue) < 0) {
        alert("O campo Idade deve conter um valor positivo.");
        idadeInput.focus();
        return;
      }
  
      alert("Formulário validado com Sucesso!!");
    });
  });
  