document.addEventListener('DOMContentLoaded', function() {
    const chapterSelect = document.getElementById('chapterSelect');
    const readingModeSelect = document.getElementById('readingModeSelect');
    const comicViewer = document.getElementById('comicViewer');

    // Definir los capítulos y sus páginas
    const comics = {
        chapter1: [
            'mcthingies/McEffacement.png',
            // Añade más páginas en el orden deseado
        ],
        // Añade más capítulos aquí
    };

    function displayComic() {
        const selectedChapter = chapterSelect.value;
        const readingMode = readingModeSelect.value;
    
        comicViewer.innerHTML = ''; // Clear the viewer
    
        if (readingMode === 'onePage') {
            if (comics[selectedChapter].length > 1) {
                comics[selectedChapter].forEach(page => {
                    const img = document.createElement('img');
                    img.src = page;
                    comicViewer.appendChild(img);
                });
            } else {
                const img = document.createElement('img');
                img.src = comics[selectedChapter][0]; // Mostrar la primera página por defecto
                comicViewer.appendChild(img);
            }
            chapterSelect.disabled = false;
        } else if (readingMode === 'allPages') {
            Object.values(comics).forEach(chapterPages => {
                chapterPages.forEach(page => {
                    const img = document.createElement('img');
                    img.src = page;
                    comicViewer.appendChild(img);
                });
            });
            chapterSelect.disabled = true;
        }
    }
    
    

    chapterSelect.addEventListener('change', displayComic);
    readingModeSelect.addEventListener('change', displayComic);

    // Initialize the viewer
    displayComic();
});
