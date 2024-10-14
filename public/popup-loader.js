(function () {
    // Fetch the CSS from the API and apply it to the document
    const applyCustomStyles = async () => {
        try {
            const response = await fetch('https://moonrest5.vercel.app/api/templateapi/getCssCampaign');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const cssText = await response.text();
            const styleElement = document.createElement("style");
            styleElement.innerHTML = cssText;
            document.head.appendChild(styleElement);
        } catch (error) {
            console.error('Error fetching CSS:', error);
        }
    };

    // Function to create and display the modal
    const showModal = async () => {
        const response = await fetch('https://moonrest5.vercel.app/api/templateapi/get-template?domain=' + window.location.hostname);
        const campaign = await response.json();

        // Create the modal container
        const container = document.createElement('div');
        container.id = 'popup-root';
        document.body.appendChild(container);

        // HTML structure for the modal
        const popupHTML = `
            <div class="popup-custom">
                <div class="content-custom moon-custom">
                    <span class="close-custom">&times;</span>
                    <h2>${campaign[0].title}</h2>
                </div>
            </div>
        `;
        container.innerHTML = popupHTML;

        // Event listener to close the modal
        document.querySelector('.popup-custom .close-custom').onclick = function () {
            container.remove();
        };
    };

    // Fetch and apply the CSS, then show the modal
    (async () => {
        await applyCustomStyles();
        await showModal();
    })();
})();