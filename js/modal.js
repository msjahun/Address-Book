// Get the modal
var modal = document.getElementById('myModal');
var emodal = document.getElementById('editModal');

// Get the button that opens the modal
var btn = document.getElementById("addBtn");

// Get the <span> element that closes the modal
var span = document.getElementById("close-modal");

var editSpan = document.getElementById("close-editmodal");

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}
editSpan.onclick = function() {
    emodal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    if (event.target == emodal) {
        emodal.style.display = "none";
    }
}