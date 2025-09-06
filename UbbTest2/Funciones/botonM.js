 document.querySelectorAll(".ver-mas").forEach(boton => {
      boton.addEventListener("click", () => {
        const box = boton.parentElement;
        box.classList.toggle("expandido");
        boton.textContent = box.classList.contains("expandido") ? "Ver menos" : "Ver más";
      });
    });