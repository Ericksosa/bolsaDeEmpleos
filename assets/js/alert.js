document.getElementById('applyButton').addEventListener('click', function() {
    Swal.fire({
        title: 'Aplicación enviada correctamente',
        text: 'La empresa se pondrá en contacto con usted pronto.',
        icon: 'success',
        confirmButtonText: 'OK'
    });
});