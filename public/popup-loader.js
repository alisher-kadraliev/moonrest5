(function () {
    const link = document.createElement("link")
    link.rel = "stylesheet"
    link.href = "https://moonrest5.vercel.app/popup.css"
    document.head.appendChild(link)

    fetch('https://moonrest5.vercel.app/api/templateapi/get-template?domain=' + window.location.hostname)
        .then(response => response.json())
        .then(campaign => {
            const container = document.createElement('div');
            container.id = 'popup-root';
            document.body.appendChild(container);

            const popupHTML = `
                <div class="popup-custom">
                    <div class="content-custom moon-custom">
                        <span class="close-custom">&times;</span>
                        <h2>${campaign[0].title}</h2>
                    </div>
                </div>
            `;

            container.innerHTML = popupHTML;

            document.querySelector('.popup-custom .close-custom').onclick = function () {
                container.remove();
            };
        })
        .catch(error => console.error('Error fetching campaign:', error));
})();