

var citySearch = $("#city-input").val();

$("#city-search").on("click", function (event) {
    event.preventDefault();
    var citySearch = $("#city-input").val();
    console.log(citySearch);
    //job(citySearch);
    localStorage.setItem("city-input", citySearch);
    window.location.href = "./results.html";
})





var hotelSearch = $("#city-input").val();

$("#hotel-please").on("click", function (event) {
    event.preventDefault();
    var hotelSearch = $("#city-input").val();
    console.log("clicked");
    hotel(hotelSearch);
    window.location.href="./search.html";

    function hotel(hotelSearch) {

        var yelpURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=hotel&catagories=hotels&location=" + hotelSearch;

        var key = "oYWHpC6eoQxANbGPlnt9OeA4KdwBCweVLtDZlDdStjnGcPCO1rM8zV2b0IBCw5RaTsOjPO7h7G-YzELmSD1dneDzUyy_I1WH5yzm-OLW32UleOE4kYTu0j6uHVGyXXYx";

        $.ajax({
            url: yelpURL,
            method: "GET",
            dataType: 'json',
            headers: {
                "Authorization": 'Bearer ' + key
            }
        }).then(function (response) {
            console.log(response);

            var hotels = ["#hotel1", "#hotel2", "#hotel3", "#hotel4", "#hotel5", "#hotel6", "#hotel7", "#hotel8"];

            for (var i = 0; i < hotels.length; i++);
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

})


