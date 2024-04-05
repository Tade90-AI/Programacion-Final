document.querySelectorAll('.Muestras .Mues').forEach((imagen) => {
    const modal = document.createElement('div');
    modal.classList.add('modal');

    const modalContent = document.createElement('img');
    modalContent.classList.add('modal-content');

    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    imagen.addEventListener('click', () => {
        modal.style.display = 'block';
        modalContent.src = imagen.src;
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});

document.querySelectorAll('.derecha .ilus').forEach((imagen) => {
    const modal = document.createElement('div');
    modal.classList.add('modal');

    const modalContent = document.createElement('img');
    modalContent.classList.add('modal-content');

    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    imagen.addEventListener('click', () => {
        modal.style.display = 'block';
        modalContent.src = imagen.src;
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});