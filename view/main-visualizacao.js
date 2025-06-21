// main-visualizacao.js
const API = "http://localhost:3000/api";
import { showPopupMessage } from "./popup-message.js";

async function renderUsuarios() {
  const res = await fetch(`${API}/usuarios`);
  const json = await res.json();
  const lista = document.getElementById("usuarios-lista");
  if (!lista) return;
  if (json.usuarios && json.usuarios.length > 0) {
    lista.innerHTML = `<div class='lista-dados'>${json.usuarios
      .map(
        (u) => `
      <div class='bloco-item'>
        <b>ID:</b> ${u.id}<br>
        <b>Nome:</b> ${u.nome}<br>
        <b>Email:</b> ${u.email}
      </div>
    `
      )
      .join("")}</div>`;
  } else {
    lista.innerHTML =
      '<div style="color:#888;">Nenhum usuário encontrado.</div>';
  }
}

async function renderLivros() {
  const res = await fetch(`${API}/livros`);
  const json = await res.json();
  const lista = document.getElementById("livros-lista");
  if (!lista) return;
  if (json.livros && json.livros.length > 0) {
    lista.innerHTML = `<div class='lista-dados'>${json.livros
      .map(
        (l) => `
      <div class='bloco-item'>
        <b>ID:</b> ${l.id}<br>
        <b>Título:</b> ${l.titulo}<br>
        <b>Autor:</b> ${l.autor}<br>
        <b>Ano:</b> ${l.ano || "-"}
      </div>
    `
      )
      .join("")}</div>`;
  } else {
    lista.innerHTML = '<div style="color:#888;">Nenhum livro encontrado.</div>';
  }
}

async function renderEmprestimos() {
  const res = await fetch(`${API}/emprestimos`);
  const json = await res.json();
  const lista = document.getElementById("emprestimos-lista");
  if (!lista) return;
  if (json.emprestimos && json.emprestimos.length > 0) {
    lista.innerHTML = `<div class='lista-dados'>${json.emprestimos
      .map(
        (e) => `
      <div class='bloco-item'>
        <b>ID:</b> ${e.id}<br>
        <b>Usuário:</b> ${e.usuario?.nome || e.usuarioId}<br>
        <b>Livro:</b> ${e.livro?.titulo || e.livroId}<br>
        <b>Retirada:</b> ${
          e.dataRetirada ? new Date(e.dataRetirada).toLocaleDateString() : "-"
        }<br>
        <b>Devolução:</b> ${
          e.dataDevolucao
            ? new Date(e.dataDevolucao).toLocaleDateString()
            : "Pendente"
        }
      </div>
    `
      )
      .join("")}</div>`;
  } else {
    lista.innerHTML =
      '<div style="color:#888;">Nenhum empréstimo encontrado.</div>';
  }
}

window.addEventListener("DOMContentLoaded", () => {
  renderUsuarios();
  renderLivros();
  renderEmprestimos();
});

window.listarUsuarios = async function () {
  const res = await fetch(`${API}/usuarios`);
  const json = await res.json();
  showPopupMessage(json.message || "Ação realizada!", !res.ok, json.errors);
};
window.listarLivros = async function () {
  const res = await fetch(`${API}/livros`);
  const json = await res.json();
  showPopupMessage(json.message || "Ação realizada!", !res.ok, json.errors);
};
window.listarEmprestimos = async function () {
  const res = await fetch(`${API}/emprestimos`);
  const json = await res.json();
  showPopupMessage(json.message || "Ação realizada!", !res.ok, json.errors);
};
