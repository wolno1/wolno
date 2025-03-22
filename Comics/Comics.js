// JavaScript para controlar la barra lateral (mostrar en dispositivos móviles)
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

document.addEventListener("DOMContentLoaded", function () {
    // Create the bottom bar container
    var bottomBar = document.createElement("div");
    bottomBar.className = "navbar";

    // Define the links
    var links = [
        { href: "https://twitter.com/AwsArtzzz", icon: '<i class="fa-brands fa-twitter" style="font-size:18px;"></i>' },
        { href: "https://discord.gg/9RR3SwenqV", icon: '<i class="fab fa-discord" style="font-size:18px;"></i>' },
        { href: "https://ko-fi.com/wolno", icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M23.881 8.948c-.773-4.085-4.859-4.593-4.859-4.593H.723c-.604 0-.679.798-.679.798s-.082 7.324-.022 11.822c.164 2.424 2.586 2.672 2.586 2.672s8.267-.023 11.966-.049c2.438-.426 2.683-2.566 2.658-3.734c4.352.24 7.422-2.831 6.649-6.916m-11.062 3.511c-1.246 1.453-4.011 3.976-4.011 3.976s-.121.119-.31.023c-.076-.057-.108-.09-.108-.09c-.443-.441-3.368-3.049-4.034-3.954c-.709-.965-1.041-2.7-.091-3.71c.951-1.01 3.005-1.086 4.363.407c0 0 1.565-1.782 3.468-.963c1.904.82 1.832 3.011.723 4.311m6.173.478c-.928.116-1.682.028-1.682.028V7.284h1.77s1.971.551 1.971 2.638c0 1.913-.985 2.667-2.059 3.015"/></svg>' },
        { href: "https://www.deviantart.com/awsawss", icon: '<i class="fa-brands fa-deviantart" style="font-size:18px;"></i>' },
        { href: "https://www.tumblr.com/blog/awsartzzz", icon: '<i class="fa-brands fa-tumblr" style="font-size:18px;"></i>' },
        { href: "https://www.instagram.com/awsartzzz/", icon: '<i class="fa-brands fa-instagram" style="font-size:18px;"></i>' },
        { href: "https://www.furaffinity.net/user/wolno", icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 32 32"><path fill="currentColor" d="M22.427 6.844L22.083 9.5l3.245.958l.042 2.865l2.974.057l-.073 3.005l2.891-.188c.005-1.01.068-6.724.839-9.354zm-7.286 17.474c.073-.281 0-1.203 0-1.526l-.063-1.948c-2.698-.115-5.604.427-5.604 2.911c0 .542.229 1.026.568 1.401h4.417c.333-.188.578-.448.682-.839zm12.047-6.896l.068-2.995l-2.938-.057l-.047-3.229l-3.37-1.151l.453-3.146H8.781C3.687 6.844 0 11.183 0 15.933v9.224h5.49a6.493 6.493 0 0 1-.031-1.005c.198-4.891 5.599-5.729 9.656-5.609v-1.406c-.068-1.135-.99-2.141-3.656-2.141c-1.776 0-3.885.229-5.25.724l.359-3.182c1.307-.365 2.776-.724 5.938-.724c6.099 0 6.771 2.703 6.724 5.844l-.031 7.5h3.307v-.005l.125.005c4.406 0 8.031-3.589 8.484-7.891z"/></svg>' },
        { href: "https://bsky.app/profile/awsartzzz.bsky.social", icon: '<i class="fa-solid fa-cloud" style="font-size:18px;"></i>' },
    ];

    // Create the link elements and append them to the bottom bar
    links.forEach(function (linkInfo) {
        var link = document.createElement("a");
        link.href = linkInfo.href;
        link.target = "_blank";
        link.innerHTML = linkInfo.icon;

        bottomBar.appendChild(link);
    });

    // Append the bottom bar to the body
    document.body.appendChild(bottomBar);
});

function createNavLinks() {
    const links = ["Home", "About me", "Portfolio", "Characters", "Comics", "Blog", "Events", "FAQs"];
    const hrefs = ["../index.html", "../About.html", "../Portfolio.html", "../Characters.html", "../Comics.html", "../Blog.html", "../Events.html", "../FAQs.html"];
    const navLinksElement = document.getElementById('nav-links');

    links.forEach((link, i) => {
        const isActive = window.location.href.includes(hrefs[i]);
        navLinksElement.innerHTML += `
            <a class="align-right${isActive ? '  active' : ''}" href="${hrefs[i]}">${link}</a>
        `;
    });
}


createNavLinks();
//slider
document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');

    let currentIndex = 0;

    function showSlide(index) {
        if (index < 0) {
            index = slides.length - 1;
        } else if (index >= slides.length) {
            index = 0;
        }

        const translateValue = -index * 100 + '%';
        slider.style.transform = 'translateX(' + translateValue + ')';
        currentIndex = index;
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const chapterSelect = document.getElementById('chapterSelect');
    const readingModeSelect = document.getElementById('readingModeSelect');
    const comicViewer = document.getElementById('comicViewer');

    function displayComic() {
        const selectedChapter = chapterSelect.value;
        const readingMode = readingModeSelect.value;
        
        // Update the URL hash
        window.location.hash = `/${selectedChapter}`; // Cambiamos "#" por "/"
    
        comicViewer.innerHTML = ''; // Limpiamos el visor de cómics
    
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
    
    function initializeChapterFromHash() {
        const hash = window.location.hash.substring(1); // Eliminamos "#" del hash
        const selectedChapter = hash.replace('/', ''); // Reemplazamos "/" por ""
        
        if (comics.hasOwnProperty(selectedChapter)) {
            chapterSelect.value = selectedChapter;
        }
        displayComic();
    }
    
    chapterSelect.addEventListener('change', displayComic);
    readingModeSelect.addEventListener('change', displayComic);
    
    // Inicializamos el visor de cómics basado en la URL hash al cargar la página
    initializeChapterFromHash();    
});

function toggleAccordion(button) {
    const content = button.nextElementSibling;
    content.classList.toggle('active');
}

function generateMenuItems() {
    var menuItems = [
        { href: "../index.html", text: "Home" },
        { href: "../About.html", text: "About me" },
        { href: "../Portfolio.html", text: "Portfolio" },
        { href: "../Characters.html", text: "Characters" },
        { href: "../Comic.html", text: "Comics" },
        { href: "../Blog.html", text: "Blog" },
        { href: "../Events.html", text: "Events" },
        { href: "../FAQs.html", text: "FAQs" }
    ];

    var menu = document.getElementById("mySidenav");

    // Botón para cerrar el menú
    var closeButton = document.createElement("button");
    closeButton.innerHTML = "&times;"; // Símbolo de cruz
    closeButton.className = "closebtn";
    closeButton.onclick = function() {
        closeNav();
    };
    menu.appendChild(closeButton);

    // Generar los elementos del menú
    menuItems.forEach(function(item) {
        var link = document.createElement("a");
        link.href = item.href;
        link.textContent = item.text;
        menu.appendChild(link);
    });
}

window.onload = function() {
    generateMenuItems();
};


document.addEventListener('DOMContentLoaded', function() {
    var script = document.createElement('script');
    script.src = 'https://storage.ko-fi.com/cdn/scripts/overlay-widget.js';
    script.async = true;
    document.body.appendChild(script);
  
    script.onload = function() {
      kofiWidgetOverlay.draw('wolno', {
        'type': 'floating-chat',
        'floating-chat.donateButton.text': 'Support art!',
        'floating-chat.donateButton.background-color': '#794bc4',
        'floating-chat.donateButton.text-color': '#fff'
      });
    };
  });
  