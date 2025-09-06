/* Renderizado genérico */
window.onload = () => {
  document.querySelector("header").innerHTML = `
  <div class="header-escritorio">
      <a title="UBB" href="/index.html">
          <img class="header-logo" src="./ImgeIEBLA/ic_ubb (1).svg" alt="Logo de UBB" />
      </a>
      
      <!-- Menú -->
      <nav class="header-nav" id="headerNav">
        <ul>
          <li><a href="/index.html">Inicio</a></li>
          <li><a href="/Historia.html">Historia</a></li>
          <li><a href="/Uniones.html">Uniones</a></li>
          <li><a href="/Asociaciones.html">Asociaciones regionales</a></li>
          <li><a href="/Ministerio.html">Ministerio</a></li>
          <li><a href="/Instituciones.html">Instituciones</a></li>
          <li><a href="/Socios.html">Socios</a></li>
           
          </li>
          <li><a href="/Manuales.html">Manual</a></li>
          <li><a href="/IglesiasLista.html">Encuentra tu Iglesia</a></li>
        </ul>
      </nav>

      <!-- Botón hamburguesa -->
      <button class="menu-hamburguesa" id="menuBtn">
          <div></div>
          <div></div>
          <div></div>
      </button>
  </div>
  `;

  // Activamos evento JS
  const menuBtn = document.getElementById("menuBtn");
  const nav = document.getElementById("headerNav");

  menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active"); // animación hamburguesa ↔ X
    nav.classList.toggle("open");       // muestra/oculta menú lateral
  });
};
