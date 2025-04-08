document.getElementById('register-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmarSenha').value;
    const perfil = document.getElementById('perfil').value;
  
    if (senha !== confirmarSenha) {
      alert('As senhas não coincidem.');
      return;
    }
  
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
  
    if (usuarios.some(u => u.email === email)) {
      alert('E-mail já cadastrado.');
      return;
    }
  
    usuarios.push({ nome, email, senha, perfil });
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    alert('Usuário cadastrado com sucesso!');
    window.location.href = 'index.html';
  });