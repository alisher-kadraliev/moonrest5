(function () {
    // Function to fetch and apply CSS
    const fetchAndApplyCSS = () => {
        fetch('https://moonrest5.vercel.app/api/templateapi/getCssCampaign?domain=' + window.location.hostname)
            .then(response => response.text())
            .then(css => {
                // Remove any existing dynamic CSS
                const existingStyle = document.querySelector('style#dynamic-css');
                if (existingStyle) {
                    existingStyle.remove();
                }

                // Create and apply the new CSS
                const style = document.createElement('style');
                style.id = 'dynamic-css';
                style.appendChild(document.createTextNode(css));
                document.head.appendChild(style);
            })
            .catch(error => console.error('Error fetching CSS:', error));
    };

    // Function to fetch and display campaign data
    const fetchAndDisplayCampaign = () => {
        fetch('https://moonrest5.vercel.app/api/templateapi/get-template?domain=' + window.location.hostname)
            .then(response => response.json())
            .then(campaign => {
                // Create a container for the popup
                const container = document.createElement('div');
                container.id = 'popup-root';
                document.body.appendChild(container);

                // Insert the popup HTML
                const popupHTML = `
                    <div class="popup-custom">
                        <div class="content-custom moon-custom">
                            <span class="close-custom">&times;</span>
                            <h2>${campaign[0].title}</h2>
                        </div>
                    </div>
                `;
                container.innerHTML = popupHTML;

                // Close button functionality
                document.querySelector('.popup-custom .close-custom').onclick = function () {
                    container.remove();
                };
            })
            .catch(error => console.error('Error fetching campaign:', error));
    };

    // Fetch and apply CSS, then fetch and display campaign data
    fetchAndApplyCSS();
    fetchAndDisplayCampaign();
})();