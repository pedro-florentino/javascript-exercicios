const alternarTemaBtn = document.querySelector("#alternarTema");

function alternarTema() {
  const body = document.body;

  if (body.classList.contains("escuro")) {
    body.classList.remove("escuro");
    body.classList.add("claro");
  } else {
    body.classList.remove("claro");
    body.classList.add("escuro");
  }
}

alternarTemaBtn.addEventListener("click", alternarTema);
