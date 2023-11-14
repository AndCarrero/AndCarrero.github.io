document.addEventListener('DOMContentLoaded', function () {
    // Inicializar la navegación
    initNavigation();

    // Mostrar el contenido de la sección actual
    showCurrentSectionContent();

    // Añadir eventos de clic para la navegación entre secciones
    addSectionNavigationEvents();
});

function initNavigation() {
    // Inicializar variables de estado de la aplicación
    const sections = document.querySelectorAll('section');
    let currentSectionIndex = 0;

    // Mostrar la sección inicial
    sections[currentSectionIndex].style.display = 'block';

    // Actualizar la variable de estado al cambiar de sección
    function updateCurrentSectionIndex(newIndex) {
        sections[currentSectionIndex].style.display = 'none';
        currentSectionIndex = newIndex;
        sections[currentSectionIndex].style.display = 'block';
        showCurrentSectionContent();
    }

    // Función para mostrar el contenido específico de la sección actual
    function showCurrentSectionContent() {
        const currentSection = sections[currentSectionIndex];
        const panels = currentSection.querySelectorAll('div[id^="panel-"]');
        panels.forEach(panel => {
            // Aquí puedes agregar lógica para mostrar el contenido específico de cada panel
        });
    }

    // Función para agregar eventos de clic a los enlaces de navegación
    function addSectionNavigationEvents() {
        const links = document.querySelectorAll('nav a');
        links.forEach((link, index) => {
            link.addEventListener('click', function (event) {
                event.preventDefault();
                updateCurrentSectionIndex(index);
            });
        });
    }
}
