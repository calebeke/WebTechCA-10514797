//Student number: 10514797, Student Name: Caleb Eke
//JQuerry for MovieListing
 
function generateSelect(id, day, items) {
 
    htmlString = [];
    htmlString.push(`<select id='${id}' data-day='${day}'  class='movieTimes formcontrol'>`);
    htmlString.push("<option value=''>Choose a time</option");
 
    var options = items.map(x => {
 
        return `<option value='${x}'>${x}</option>`;
 
    })
 
 
    htmlString.push(options.join(" "))
    htmlString.push("</select>");
 
 
    return htmlString.join(" ");

}
 
 
 
$(function () {
 
    $('#movieListingBody').on('change', '.movieTimes', function() {
        
 
        var element = $(this).prop('id');
        var currentTimeChosen = $(this).val();
        var currentDayChosen = $(this).data('day');
       // var currentTitle=$(this).data('Title');
        document.getElementById('selection').innerText=element+"\n"+currentDayChosen+"\n"+currentTimeChosen;
        var savedSelection=document.getElementById('selection').innerText;
        save(savedSelection);
        $('#Selection').show();
        console.log('movie time have changed for id: ' + element);
        console.log('movie time is set for : ' + currentTimeChosen);
        console.log('movie day is set for : ' + currentDayChosen);
      

    })
 
 
    //Add the button handler
    
        $.getJSON('https://college-movies.herokuapp.com/', function (movies) {
            var htmlString = [];
            $('#Selection').hide();
            for (var i = 0; i < movies.length; i++) {
 
                var currentMovie = movies[i];
                htmlString.push("<tr>");
                htmlString.push("<td>");
                htmlString.push(currentMovie.title);
                var mtitle=currentMovie.title;
                htmlString.push("</td>");
 
                 
                htmlString.push("</td>")
                htmlString.push("<td>");
                htmlString.push(generateSelect(mtitle, 'Monday', currentMovie.runningTimes.mon));
                htmlString.push("</td>");

                htmlString.push("<td>");
                htmlString.push(generateSelect(mtitle, 'Tuesday', currentMovie.runningTimes.tue));
                htmlString.push("</td>");
 
                htmlString.push("<td>");
                htmlString.push(generateSelect(mtitle, 'Wednesday', currentMovie.runningTimes.wed));
                htmlString.push("</td>");
 
                htmlString.push("<td>");
                htmlString.push(generateSelect(mtitle, 'Thursday', currentMovie.runningTimes.thu));
                htmlString.push("</td>");
 
                htmlString.push("<td>");
                htmlString.push(generateSelect(mtitle, 'Friday', currentMovie.runningTimes.fri));
                htmlString.push("</td>");
 
                htmlString.push("<td>");
                htmlString.push(generateSelect(mtitle, 'Saturday', currentMovie.runningTimes.sat));
                htmlString.push("</td>");
 
                htmlString.push("<td>");
                htmlString.push(generateSelect(mtitle, 'Sunday', currentMovie.runningTimes.sun));
                htmlString.push("</td>");
 
 
                htmlString.push("</tr>");
            }
 
            var finalHTML = htmlString.join(" ")
 
            $('#movieListingBody').append(finalHTML);
 
        })

        function save(mymovies){
            localStorage.setItem('selected',mymovies);
        }

        
 
    })
 
