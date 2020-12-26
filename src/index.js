const request = require("request");

const app = (() => {

    const _containerStatuses = document.querySelector('.container__statuses');
    const _loader = document.querySelector('.loader');
    const _refreshButton = document.querySelector('.container__buttons__refresh');

    fetchGithubStatus();

    _refreshButton.addEventListener('click', (event) => {
        clearStatusesContainer();
        fetchGithubStatus();
    })

    function clearStatusesContainer() {
        _containerStatuses.textContent = '';
    }

    function showLoader() {
        _loader.classList.remove('hidden');
    }

    function hideLoader() {
        _loader.classList.add('hidden');
    }
    
    function fetchGithubStatus() {
        showLoader();
        request('https://www.githubstatus.com/', {json: true}, (err, res, body) => {
            if ( body.components) {
                renderStatusesContainer(body.components);
                hideLoader();
            }
        })
    }

    function renderStatusesContainer(components) {
        components.forEach((component) => {
            _containerStatuses.appendChild(createStatusDOM({...component}))
        })
    }

    function createStatusDOM({status, name, description}) {
        let statusContainer = document.createElement('section');
        let nameDisplay = document.createElement('h3');
        let statusDisplay = document.createElement('p');
        let descriptionDisplay = document.createElement('p');

        statusContainer.classList.add('container__statuses__status');
        nameDisplay.classList.add('container__statuses__status__name');
        statusDisplay.classList.add('container__statuses__status__state');
        descriptionDisplay.classList.add('container__statuses__status__desc');

        nameDisplay.textContent = name;
        statusDisplay.textContent = status;
        descriptionDisplay.textContent = description;

        if (status !== 'operational') {
            statusDisplay.classList.add('error');
        }

        statusContainer.append(nameDisplay, statusDisplay, descriptionDisplay);
        
        return statusContainer;
    }

})();