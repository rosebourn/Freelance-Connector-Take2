$("#city-search").on("click", function(event) {
    event.preventDefault();
    var citySearch = $("#city-input").val();
    console.log(citySearch);
    job(citySearch);

})

function job(citySearch) {

    var githubURL = "https://cors-anywhere.herokuapp.com/https://jobs.github.com/////positions.json?//////&location=" + citySearch;

$.ajax({
    url: githubURL,
    method: "GET",
}).then(function(response) {
    console.log(response);
    for (var i = 0; i < 7; i++);
    var logoURL = response[i].company_logo;
    var companyName = $(".company-name");
    var jobTitle = $(".job-title");


    $(".company-logo").attr("src", logoURL)
    companyName.text(response[i].company);
    jobTitle.text(response[i].title);
    
})
  
var yelpURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=hotel&catagories=hotels&location=" + citySearch;

var key = "oYWHpC6eoQxANbGPlnt9OeA4KdwBCweVLtDZlDdStjnGcPCO1rM8zV2b0IBCw5RaTsOjPO7h7G-YzELmSD1dneDzUyy_I1WH5yzm-OLW32UleOE4kYTu0j6uHVGyXXYx";

$.ajax({
    url: yelpURL,
    method: "GET",
    dataType: 'json',
    headers: {
        "Authorization" : 'Bearer ' + key
    }
}).then(function(response) {
    console.log(response);
    for (var i = 0; i < 7; i++);
    var imgURL = response.businesses[i].image_url;
    var hotelName = $(".card-title-hotel");
    var hotelAdd = $(".hotel-address");
    var hotelNum = $(".hotel-phone");

    hotelName.text(response.businesses[i].name);
    $(".hotel-img").attr("src", imgURL);
    hotelAdd.text(response.businesses[i].location.display_address);
    hotelNum.text(response.businesses[i].display_phone);
    
})
}


