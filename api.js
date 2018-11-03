
var APIkey = 'fd73ba1ec8f2480d9eed93acc6de82a8';
var queryURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=' + APIkey;

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response){

console.log(response);

})