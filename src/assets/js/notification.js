document
  .getElementById("notificaciones")
  .addEventListener("click", function () {
    document.getElementById("modal").classList.remove("hidden");
  });

document.getElementById("close-modal").addEventListener("click", function () {
  document.getElementById("modal").classList.add("hidden");
});

var buttons = document.getElementsByClassName("category-button");

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    if (this.classList.contains("bg-blue-500")) {
      this.classList.remove("bg-blue-500");
      this.classList.add("bg-blue-900");
    } else {
      this.classList.remove("bg-blue-900");
      this.classList.add("bg-blue-500");
    }
  });
}


let button = document.getElementById("save-modal");
let modal = document.getElementById("modal");

button.addEventListener("click", function () {
  Swal.fire({
    title: "Configuracion guardada",
    text: "Ahora recibirás notificaciones de empleos de esta categoría.",
    icon: "success",
    confirmButtonText: "OK",
    confirmButtonColor: "#2563EB",
  }).then(() => {
    modal.classList.add("hidden");
  });
});
