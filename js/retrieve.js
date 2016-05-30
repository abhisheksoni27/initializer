function MyAPIKey() {
    this.MyAPIKey = "AIzaSyD09ZnnI2KbG0voNybL5co19fnuMcJnTDM";
    return this.MyAPIKey;
}

var Fetch = function() {
    var URL = "http://jsonplaceholder.typicode.com/posts/";
    fetch(URL, { mode: 'cors' })
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            // work on Json  
            console.log(json);
            var a = document.getElementById('hw');

            a.innerHTML = json[0].title;

        })
        .catch(function(error) {
            console.log('Request failed', error)
        });
}