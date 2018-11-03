

$(document).ready(function () {


    function submit() {
        $("#submit-button").on("click", function (event) {

            event.preventDefault();

           
            var userInput = $("#location").val()
            var queryURL = "https://api.seatgeek.com/2/events?&client_id=MTM3MzQ5ODJ8MTU0MTAzNTk1NC4z&client_secret=bafaccd7c9def60e73e3d2fcfcca15297124b926e7f941a51303a63dc998c0f3&venue.city=" + userInput 

            console.log(userInput);
            console.log(queryURL)

            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function (response) {
                console.log(response);

                for (var i=0; i<response.events.length; i++){
                    var newDiv = $("<div class='item'>");

                    var event = {
                        name: response.events[i].title,
                        dateTime: response.events[i].datetime_local,
                        venue: response.events[i].venue.name,
                        address: response.events[i].venue.address,
                        tickets: response.events[i].url
                    };

                    var pEvent = $("<p>").text("Event: " + event.name);
                    var pDateTime = $("<p>").text("Date and Time: " + event.dateTime);
                    var pVenue = $("<p>").text("Venue: " + event.venue);
                    var pAddress = $("<p>").text("Address: " + event.address);
                    var pTix = $("<p>").text("Tickets: " + event.tickets);


                    newDiv.prepend(pEvent, pDateTime, pVenue, pAddress, pTix);
                    $("#display-here").prepend(newDiv);
                    console.log(event);
                    
                    // console.log("Look at these events: " + response.events[i].title);
                    // console.log("Look at these dates and times: " + response.events[i].datetime_local);
                    // console.log("Look at this link to tickets: " + response.events[i].url);
                    // console.log("Look at this venue: " + response.events[i].venue.name);
                    // console.log("Look at this address: " + response.events[i].venue.address);
                    // console.log("Event: " + response.events[i].title);

                    //console log link to tix
                    //console log another thing
                    //store in an object 
                }
            });
        });
    };

    submit();

});