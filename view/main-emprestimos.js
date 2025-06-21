// main-emprestimos.js
import { showPopupMessage } from "./popup-message.js";

const API = "http://localhost:3000/api";

function showDialog(msg, isError = false) {
  const dialog = document.createElement("div");
  dialog.className = "dialog-popout" + (isError ? " error" : "");
  dialog.innerHTML = `<span>${msg}</span><button class='close-dialog'>&times;</button>`;
  document.body.appendChild(dialog);
  dialog.querySelector(".close-dialog").onclick = () => dialog.remove();
  setTimeout(() => dialog.remove(), 4000);
}

const createEmprestimoForm = document.getElementById("create-emprestimo-form");
if (createEmprestimoForm) {
  createEmprestimoForm.onsubmit = async function (e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(createEmprestimoForm));
    if (data.usuarioId) data.usuarioId = Number(data.usuarioId);
    if (data.livroId) data.livroId = Number(data.livroId);
    if (data.dataRetirada)
      data.dataRetirada = new Date(data.dataRetirada).toISOString();
    const res = await fetch(`${API}/emprestimos`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const json = await res.json();
    showPopupMessage(json.message || "Ação realizada!", !res.ok, json.errors);
  };
}

const updateEmprestimoForm = document.getElementById("update-emprestimo-form");
if (updateEmprestimoForm) {
  updateEmprestimoForm.onsubmit = async function (e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(updateEmprestimoForm));
    if (data.usuarioId) data.usuarioId = Number(data.usuarioId);
    if (data.livroId) data.livroId = Number(data.livroId);
    if (data.dataRetirada)
      data.dataRetirada = new Date(data.dataRetirada).toISOString();
    if (data.dataDevolucao)
      data.dataDevolucao = new Date(data.dataDevolucao).toISOString();
    const id = data.id;
    delete data.id;
    const res = await fetch(`${API}/emprestimos/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const json = await res.json();
    showPopupMessage(json.message || "Ação realizada!", !res.ok, json.errors);
  };
}

const deleteEmprestimoForm = document.getElementById("delete-emprestimo-form");
const emprestimoDeletadoCard = document.getElementById(
  "emprestimo-deletado-card"
);
if (deleteEmprestimoForm && emprestimoDeletadoCard) {
  deleteEmprestimoForm.onsubmit = async function (e) {
    e.preventDefault();
    emprestimoDeletadoCard.style.display = "none";
    emprestimoDeletadoCard.innerHTML = "";
    const id = deleteEmprestimoForm.id.value;
    const res = await fetch(`${API}/emprestimos/${id}`, { method: "DELETE" });
    const json = await res.json();
    showPopupMessage(json.message || "Ação realizada!", !res.ok, json.errors);
    if (res.ok && json.emprestimo) {
      emprestimoDeletadoCard.innerHTML = `
        <b>ID:</b> ${json.emprestimo.id}<br>
        <b>ID Usuário:</b> ${json.emprestimo.usuarioId}<br>
        <b>ID Livro:</b> ${json.emprestimo.livroId}<br>
        <b>Data Retirada:</b> ${
          json.emprestimo.dataRetirada
            ? new Date(json.emprestimo.dataRetirada).toLocaleString()
            : ""
        }<br>
        <b>Data Devolução:</b> ${
          json.emprestimo.dataDevolucao
            ? new Date(json.emprestimo.dataDevolucao).toLocaleString()
            : ""
        }
      `;
      emprestimoDeletadoCard.style.display = "block";
    }
  };
}

const getEmprestimoForm = document.getElementById("get-emprestimo-form");
const emprestimoBuscadoCard = document.getElementById(
  "emprestimo-buscado-card"
);
if (getEmprestimoForm && emprestimoBuscadoCard) {
  getEmprestimoForm.onsubmit = async function (e) {
    e.preventDefault();
    emprestimoBuscadoCard.style.display = "none";
    emprestimoBuscadoCard.innerHTML = "";
    const id = getEmprestimoForm.id.value;
    const res = await fetch(`${API}/emprestimos/${id}`);
    const json = await res.json();
    showPopupMessage(json.message || "Ação realizada!", !res.ok, json.errors);
    if (res.ok && json.emprestimo) {
      emprestimoBuscadoCard.innerHTML = `
        <b>ID:</b> ${json.emprestimo.id}<br>
        <b>ID Usuário:</b> ${json.emprestimo.usuarioId}<br>
        <b>ID Livro:</b> ${json.emprestimo.livroId}<br>
        <b>Data Retirada:</b> ${
          json.emprestimo.dataRetirada
            ? new Date(json.emprestimo.dataRetirada).toLocaleString()
            : ""
        }<br>
        <b>Data Devolução:</b> ${
          json.emprestimo.dataDevolucao
            ? new Date(json.emprestimo.dataDevolucao).toLocaleString()
            : ""
        }
      `;
      emprestimoBuscadoCard.style.display = "block";
    }
  };
}

window.listarEmprestimos = async function () {
  const res = await fetch(`${API}/emprestimos`);
  const json = await res.json();
  showPopupMessage(json.message || "Ação realizada!", !res.ok, json.errors);
};
window.exportarEmprestimosCsv = function () {
  window.open(`${API}/emprestimos/export/csv`, "_blank");
};
