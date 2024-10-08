(function () {
    fetch('https://moonrest5.vercel.app/api/get-template?domain=' + window.location.hostname)
        .then(response => response.json())
        .then(template => {
            const container = document.createElement('div');
            container.id = 'popup-root';
            document.body.appendChild(container);

            const popupHTML = `
                <div class="popup-custom">
                    <div class="content moon-custom">
                        <span class="close-custom">&times;</span>
                        <h2>${template[0].title}</h2>
                    </div>
                </div>
            `;

            container.innerHTML = popupHTML;

            document.querySelector('.popup-custom .close-custom').onclick = function () {
                container.remove();
            };
        })
        .catch(error => console.error('Error fetching template:', error));
})();