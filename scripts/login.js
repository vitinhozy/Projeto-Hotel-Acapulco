// Usuário e senha definidos
const validUser = "admin";
const validPassword = "12345";

// Adiciona um evento ao formulário
document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita o envio do formulário padrão

  // Obtém os valores dos campos de entrada
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  // Valida o usuário e a senha
  if (username === validUser && password === validPassword) {
    alert("Login bem-sucedido! Redirecionando para a intranet...");
    window.location.href = "../html/intranet.html"; // Redireciona para a intranet
  } else {
    alert("Usuário ou senha incorretos. Tente novamente.");
  }
});