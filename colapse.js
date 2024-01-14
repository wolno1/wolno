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

    closeButton.onclick = function () {
        closeModal();
    };

    imageContainers.forEach(function (container, index) {
        container.addEventListener('click', function () {
            openModal(index);
        });
    });

    function openModal(index) {
        modal.style.display = 'block';
        modalImage.src = imageContainers[index].querySelector('img').src;
        captionText.innerHTML = imageContainers[index].dataset.text || 'Default Text';
    }

    function closeModal() {
        modal.style.display = 'none';
    };

    window.onclick = function (event) {
        if (event.target == modal) {
            closeModal();
        }
    };
});
