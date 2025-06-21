// main-usuarios.js
import { showPopupMessage } from "./popup-message.js";

const API = "http://localhost:3000/api";

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
    showPopupMessage(json.message || "Ação realizada!", !res.ok, json.errors);
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
    showPopupMessage(json.message || "Ação realizada!", !res.ok, json.errors);
  };
}

const deleteUsuarioForm = document.getElementById("delete-usuario-form");
const usuarioDeletadoCard = document.getElementById("usuario-deletado-card");
if (deleteUsuarioForm && usuarioDeletadoCard) {
  deleteUsuarioForm.onsubmit = async function (e) {
    e.preventDefault();
    usuarioDeletadoCard.style.display = "none";
    usuarioDeletadoCard.innerHTML = "";
    const id = deleteUsuarioForm.id.value;
    const res = await fetch(`${API}/usuarios/${id}`, { method: "DELETE" });
    const json = await res.json();
    showPopupMessage(json.message || "Ação realizada!", !res.ok, json.errors);

    // Se deletou com sucesso e veio o usuário deletado, mostra o card
    if (res.ok && json.usuario) {
      usuarioDeletadoCard.innerHTML = `
        <b>ID:</b> ${json.usuario.id}<br>
        <b>Nome:</b> ${json.usuario.nome}<br>
        <b>Email:</b> ${json.usuario.email}
      `;
      usuarioDeletadoCard.style.display = "block";
    }
  };
}

const getUsuarioForm = document.getElementById("get-usuario-form");
const usuarioBuscadoCard = document.getElementById("usuario-buscado-card");
if (getUsuarioForm && usuarioBuscadoCard) {
  getUsuarioForm.onsubmit = async function (e) {
    e.preventDefault();
    usuarioBuscadoCard.style.display = "none";
    usuarioBuscadoCard.innerHTML = "";
    const id = getUsuarioForm.id.value;
    const res = await fetch(`${API}/usuarios/${id}`);
    const json = await res.json();
    showPopupMessage(json.message || "Ação realizada!", !res.ok, json.errors);

    // Se encontrou o usuário, mostra o card
    if (res.ok && json.usuario) {
      usuarioBuscadoCard.innerHTML = `
        <b>ID:</b> ${json.usuario.id}<br>
        <b>Nome:</b> ${json.usuario.nome}<br>
        <b>Email:</b> ${json.usuario.email}
      `;
      usuarioBuscadoCard.style.display = "block";
    }
  };
}

window.listarUsuarios = async function () {
  const res = await fetch(`${API}/usuarios`);
  const json = await res.json();
  showPopupMessage(json.message || "Ação realizada!", !res.ok, json.errors);
};
window.exportarUsuariosCsv = function () {
  window.open(`${API}/usuarios/export/csv`, "_blank");
};
