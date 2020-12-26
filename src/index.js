const request = require("request");

const app = (() => {

    fetchGithubStatus();
    
    function fetchGithubStatus() {
        request('https://www.githubstatus.com/', {json: true}, (err, res, body) => {
            console.log(body);
        })
    }

})();