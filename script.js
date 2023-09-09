//Toggle for dropdown
function dropdownActivation() {
    document.getElementById("navDropdown").classList.toggle("show");
    document.getElementById("navDropdown").classList.toggle("active");
  }
  
//Toggles the dropmenu off if the user clicks outside it
  window.onclick = function(e) {
    if (!e.target.matches('.dropbutton')) {
    var navDropdown = document.getElementById("navDropdown");
      if (navDropdown.classList.contains('show')) {
        navDropdown.classList.remove('show');
      }
    }
  }