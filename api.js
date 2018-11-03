var userSearch = $('#search').val();
var APIkey = 'fd73ba1ec8f2480d9eed93acc6de82a8';
var searchQueryURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=' + APIkey + '&q=' + userSearch;

$.ajax({
    url: searchQueryURL,
    method: "GET"
}).then(function(response){



})

$('.search-btn').on('click', function(){


    var uSearch = $('#search').val();
    console.log(userSearch);
    console.log(uSearch);


})