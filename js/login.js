// js/login.js
document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value.trim();
  
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
  
    const usuario = usuarios.find(u => u.email === email && u.senha === senha);
  
    if (!usuario) {
      alert('E-mail ou senha inválidos!');
      return;
    }
  
    localStorage.setItem('usuarioLogado', JSON.stringify(usuario));
    alert(`Bem-vindo, ${usuario.nome}!`);
    window.location.href = 'dashboard.html';
  });
  