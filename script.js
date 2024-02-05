document.addEventListener('DOMContentLoaded', (event) => {
    // Get the modal
    var modal = document.getElementById('moreAboutXcodeModal');

    // Get the button that opens the modal
    var btn = document.getElementById('openMoreAboutXcodeBtn');

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


document.addEventListener('DOMContentLoaded', (event) => {
    // Get the modal
    var modal = document.getElementById('moreAboutDataModelModal');

    // Get the button that opens the modal
    var btn = document.getElementById('openMoreAboutDataModelBtn');

    // Get the close button
    var closeButton = document.querySelector('.close-datamodal-button');

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


document.addEventListener('DOMContentLoaded', (event) => {
    // Get the modal
    var modal = document.getElementById('moreAboutSwiftUIModal');

    // Get the button that opens the modal
    var btn = document.getElementById('openMoreAboutSwiftUIBtn');

    // Get the close button
    var closeButton = document.querySelector('.close-swiftui-button');

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


document.addEventListener('DOMContentLoaded', (event) => {
    // Get the modal
    var modal = document.getElementById('moreAboutActionsModal');

    // Get the button that opens the modal
    var btn = document.getElementById('openMoreAboutActionsBtn');

    // Get the close button
    var closeButton = document.querySelector('.close-actions-button');

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

document.addEventListener('DOMContentLoaded', (event) => {
    // Get the modal
    var modal = document.getElementById('moreAboutDevAccountModal');

    // Get the button that opens the modal
    var btn = document.getElementById('openMoreAboutDevAccountBtn');

    // Get the close button
    var closeButton = document.querySelector('.close-dev-button');

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
