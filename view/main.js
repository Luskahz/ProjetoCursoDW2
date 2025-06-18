const API = "http://localhost:3000/api";

// Usuários
const createUsuarioForm = document.getElementById("create-usuario-form");
if (createUsuarioForm) {
  createUsuarioForm.onsubmit = async function (e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(createUsuarioForm));
    const res = await fetch(`${API}/usuarios`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const json = await res.json();
    document.getElementById("usuarios-create-response").textContent = JSON.stringify(json, null, 2);
  };
}

const updateUsuarioForm = document.getElementById("update-usuario-form");
if (updateUsuarioForm) {
  updateUsuarioForm.onsubmit = async function (e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(updateUsuarioForm));
    const id = data.id;
    delete data.id;
    const res = await fetch(`${API}/usuarios/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const json = await res.json();
    document.getElementById("usuarios-update-response").textContent = JSON.stringify(json, null, 2);
  };
}

const deleteUsuarioForm = document.getElementById("delete-usuario-form");
if (deleteUsuarioForm) {
  deleteUsuarioForm.onsubmit = async function (e) {
    e.preventDefault();
    const id = deleteUsuarioForm.id.value;
    const res = await fetch(`${API}/usuarios/${id}`, { method: "DELETE" });
    const json = await res.json();
    document.getElementById("usuarios-delete-response").textContent = JSON.stringify(json, null, 2);
  };
}

const getUsuarioForm = document.getElementById("get-usuario-form");
if (getUsuarioForm) {
  getUsuarioForm.onsubmit = async function (e) {
    e.preventDefault();
    const id = getUsuarioForm.id.value;
    const res = await fetch(`${API}/usuarios/${id}`);
    const json = await res.json();
    document.getElementById("usuarios-get-response").textContent = JSON.stringify(json, null, 2);
  };
}

// Livros
const createLivroForm = document.getElementById("create-livro-form");
if (createLivroForm) {
  createLivroForm.onsubmit = async function (e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(createLivroForm));
    if (data.ano) data.ano = Number(data.ano);
    const res = await fetch(`${API}/livros`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const json = await res.json();
    document.getElementById("livros-create-response").textContent = JSON.stringify(json, null, 2);
  };
}

const updateLivroForm = document.getElementById("update-livro-form");
if (updateLivroForm) {
  updateLivroForm.onsubmit = async function (e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(updateLivroForm));
    if (data.ano) data.ano = Number(data.ano);
    const id = data.id;
    delete data.id;
    const res = await fetch(`${API}/livros/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const json = await res.json();
    document.getElementById("livros-update-response").textContent = JSON.stringify(json, null, 2);
  };
}

const deleteLivroForm = document.getElementById("delete-livro-form");
if (deleteLivroForm) {
  deleteLivroForm.onsubmit = async function (e) {
    e.preventDefault();
    const id = deleteLivroForm.id.value;
    const res = await fetch(`${API}/livros/${id}`, { method: "DELETE" });
    const json = await res.json();
    document.getElementById("livros-delete-response").textContent = JSON.stringify(json, null, 2);
  };
}

const getLivroForm = document.getElementById("get-livro-form");
if (getLivroForm) {
  getLivroForm.onsubmit = async function (e) {
    e.preventDefault();
    const id = getLivroForm.id.value;
    const res = await fetch(`${API}/livros/${id}`);
    const json = await res.json();
    document.getElementById("livros-get-response").textContent = JSON.stringify(json, null, 2);
  };
}

// Empréstimos
const createEmprestimoForm = document.getElementById("create-emprestimo-form");
if (createEmprestimoForm) {
  createEmprestimoForm.onsubmit = async function (e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(createEmprestimoForm));
    if (data.usuarioId) data.usuarioId = Number(data.usuarioId);
    if (data.livroId) data.livroId = Number(data.livroId);
    if (data.dataRetirada) data.dataRetirada = new Date(data.dataRetirada).toISOString();
    const res = await fetch(`${API}/emprestimos`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const json = await res.json();
    document.getElementById("emprestimos-create-response").textContent = JSON.stringify(json, null, 2);
  };
}

const updateEmprestimoForm = document.getElementById("update-emprestimo-form");
if (updateEmprestimoForm) {
  updateEmprestimoForm.onsubmit = async function (e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(updateEmprestimoForm));
    if (data.usuarioId) data.usuarioId = Number(data.usuarioId);
    if (data.livroId) data.livroId = Number(data.livroId);
    if (data.dataRetirada) data.dataRetirada = new Date(data.dataRetirada).toISOString();
    if (data.dataDevolucao) data.dataDevolucao = new Date(data.dataDevolucao).toISOString();
    const id = data.id;
    delete data.id;
    const res = await fetch(`${API}/emprestimos/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const json = await res.json();
    document.getElementById("emprestimos-update-response").textContent = JSON.stringify(json, null, 2);
  };
}

const deleteEmprestimoForm = document.getElementById("delete-emprestimo-form");
if (deleteEmprestimoForm) {
  deleteEmprestimoForm.onsubmit = async function (e) {
    e.preventDefault();
    const id = deleteEmprestimoForm.id.value;
    const res = await fetch(`${API}/emprestimos/${id}`, { method: "DELETE" });
    const json = await res.json();
    document.getElementById("emprestimos-delete-response").textContent = JSON.stringify(json, null, 2);
  };
}

const getEmprestimoForm = document.getElementById("get-emprestimo-form");
if (getEmprestimoForm) {
  getEmprestimoForm.onsubmit = async function (e) {
    e.preventDefault();
    const id = getEmprestimoForm.id.value;
    const res = await fetch(`${API}/emprestimos/${id}`);
    const json = await res.json();
    document.getElementById("emprestimos-get-response").textContent = JSON.stringify(json, null, 2);
  };
}

// Listar todos
window.listarUsuarios = async function () {
  const res = await fetch(`${API}/usuarios`);
  const json = await res.json();
  document.getElementById("usuarios-list-response").textContent = JSON.stringify(json, null, 2);
};
window.listarLivros = async function () {
  const res = await fetch(`${API}/livros`);
  const json = await res.json();
  document.getElementById("livros-list-response").textContent = JSON.stringify(json, null, 2);
};
window.listarEmprestimos = async function () {
  const res = await fetch(`${API}/emprestimos`);
  const json = await res.json();
  document.getElementById("emprestimos-list-response").textContent = JSON.stringify(json, null, 2);
};

// Exportar CSV
window.exportarUsuariosCsv = function () {
  window.open(`${API}/usuarios/export/csv`, "_blank");
};
window.exportarLivrosCsv = function () {
  window.open(`${API}/livros/export/csv`, "_blank");
};
window.exportarEmprestimosCsv = function () {
  window.open(`${API}/emprestimos/export/csv`, "_blank");
};
