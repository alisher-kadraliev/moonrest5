(function () {
    // Function to fetch and apply CSS
    const fetchAndApplyCSS = () => {
        fetch('https://moonrest5.vercel.app/api/templateapi/getCssCampaign?domain=' + window.location.hostname)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.text();
            })
            .then(css => {
                console.log('Fetched CSS:', css); // Debugging fetched CSS

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

                console.log('Applied CSS:', css); // Debugging applied CSS
            })
            .catch(error => console.error('Error fetching CSS:', error));
    };

    // Function to fetch and display campaign data
    const fetchAndDisplayCampaign = () => {
        fetch('https://moonrest5.vercel.app/api/templateapi/get-template?domain=' + window.location.hostname)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(campaign => {
                console.log('Fetched Campaign Data:', campaign); // Debugging fetched campaign data

                // Create a container for the popup
                const container = document.querySelector('#popup-root') || document.createElement('div');
                container.id = 'popup-root';

                if (!document.body.contains(container)) {
                    document.body.appendChild(container);
                }

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


    setInterval(() => {
        fetchAndApplyCSS();
        fetchAndDisplayCampaign();
    }, 30000); // Every 30 seconds
})();