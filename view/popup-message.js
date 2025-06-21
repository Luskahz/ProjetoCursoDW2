export function showPopupMessage(msg, isError = false, errors = null) {
  const popup = document.getElementById("popup-message");
  if (!popup) return;
  let html = `<div>${msg}</div>`;
  if (errors && typeof errors === "object") {
    html += '<ul style="margin:12px 0 0 0;padding-left:18px;">';
    for (const [campo, lista] of Object.entries(errors)) {
      for (const erro of lista) {
        html += `<li style="font-size: 0.98em; color: #b71c1c; margin-bottom: 2px;">&#8226; <b>${campo}:</b> ${erro}</li>`;
      }
    }
    html += "</ul>";
  }
  popup.innerHTML = html;
  popup.className = "popup-message" + (isError ? " error" : "");
  popup.style.display = "flex";
  setTimeout(() => {
    popup.style.display = "none";
  }, 3000);
}
