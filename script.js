document.addEventListener('DOMContentLoaded', function() {
    const popup = document.getElementById('cookiePopup');
    popup.classList.add('show');

    document.getElementById('agreeButton').addEventListener('click', function() {
        popup.classList.remove('show');
    });

    document.getElementById('closePopup').addEventListener('click', function() {
        popup.classList.remove('show');
    });

    document.querySelector('.hide-popup').addEventListener('click', function() {
        popup.classList.remove('show');
    });
});
