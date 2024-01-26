document.addEventListener('DOMContentLoaded', function () {
    // Collapsible script
    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    }

    // Image modal script
    var imageContainers = document.querySelectorAll('.image-container');
    var modal = document.getElementById('imageModal');
    var modalImage = document.getElementById('modalImage');
    var captionText = document.getElementById('caption');
    var closeButton = document.getElementsByClassName('close')[0];
    var prevButton = document.getElementById('prevButton');
    var nextButton = document.getElementById('nextButton');

    closeButton.onclick = function () {
        closeModal();
    };

    prevButton.onclick = function () {
        navigate(-1);
    };

    nextButton.onclick = function () {
        navigate(1);
    };

    // Add event listeners for keyboard arrow keys
    document.addEventListener('keydown', function (event) {
        if (modal.style.display === 'block') {
            if (event.key === 'ArrowLeft') {
                navigate(-1);
            } else if (event.key === 'ArrowRight') {
                navigate(1);
            }
        }
    });

    imageContainers.forEach(function (container, index) {
        container.addEventListener('click', function () {
            openModal(index);
        });
    });

    function openModal(index) {
        modal.style.display = 'block';
        modalImage.src = imageContainers[index].querySelector('img').src;
        captionText.innerHTML = imageContainers[index].dataset.text || 'Default Text';

        // Show/hide navigation buttons based on the image index
        toggleNavigationButtons(index, imageContainers.length);
    }

    function closeModal() {
        modal.style.display = 'none';
    }

    function toggleNavigationButtons(currentIndex, totalImages) {
        prevButton.style.display = currentIndex > 0 ? 'block' : 'none';
        nextButton.style.display = currentIndex < totalImages - 1 ? 'block' : 'none';
    }

    function navigate(direction) {
        var currentIndex = Array.from(imageContainers).findIndex(function (container) {
            return container.querySelector('img').src === modalImage.src;
        });

        var newIndex = currentIndex + direction;
        if (newIndex >= 0 && newIndex < imageContainers.length) {
            modalImage.src = imageContainers[newIndex].querySelector('img').src;
            captionText.innerHTML = imageContainers[newIndex].dataset.text || 'Default Text';

            // Update navigation buttons based on the new index
            toggleNavigationButtons(newIndex, imageContainers.length);
        }
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            closeModal();
        }
    };
});