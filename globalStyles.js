document.addEventListener('DOMContentLoaded', function() {
    // Esta función se ejecuta al cargar cualquier página
    function applyWolnoStyle() {
        // Selecciona todos los elementos que podrían contener nombres de usuario
        const userElements = document.querySelectorAll('h2, p, span, div');
        
        userElements.forEach(element => {
            // Si el texto exacto es "Wolno" o contiene exactamente "Wolno" como nombre
            if (element.textContent === "Wolno" || 
                element.textContent.match(/\bwolno\b/)) {
                element.classList.add('wolno-user');
            }
        });
    }
    
    // Aplica los estilos al cargar la página
    applyWolnoStyle();
    
    // También podemos ejecutarlo periódicamente para elementos cargados dinámicamente
    setInterval(applyWolnoStyle, 2000);
});