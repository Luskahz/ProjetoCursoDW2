// main-livros.js
import { showPopupMessage } from "./popup-message.js";

const API = "http://localhost:3000/api";

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
    showPopupMessage(json.message || "Ação realizada!", !res.ok, json.errors);
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
    showPopupMessage(json.message || "Ação realizada!", !res.ok, json.errors);
  };
}

const deleteLivroForm = document.getElementById("delete-livro-form");
if (deleteLivroForm) {
  deleteLivroForm.onsubmit = async function (e) {
    e.preventDefault();
    const id = deleteLivroForm.id.value;
    const res = await fetch(`${API}/livros/${id}`, { method: "DELETE" });
    const json = await res.json();
    showPopupMessage(json.message || "Ação realizada!", !res.ok, json.errors);
  };
}

const getLivroForm = document.getElementById("get-livro-form");
if (getLivroForm) {
  getLivroForm.onsubmit = async function (e) {
    e.preventDefault();
    const id = getLivroForm.id.value;
    const res = await fetch(`${API}/livros/${id}`);
    const json = await res.json();
    showPopupMessage(json.message || "Ação realizada!", !res.ok, json.errors);
  };
}

window.listarLivros = async function () {
  const res = await fetch(`${API}/livros`);
  const json = await res.json();
  showPopupMessage(json.message || "Ação realizada!", !res.ok, json.errors);
};
window.exportarLivrosCsv = function () {
  window.open(`${API}/livros/export/csv`, "_blank");
};
