// Simulação de dados iniciais
let casos = [
    {
      id: 1,
      titulo: "Fratura mandibular",
      paciente: "João da Silva",
      status: "Aberto"
    },
    {
      id: 2,
      titulo: "Trauma facial",
      paciente: "Maria Oliveira",
      status: "Encerrado"
    }
  ];
  
  // Função para renderizar os casos na tabela
  function renderizarCasos(filtro = "") {
    const corpoTabela = document.querySelector("#corpo-tabela-casos");
    corpoTabela.innerHTML = "";
  
    const casosFiltrados = casos.filter(caso =>
      caso.titulo.toLowerCase().includes(filtro.toLowerCase()) ||
      caso.paciente.toLowerCase().includes(filtro.toLowerCase())
    );
  
    if (casosFiltrados.length === 0) {
      corpoTabela.innerHTML = `<tr><td colspan="4">Nenhuma perícia encontrada.</td></tr>`;
      return;
    }
  
    casosFiltrados.forEach(caso => {
      const linha = document.createElement("tr");
      linha.innerHTML = `
        <td>${caso.titulo}</td>
        <td>${caso.paciente}</td>
        <td>
          <span class="badge-status ${caso.status === "Aberto" ? "badge-aberto" : "badge-encerrado"}">
            ${caso.status}
          </span>
        </td>
        <td>
          <button onclick="verDetalhes(${caso.id})">Ver</button>
        </td>
      `;
      corpoTabela.appendChild(linha);
    });
  }
  
  // Buscar por perícias
  document.querySelector("#input-busca").addEventListener("input", function () {
    renderizarCasos(this.value);
  });
  
  // Redirecionar para nova perícia
  document.querySelector("#btn-nova-pericia").addEventListener("click", function () {
    alert("Funcionalidade de nova perícia será implementada em breve.");
    // window.location.href = "nova-pericia.html"; // quando disponível
  });
  
  // Ver detalhes
  function verDetalhes(id) {
    alert(`Abrir detalhes da perícia ID: ${id}`);
    // window.location.href = `detalhes.html?id=${id}`;
  }
  
  // Inicializar ao carregar a página
  window.addEventListener("DOMContentLoaded", () => {
    renderizarCasos();
  });
  