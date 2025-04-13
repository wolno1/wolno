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

    // Import Firebase modules (this assumes Firebase is already initialized elsewhere)
    import("https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js").then((firebaseAuth) => {
        import("https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js").then((firebaseFirestore) => {
            const { getAuth, onAuthStateChanged, signOut } = firebaseAuth;
            const { getFirestore, doc, getDoc } = firebaseFirestore;

            // Get Firebase instances
            const auth = getAuth();
            const db = getFirestore();

            // Check if user is logged in
            onAuthStateChanged(auth, async (user) => {
                if (user) {
                    try {
                        // Get user data from Firestore
                        const userDoc = await getDoc(doc(db, "user", user.uid));

                        if (userDoc.exists()) {
                            const userData = userDoc.data();
                            const nombreUsuario = userData.nombreUsuario;
                            const fotoPerfil = `../${userData.foto}`; // Add "../" to the profile image path

                            // Add profile link with username and profile picture
                            const profileLink = document.createElement('a');
                            profileLink.href = "../Profile.html";
                            profileLink.className = "topnav-button"; // Use the CSS class for consistency
                            profileLink.style.display = "flex";
                            profileLink.style.alignItems = "center";
                            profileLink.style.padding = "0 10px"; // Adjust padding to match other buttons

                            // Create profile picture element
                            const profileImage = document.createElement('img');
                            profileImage.src = fotoPerfil;
                            profileImage.alt = "Profile Picture";
                            profileImage.className = "profile-image"; // Use a CSS class for styling

                            // Add profile picture and username to the link
                            profileLink.appendChild(profileImage);
                            profileLink.appendChild(document.createTextNode(nombreUsuario));

                            // Append the profile link to the navigation
                            navLinksElement.appendChild(profileLink);

                            // Add logout button
                            const logoutButton = document.createElement('a');
                            logoutButton.href = "#";
                            logoutButton.className = "topnav-button logout-btn";
                            logoutButton.textContent = "Logout";
                            logoutButton.style.color = "#ff00e8";
                            logoutButton.style.marginLeft = "10px"; // Add spacing between the profile and logout buttons

                            // Add event listener for logout
                            logoutButton.addEventListener('click', (e) => {
                                e.preventDefault();
                                signOut(auth).then(() => {
                                    // Successful logout
                                    window.location.href = "../index.html"; // Redirect to home page
                                }).catch((error) => {
                                    console.error("Error signing out:", error);
                                });
                            });

                            // Append the logout button to the navigation
                            navLinksElement.appendChild(logoutButton);
                        }
                    } catch (error) {
                        console.error("Error fetching user data:", error);
                    }
                } else {
                    // If the user is not logged in, add a "Log-in" button
                    const loginButton = document.createElement('a');
                    loginButton.href = "../Login.html"; // Redirect to the login page
                    loginButton.className = "align-right login-btn";
                    loginButton.textContent = "Log-in";
                    loginButton.style.fontWeight = "bold";
                    loginButton.style.color = "#ff00e8";
                    loginButton.style.cursor = "pointer";

                    navLinksElement.appendChild(loginButton);
                }
            });
        });
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

// Replace the event listener section with this updated version
document.addEventListener('DOMContentLoaded', function() {
    const chapterSelect = document.getElementById('chapterSelect');
    const readingModeSelect = document.getElementById('readingModeSelect');
    const comicViewer = document.getElementById('comicViewer');
    
    // Get parameters from URL
    const urlParams = new URLSearchParams(window.location.search);
    const chapterParam = urlParams.get('chapter');
    const modeParam = urlParams.get('mode');
    
    // Set initial values from URL parameters if present
    if (chapterParam && chapterToPageMap[chapterParam]) {
        chapterSelect.value = chapterParam;
    }
    
    if (modeParam) {
        readingModeSelect.value = modeParam;
    }
    
    // Set the current comment page based on reading mode
    function updateCurrentCommentPage() {
        if (readingModeSelect.value === 'allPages') {
            // If "All Pages" is selected, use the general MT page
        } else {
            // Otherwise use the chapter-specific page (MT1, MT2, etc)
            currentCommentPage = chapterToPageMap[chapterSelect.value];
        }
        console.log("Comment page set to:", currentCommentPage);
    }
    
    // Function to display comics based on selected mode
        // Function to display comics based on selected mode
    function displayComic() {
        const selectedChapter = chapterSelect.value;
        const readingMode = readingModeSelect.value;
        
        comicViewer.innerHTML = ''; // Clear the comic viewer
    
        if (readingMode === 'onePage') {
            // Show only the selected chapter
            if (comics[selectedChapter] && comics[selectedChapter].length > 0) {
                comics[selectedChapter].forEach(page => {
                    const img = document.createElement('img');
                    img.src = page;
                    img.alt = `Page from ${selectedChapter}`;
                    // Remove inline styles to allow CSS to take effect
                    comicViewer.appendChild(img);
                    
                    // Add zoom functionality
                    img.addEventListener('click', function() {
                        this.classList.toggle('zoomed');
                    });
                });
            }
            chapterSelect.disabled = false;
        } else if (readingMode === 'allPages') {
            // Show all chapters in sequence
            console.log("Displaying all chapters");
            
            // Get all chapter keys in order
            const chapterKeys = Object.keys(comics).sort();
            
            // Display all pages from all chapters in order
            chapterKeys.forEach(chapter => {
                // Add chapter title
                const chapterTitle = document.createElement('h2');
                chapterTitle.className = 'chapter-title';
                chapterTitle.textContent = document.querySelector(`#chapterSelect option[value="${chapter}"]`).textContent;
                chapterTitle.style.textAlign = 'center';
                chapterTitle.style.margin = '30px 0 20px 0';
                comicViewer.appendChild(chapterTitle);
                
                // Add chapter pages
                if (comics[chapter] && comics[chapter].length > 0) {
                    comics[chapter].forEach(page => {
                        const img = document.createElement('img');
                        img.src = page;
                        img.alt = `Page from ${chapter}`;
                        // Remove inline styles to allow CSS to take effect
                        comicViewer.appendChild(img);
                        
                        // Add zoom functionality
                        img.addEventListener('click', function() {
                            this.classList.toggle('zoomed');
                        });
                    });
                }
            });
            
            chapterSelect.disabled = true;
        }
    }
    
    // Set initial comment page and display comic
    updateCurrentCommentPage();
    displayComic();
    
    // Update when chapter changes
    chapterSelect.addEventListener('change', function() {
        const selectedChapter = this.value;
        
        // Create new URL with the selected chapter and current mode
        const url = new URL(window.location.href);
        url.searchParams.set('chapter', selectedChapter);
        url.searchParams.set('mode', readingModeSelect.value);
        
        // Reload the page with the new parameters
        window.location.href = url.toString();
    });
    
    // Update when reading mode changes
    readingModeSelect.addEventListener('change', function() {
        const selectedMode = this.value;
        
        // Create new URL with the current chapter and selected mode
        const url = new URL(window.location.href);
        url.searchParams.set('chapter', chapterSelect.value);
        url.searchParams.set('mode', selectedMode);
        
        // Reload the page with the new parameters
        window.location.href = url.toString();
    });
});

// Make loadComments accessible globally
window.loadComments = loadComments;
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
        { href: "../Comics.html", text: "Comics" },
        { href: "../Blog.html", text: "Blog" },
        { href: "../Events.html", text: "Events" },
        { href: "../FAQs.html", text: "FAQs" }
    ];

    var menu = document.getElementById("mySidenav");

    // Botón para cerrar el menú
    var closeButton = document.createElement("button");
    closeButton.innerHTML = "&times;"; // Símbolo de cruz
    closeButton.className = "closebtn";
    closeButton.onclick = function () {
        closeNav();
    };
    menu.appendChild(closeButton);

    // Generar los elementos del menú
    menuItems.forEach(function (item) {
        var link = document.createElement("a");
        link.href = item.href;
        link.textContent = item.text;
        menu.appendChild(link);
    });

    // Import Firebase modules
    import("https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js").then((firebaseAuth) => {
        import("https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js").then((firebaseFirestore) => {
            const { getAuth, onAuthStateChanged, signOut } = firebaseAuth;
            const { getFirestore, doc, getDoc } = firebaseFirestore;

            const auth = getAuth();
            const db = getFirestore();

            // Check user authentication state
            onAuthStateChanged(auth, async (user) => {
                if (user) {
                    try {
                        // Fetch user data from Firestore
                        const userDoc = await getDoc(doc(db, "user", user.uid));
                        if (userDoc.exists()) {
                            const userData = userDoc.data();
                            const nombreUsuario = userData.nombreUsuario;
                            const fotoPerfil = `../${userData.foto}`; 

                            // Add Profile button
                            const profileLink = document.createElement("a");
                            profileLink.href = "../Profile.html";
                            profileLink.className = "sidebar-button";
                            profileLink.style.display = "flex";
                            profileLink.style.alignItems = "center";
                            profileLink.style.justifyContent = "center"; // Center horizontally
                            profileLink.style.flexDirection = "column"; // Stack image and text vertically
                            profileLink.style.textAlign = "center"; // Center text

                            const profileImage = document.createElement("img");
                            profileImage.src = fotoPerfil;
                            profileImage.alt = "Profile Picture";
                            profileImage.style.width = "50px";
                            profileImage.style.height = "50px";
                            profileImage.style.borderRadius = "50%";
                            profileImage.style.marginBottom = "5px"; // Add spacing below the image

                            profileLink.appendChild(profileImage);
                            profileLink.appendChild(document.createTextNode(nombreUsuario));
                            menu.appendChild(profileLink);

                            // Add Logout button
                            const logoutButton = document.createElement("a");
                            logoutButton.href = "#";
                            logoutButton.className = "sidebar-button";
                            logoutButton.textContent = "Logout";
                            logoutButton.style.color = "#ff00e8"; // Set color to #ff00e8
                            logoutButton.onclick = (e) => {
                                e.preventDefault();
                                signOut(auth).then(() => {
                                    window.location.href = "../index.html";
                                }).catch((error) => {
                                    console.error("Error signing out:", error);
                                });
                            };
                            menu.appendChild(logoutButton);
                        }
                    } catch (error) {
                        console.error("Error fetching user data:", error);
                    }
                } else {
                    // Add Login button
                    const loginButton = document.createElement("a");
                    loginButton.href = "../Login.html";
                    loginButton.className = "sidebar-button";
                    loginButton.textContent = "Login";
                    loginButton.style.color = "#ff00e8"; // Set color to #ff00e8
                    menu.appendChild(loginButton);
                }
            });
        });
    });
}

