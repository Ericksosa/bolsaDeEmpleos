document.addEventListener('DOMContentLoaded', () => {
    const jobContainer = document.getElementById('job-container');
    const jobCategorySelect = document.getElementById('job-category');

    let allJobs = [];

    fetch('../../../data/applied-jobs.json')
        .then(response => response.json())
        .then(jobs => {
            allJobs = jobs;
            displayJobs(allJobs);
        })
        .catch(error => console.error('Error fetching the job data:', error));

    function displayJobs(jobs) {
        jobContainer.innerHTML = '';
        jobs.forEach((job, index) => {
            const jobCard = `
                <div class="p-4 w-full md:w-1/2 lg:w-1/2">
                    <div class="h-full border-2 border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                        <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="../../../assets/img/${job.imagen}" width="720px" height="420px" alt="job">
                        <div class="p-6">
                            <h2 class="title-font text-lg font-medium text-gray-900 dark:text-white mb-3">${job.puesto}</h2>
                            <h3 class="text-gray-500 dark:text-gray-300 mb-3">${job.empresa}</h3>
                            <h3 class="text-gray-500 font-bold dark:text-gray-200 mb-3">Estado de la solicitud: <span class="${job.textcolor}">${job.status}</span></h3>
                            <p class="leading-relaxed mb-3 text-gray-600 dark:text-gray-300">${job.descripcion}</p>
                            <div class="flex items-center flex-wrap">
                                <div class="modal hidden">
                                    <div class="modal-content mt-14 bg-white dark:bg-gray-800">
                                        <span class="closeModal">&times;</span>
                                        <img class="object-cover object-center rounded-lg shadow-md" src="../../../assets/img/${job.imagen}" alt="job" style="width: 100%; height: 200px;">
                                        <div class="p-6">
                                            <h2 class="title-font text-lg font-medium text-gray-900 dark:text-white mb-3">${job.puesto}</h2>
                                            <h3 class="text-gray-600 dark:text-gray-300 mb-3"><span class="font-bold">Empresa:</span> ${job.empresa}</h3>
                                            <h3 class="text-gray-600 dark:text-gray-300 mb-3"><span class="font-bold">Ubicación:</span> ${job.ubicacion}</h3>
                                            <h3 class="text-gray-600 dark:text-gray-300 mb-3"><span class="font-bold">Fecha de la oferta:</span> ${job.fecha}</h3>
                                            <h3 class="text-gray-600 dark:text-gray-300 mb-3"><span class="font-bold">Requisitos:</span> ${job.requisitos}</h3>
                                            <h3 class="text-gray-600 dark:text-gray-300 mb-3"><span class="font-bold">Duración del contrato:</span> ${job.duracion}</h3>
                                            <h3 class="text-gray-600 dark:text-gray-300 mb-3"><span class="font-bold">Horario:</span> ${job.horario}</h3>
                                            <h3 class="text-gray-600 dark:text-gray-300 mb-3"><span class="font-bold">Salario:</span> ${job.salario}</h3>
                                            <h3 class="text-gray-600 dark:text-gray-300 mb-3"><span class="font-bold">Vacantes Disponibles:</span> ${job.vacantes_disponibles}</h3>
                                            <p class="leading-relaxed mb-3 text-gray-600 dark:text-gray-300">${job.descripcion}</p>
                                            <button class="applyButton mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Aplicar</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;
            jobContainer.innerHTML += jobCard;
        });
    }
});