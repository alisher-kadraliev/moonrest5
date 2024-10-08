(function () {
    fetch('https://moonrest5.vercel.app/api/get-template?domain=' + window.location.hostname)
        .then(response => response.json())
        .then(template => {
            const container = document.createElement('div');
            container.id = 'popup-root';
            document.body.appendChild(container);

            const popupHTML = `
        <div class="popup">
          <div class="content">
            <span class="close">&times;</span>
            <h2>${template.title}</h2>
          </div>
        </div>
      `;

            container.innerHTML = popupHTML;

            document.querySelector('.popup .close').onclick = function () {
                container.remove();
            };
        });
})();