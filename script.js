const form = document.getElementById('cadastroForm');
const nomeInput = document.getElementById('nome');
const emailInput = document.getElementById('email');
const senhaInput = document.getElementById('senha');
const confirmaSenhaInput = document.getElementById('confirmaSenha');
const perfilInput = document.getElementById('perfil');
const termosInput = document.getElementById('termos');
const mensagem = document.getElementById('mensagem');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  mensagem.textContent = '';

  const nome = nomeInput.value.trim();
  const email = emailInput.value.trim();
  const senha = senhaInput.value;
  const confirmaSenha = confirmaSenhaInput.value;

  if (!nome) {
    mensagem.textContent = 'Por favor, informe seu nome.';
    nomeInput.focus();
    return;
  }

  if (!email) {
    mensagem.textContent = 'Por favor, informe seu e-mail.';
    emailInput.focus();
    return;
  }

  if (emailInput.validity.typeMismatch) {
    mensagem.textContent = 'Por favor, informe um endereço de e-mail válido.';
    emailInput.focus();
    return;
  }

  if (senha.length < 6) {
    mensagem.textContent = 'A senha deve ter pelo menos 6 caracteres.';
    senhaInput.focus();
    return;
  }

  if (confirmaSenha !== senha) {
    mensagem.textContent = 'As senhas não conferem.';
    confirmaSenhaInput.focus();
    return;
  }

  if (!perfilInput.value) {
    mensagem.textContent = 'Por favor, selecione seu perfil técnico.';
    perfilInput.focus();
    return;
  }

  if (!termosInput.checked) {
    mensagem.textContent = 'Você precisa aceitar os termos de uso.';
    termosInput.focus();
    return;
  }

  document.getElementById('saidaNome').textContent = nome;
  document.getElementById('saidaEmail').textContent = email;
  document.getElementById('saidaPerfil').textContent = perfilInput.value;
  form.reset();
});
