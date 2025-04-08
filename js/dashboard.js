function logout() {
    localStorage.removeItem('usuarioLogado');
    window.location.href = 'index.html';
  }
  
  window.addEventListener('DOMContentLoaded', () => {
    const usuario = JSON.parse(localStorage.getItem('usuarioLogado'));
    const boasVindas = document.getElementById('boas-vindas');
  
    if (!usuario) {
      alert('Você precisa estar logado.');
      window.location.href = 'index.html';
    } else {
      boasVindas.textContent = `Bem-vindo(a), ${usuario.nome} (${usuario.perfil})`;
    }
  });
  
  