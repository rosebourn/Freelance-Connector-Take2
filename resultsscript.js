function job(citySearch) {

    var githubURL = "https://cors-anywhere.herokuapp.com/https://jobs.github.com/////positions.json?//////&location=" + citySearch;

    $.ajax({
        url: githubURL,
        method: "GET",
    }).then(function (response) {
        console.log(response);

     var jobs = ["#job1", "#job2", "#job3", "#job4", "#job5", "#job6", "#job7", "#job8"];

        for (var i = 0; i < jobs.length; i++) {
        
        var logoURL = response[i].company_logo;
        var companyName = $(".company-name" + i);
        var jobTitle = $(".job-title" + i);
        var modalCont = $(".modal-content" + i);
        var apply = $(".modal-apply" + i);

        $(".company-logo" + i).attr("src", logoURL)
        companyName.text(response[i].company);
        jobTitle.text(response[i].title);

        $(document).ready(function () {
            $('.modal').modal();
            modalCont.html(response[i].description);
            apply.html(response[i].how_to_apply);
        });
    }   
})

}


var city = localStorage.getItem("city-input");
job(city);

$("#hotel-please").on("click", function (event) {
    event.preventDefault();
    var hotelSearch = localStorage.getItem("city-input");
    window.location.href="./search.html";
})