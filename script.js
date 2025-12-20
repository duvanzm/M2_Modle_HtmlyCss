const btn = document.getElementById("btnProyectos");
const lista = document.getElementById("list-Proyects");

btn.addEventListener("click", () => {
    lista.classList.toggle("activo");

    btn.textContent = lista.classList.contains("activo")
    ? "Ocultar proyectos"
    : "Mostrar proyectos";
});

if (!localStorage.getItem("bienvenidaMostrada")) {
    alert("¡Bienvenido a nuestra página! 👋");

    // Guardar que ya se mostró
    localStorage.setItem("bienvenidaMostrada", "true");
}