

var jobs = ["#job1", "#job2", "#job3", "#job4", "#job5", "#job6", "#job7", "#job8"];
//var jobSearch = localStorage.getItem("city-input").val();

function job(citySearch) {

    var githubURL = "https://cors-anywhere.herokuapp.com/https://jobs.github.com/////positions.json?//////&location=" + citySearch;

    $.ajax({
        url: githubURL,
        method: "GET",
    }).then(function (response) {
        console.log(response);



        for (var i = 0; i < jobs.length; i++);
        //var jobCard1 = $("#job1");
        var logoURL = response[i].company_logo;
        var companyName = $(".company-name");
        var jobTitle = $(".job-title");
        var modalCont = $(".modal-content");
        var apply = $(".modal-apply");


        $(".company-logo").attr("src", logoURL)
        companyName.text(response[i].company);
        jobTitle.text(response[i].title);

        $(document).ready(function () {
            $('.modal').modal();
            modalCont.html(response[i].description);
            apply.html(response[i].how_to_apply);
        });

    })
}
var city = localStorage.getItem("city-input");
job(city);