window.onload = function() {
    generateMenuItems();
};


document.addEventListener('DOMContentLoaded', function () {
    // Create Patreon button
    var patreonContainer = document.createElement('div');
    patreonContainer.className = 'custom-patreon-button';
    patreonContainer.style.position = 'fixed';
    patreonContainer.style.bottom = '140px'; // Position above the Ko-fi button
    patreonContainer.style.left = '20px'; // Align to the left side
    patreonContainer.style.zIndex = '999'; // Ensure it appears above other elements
    patreonContainer.style.width = '50px'; // Fixed width for the icon
    patreonContainer.style.height = '50px'; // Fixed height for the icon

    patreonContainer.innerHTML = `
        <a href="https://www.patreon.com/c/wolno/membership" target="_blank" style="
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #f96854;
            border-radius: 50%;
            width: 100%;
            height: 100%;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            transition: transform 0.2s ease;
        " onmouseover="this.style.transform='scale(1.1)';" 
           onmouseout="this.style.transform='scale(1)';">
            <img src="../SVG/Patreon.svg" alt="Patreon" style="width: 24px; height: 24px;">
        </a>
    `;
    document.body.appendChild(patreonContainer);

    // Create Ko-fi button
    var kofiContainer = document.createElement('div');
    kofiContainer.className = 'custom-kofi-button';
    kofiContainer.style.position = 'fixed';
    kofiContainer.style.bottom = '80px'; // Position below the Patreon button
    kofiContainer.style.left = '20px'; // Align to the left side
    kofiContainer.style.zIndex = '999'; // Ensure it appears above other elements
    kofiContainer.style.width = '50px'; // Fixed width for the icon
    kofiContainer.style.height = '50px'; // Fixed height for the icon

    kofiContainer.innerHTML = `
        <a href="https://ko-fi.com/wolno/tiers" target="_blank" style="
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #29abe0;
            border-radius: 50%;
            width: 100%;
            height: 100%;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            transition: transform 0.2s ease;
        " onmouseover="this.style.transform='scale(1.1)';" 
           onmouseout="this.style.transform='scale(1)';">
            <img src="../SVG/Kofi.svg" alt="Ko-fi" style="width: 24px; height: 24px;">
        </a>
    `;
    document.body.appendChild(kofiContainer);
});