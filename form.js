//Student number: 10514797, Student Name: Caleb Eke
//Seat count Script//
var countseat = 0;
$('.seat-select').on('click', function () {
    if ($(this).is(':checked')) {
        countseat++;

    }

    document.getElementById('nom').innerText = countseat;
    var seat=countseat+"seat(s)"
    localStorage.setItem("seats", seat);

    var totalPrice = "€"+10 * countseat;
    localStorage.setItem("TotalPrice", totalPrice);

    $('#totalpri').text(totalPrice);

   
})



var Total = document.getElementById('totalpri').innerText;
var finalselection = localStorage.getItem('selected');
document.getElementById('finalselection').innerText = finalselection;


var coll = document.getElementsByClassName("collapsible");
var i;

//Form data saved to local storage//
$('#btnSubmit').on("click", function () {
    store();
    document.getElementById('confirmation').innerText = result;
})

function store() {
    var inputFname = document.getElementById("fname");
    var inputEmail = document.getElementById("email");
    var inputAddress = document.getElementById("adr");

    localStorage.setItem("fname", inputFname.value);
    localStorage.setItem("email", inputEmail.value);
    localStorage.setItem("address", inputAddress.value);



    col();

}
//Booking Confirmation Dialog//
var result = localStorage.getItem("fname") + "\n" + localStorage.getItem("email") + "\n" + localStorage.getItem("address") + "\n" + localStorage.getItem("selected") + "\n" + localStorage.getItem("seats") + "\n" + localStorage.getItem("TotalPrice");
function col() {
    for (i = 0; i < coll.length; i++) {

        coll[i].classList.toggle("active");
        var content = coll[i].nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        }
        else {
            content.style.display = "block";

        }


    }
}




