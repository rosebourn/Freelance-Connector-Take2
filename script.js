var citySearch = $("#city-input").val();

$("#city-search").on("click", function (event) {
    event.preventDefault();
    var citySearch = $("#city-input").val();
    console.log(citySearch);
    //job(citySearch);
    localStorage.setItem("city-input", citySearch);
    window.location.href = "./results.html";
})







