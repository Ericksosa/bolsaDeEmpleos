document.addEventListener("DOMContentLoaded", () => {
  const jobContainer = document.getElementById("candidatos-container");
  const jobCategorySelect = document.getElementById("job-category");

  let allJobs = [];

  fetch("../../../data/candidatos.json")
    .then((response) => response.json())
    .then((jobs) => {
      allJobs = jobs;
      displayJobs(allJobs);

      jobCategorySelect.addEventListener("change", () => {
        const selectedCategory = jobCategorySelect.value;
        const filteredJobs =
          selectedCategory === "todos"
            ? allJobs
            : allJobs.filter((job) => job.category === selectedCategory);
        displayJobs(filteredJobs);
      });
    })
    .catch((error) => console.error("Error fetching the job data:", error));

  function displayJobs(jobs) {
    jobContainer.innerHTML = "";
    jobs.forEach((job) => {
      const jobCard = `
      <div class="p-4 w-full md:w-1/2 lg:w-1/3" id="candidatos-container">
          <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <div class="flex items-center mb-4">
              <img class="w-20 h-16 rounded-full mr-4" src="../../../assets/candidatos/${job.image}" alt="Profile Picture">
              <div>
                <h3 class="text-xl font-bold text-gray-800 dark:text-white">${job.name}</h3>
                <p class="text-gray-600 dark:text-gray-300">${job.puesto}</p>
              </div>
            </div>
            <p class="text-gray-600 dark:text-gray-300 mb-4">${job.descripcion}</p>
            <div class="mb-4">
              <h4 class="text-gray-800 dark:text-white font-semibold">Habilidades:</h4>
              <p class="text-gray-600 dark:text-gray-300">${job.habilidades}</p>
            </div>
            <div class="mb-4">
              <h4 class="text-gray-800 dark:text-white font-semibold">Puesto Aplicado:</h4>
              <p class="text-gray-600 dark:text-gray-300">${job.puesto}</p>
            </div>
            <div>
              <h4 class="text-gray-800 dark:text-white font-semibold">Estatus de Solicitud:</h4>
              <p class="text-gray-600 font-bold ${job.color}">${job.status}</p>
            </div>
          </div>
        </div>`;
      jobContainer.innerHTML += jobCard;
    });
  }
});
