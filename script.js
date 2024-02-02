document.addEventListener('DOMContentLoaded', (event) => {
    // Get the modal
    var modal = document.getElementById('myModal');

    // Get the button that opens the modal
    var btn = document.getElementById('openModalBtn');

    // Get the close button
    var closeButton = document.querySelector('.close-button');

    // When the user clicks on the button, open the modal 
    btn.onclick = function() {
        modal.classList.remove('hidden');
    }

    // When the user clicks on the close button, close the modal
    closeButton.addEventListener('click', function() {
        modal.classList.add('hidden');
    });

    // When the user clicks anywhere outside of the modal, close it
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.classList.add('hidden');
        }
    });
});
