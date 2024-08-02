document.addEventListener('DOMContentLoaded', () => {
    const jobContainer = document.getElementById('job-container');
    const jobCategorySelect = document.getElementById('job-category');

    let allJobs = [];

    fetch('../../data/jobs.json')
        .then(response => response.json())
        .then(jobs => {
            allJobs = jobs;
            displayJobs(allJobs);

            jobCategorySelect.addEventListener('change', () => {
                const selectedCategory = jobCategorySelect.value;
                const filteredJobs = selectedCategory === 'todos' ? allJobs : allJobs.filter(job => job.category === selectedCategory);
                displayJobs(filteredJobs);
            });
        })
        .catch(error => console.error('Error fetching the job data:', error));

    function displayJobs(jobs) {
        jobContainer.innerHTML = '';
        jobs.forEach((job, index) => {
            const jobCard = `
                <div class="p-4 w-full md:w-1/2 lg:w-1/3">
                    <div class="h-full border-2 border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                        <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="/assets/img/${job.imagen}" width="720px" height="420px" alt="job">
                        <div class="p-6">
                            <h2 class="title-font text-lg font-medium text-gray-900 dark:text-white mb-3">${job.puesto}</h2>
                            <h3 class="text-gray-500 dark:text-gray-300 mb-3">${job.empresa}</h3>
                            <h3 class="text-gray-500 dark:text-gray-300 mb-3">Vacantes Disponibles: ${job.vacantes_disponibles}</h3>
                            <p class="leading-relaxed mb-3 text-gray-600 dark:text-gray-300">${job.descripcion}</p>
                            <div class="flex items-center flex-wrap">
                                <a class="text-blue-500 inline-flex items-center md:mb-2 lg:mb-0 openModal" href="#">Ver más
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                                <div class="modal hidden">
                                    <div class="modal-content mt-14 bg-white dark:bg-gray-800">
                                        <span class="closeModal">&times;</span>
                                        <img class="object-cover object-center rounded-lg shadow-md" src="/assets/img/${job.imagen}" alt="job" style="width: 100%; height: 200px;">
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

        // Add event listeners after content is loaded
        const modals = document.querySelectorAll('.modal');
        const btns = document.querySelectorAll('.openModal');
        const spans = document.querySelectorAll('.closeModal');

        btns.forEach((btn, index) => {
            btn.onclick = function() {
                modals[index].style.display = "block";
            }
        });

        spans.forEach((span, index) => {
            span.onclick = function() {
                modals[index].style.display = "none";
            }
        });

        window.onclick = function(event) {
            modals.forEach(modal => {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            });
        }

        // Add event listeners for apply buttons
        const applyButtons = document.querySelectorAll('.applyButton');
        applyButtons.forEach((button, index) => {
            button.addEventListener('click', function() {
                Swal.fire({
                    title: 'Aplicación enviada correctamente',
                    text: 'La empresa se pondrá en contacto con usted pronto.',
                    icon: 'success',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2563EB',
                }).then(() => {
                    modals[index].style.display = "none";
                });
            });
        });
    }
});


