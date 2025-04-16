document.addEventListener('DOMContentLoaded', function() {
    // Apply special styling to Wolno username in comments
    function applyWolnoStyle() {
        // Only target elements with the comment-username class
        const usernameElements = document.querySelectorAll('.comment-username');
        
        usernameElements.forEach(element => {
            // Case insensitive check for "Wolno"
            if (element.textContent.toLowerCase().includes('wolno')) {
                element.classList.add('wolno-user');
            }
        });
    }
    
    // Initial application
    applyWolnoStyle();
    
    // Also observe for dynamically added comments
    const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            if (mutation.addedNodes.length) {
                // Check if new comments were added and apply styling
                applyWolnoStyle();
            }
        });
    });
    
    // Start observing the comments container if it exists
    const commentsContainer = document.getElementById('comments-container');
    if (commentsContainer) {
        observer.observe(commentsContainer, {
            childList: true,
            subtree: true
        });
    }
});