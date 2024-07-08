document.addEventListener('DOMContentLoaded', function () {
    var cardLinks = document.querySelectorAll('.card-link');

    [...cardLinks].forEach((cardLink) => {
        cardLink.addEventListener('click', function (event) {
            event.preventDefault(); // Ngăn chặn sự kiện nhảy link
        });
    });
});
