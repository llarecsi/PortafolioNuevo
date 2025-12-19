const proyectos = [
  {
    nombre: "Cajero Automático",
    desc: "Simulación de cajero: depósitos y retiros.",
    demo: "https://llarecsi.github.io/cajeroi/",
    code: "https://github.com/llarecsi/cajeroi"
  },
  {
    nombre: "Portafolio",
    desc: "Portafolio personal con secciones y diseño limpio.",
    demo: "https://llarecsi.github.io/PORTAFOLIO/",
    code: "https://github.com/llarecsi/PORTAFOLIO"
  },
  {
    nombre: "Directorio",
    desc: "Directorio web con información organizada.",
    demo: "https://llarecsi.github.io/directorioo/",
    code: "https://github.com/llarecsi/directorioo.git"
  },
  {
    nombre: "Proyecto Final",
    desc: "Proyecto final .",
    demo: "https://llarecsi.github.io/proyectofinal/",
    code: "https://github.com/llarecsi/proyectofinal.git"
  },
  {
    nombre: "Calculadora",
    desc: "Calculadora.",
    demo: "https://llarecsi.github.io/calculadoraa/",
    code: "https://github.com/llarecsi/calculadoraa.git"
  },
   {
    nombre: "Gestión de Tareas",
    desc: "App para crear, marcar y organizar tareas diarias.",
    demo: "https://llarecsi.github.io/Gestiontarea/",
    code: "https://github.com/llarecsi/Gestiontarea.git"
  },
     {
    nombre: "Parqueo",
    desc: "Parqueo",
    demo: "https://llarecsi.github.io/parqueo/",
    code: "https://github.com/llarecsi/parqueo.git"
  },
   {
    nombre: "PartafolioNuevo",
    desc: "Nuevo",
    demo: "https://llarecsi.github.io/PortafolioNuevo/",
    code: "https://github.com/llarecsi/PortafolioNuevo.git"
  },
  {
    nombre: "Catálogo",
    desc: "Catálogo con diseño responsivo y enlaces.",
    demo: "https://llarecsi.github.io/Catalogo/",
    code: "https://github.com/llarecsi/Catalogo.git"
  }
];

// Card sin "chips" (HTML/CSS/JS)
function crearProyectoCard(p){
  return `
    <article class="project">
      <h3>${p.nombre}</h3>
      <p>${p.desc}</p>
      <div class="project__actions">
        <a class="linkbtn" href="${p.demo}" target="_blank">Demo</a>
        <a class="linkbtn" href="${p.code}" target="_blank">Código</a>
      </div>
    </article>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();

  const grid = document.getElementById("projectsGrid");
  grid.innerHTML = proyectos.map(crearProyectoCard).join("");
});
