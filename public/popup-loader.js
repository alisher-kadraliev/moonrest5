(function () {
    // Fetch the CSS from your API endpoint
    fetch('https://moonrest5.vercel.app/api/templateapi/getCssCampaign?domain=' + window.location.hostname)
        .then(response => response.text())
        .then(css => {
            // Create a <style> element
            const style = document.createElement("style");
            style.type = "text/css";
            style.appendChild(document.createTextNode(css));
            // Append the <style> element to the <head>
            document.head.appendChild(style);

            // Fetch the campaign details from your API endpoint
            return fetch('https://moonrest5.vercel.app/api/templateapi/get-template?domain=' + window.location.hostname);
        })
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
        .catch(error => console.error('Error fetching campaign or CSS:', error));
})();