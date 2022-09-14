let mainCheckbox = document.getElementById("main-checkbox");
let allCheckboxes = document.querySelectorAll(".selectAll");
//console.log(allCheckboxes)
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
