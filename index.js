let mainCheckbox = document.getElementById("main-checkbox");
let allCheckboxes = document.querySelectorAll(".selectAll");
let firstbox = document.getElementById("first-checkbox");
let secondbox = document.getElementById("second-checkbox");
let thirdbox = document.getElementById("third-checkbox");
let fourthbox = document.getElementById("fourth-checkbox");

function add() {
    if (
        firstbox.checked &&
        secondbox.checked &&
        thirdbox.checked &&
        fourthbox.checked
        ) {
        mainCheckbox.checked = true;
        } else {
        mainCheckbox.checked = false;
        }  
    
  }
  allCheckboxes.forEach(function(checkbox){
      checkbox.addEventListener('change', add);
  })
  
  function isChecked(){
    if(mainCheckbox.checked){
        allCheckboxes.forEach(function(checkbox){
            checkbox.checked = true;
    })
    }else{
        allCheckboxes.forEach(function(checkbox){
            checkbox.checked = false;
        })

    }
}










