function ajouterTache() {
  const input = document.getElementById("input");
  const texte = input.value.trim();

  if (texte === "") return;

  const li = document.createElement("li");
  li.textContent = texte;

  li.onclick = function () {
    li.remove();
  };

  document.getElementById("liste").appendChild(li);

  input.value = "";
}
