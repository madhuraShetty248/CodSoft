
document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;

  
    const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (userPrefersDark) {
        body.classList.add('dark-mode');
    }
    

    
    const toggleButton = document.getElementById('toggle-mode-button');
    if (toggleButton) {
        toggleButton.addEventListener('click', function () {
            body.classList.toggle('dark-mode');
        });
    }
});

