// js/evidencias.js

document.getElementById('form-evidencia').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const arquivo = document.getElementById('arquivo-evidencia').files[0];
    const descricao = document.getElementById('descricao-evidencia').value;
  
    if (!arquivo || !descricao) return;
  
    const reader = new FileReader();
    reader.onload = function(event) {
      const imagemBase64 = event.target.result;
  
      const grid = document.getElementById('grid-evidencias');
      const card = document.createElement('div');
      card.classList.add('card-evidencia');
  
      card.innerHTML = `
        <img src="${imagemBase64}" alt="Evidência" />
        <p><strong>Descrição:</strong> ${descricao}</p>
        <p><small>Data: ${new Date().toLocaleDateString()}</small></p>
        <p><small>Enviado por: Usuário Logado</small></p>
      `;
  
      grid.appendChild(card);
      document.getElementById('form-evidencia').reset();
    };
  
    reader.readAsDataURL(arquivo);
  });
  