var selectedRow = null


function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}
function readFormData(){
    var formData = {};
    formData["myname"] = document.getElementById("myname").value;
    formData["myclass"] = document.getElementById("myclass").value;
    formData["mynumber"] = document.getElementById("mynumber").value;
    return formData;
}
function insertNewRecord(data){

    var table = document.getElementById("studentlist").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.myname;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.myclass;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.mynumber;
    cell3 = newRow.insertCell(3);
    cell3.innerHTML =  `<a onClick="onEdit(this)">Edit</a>
    <a onClick="onDelete(this)">Delete</a>`;
                       
}
function resetForm() {
    document.getElementById("myname").value = "";
    document.getElementById("myclass").value = "";
    document.getElementById("mynumber").value = "";
    var selectedRow = null;
}
function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById("myname").value = selectedRow.cells[0].innerHTML;
    document.getElementById("myclass").value = selectedRow.cells[1].innerHTML;
    document.getElementById("mynumber").value = selectedRow.cells[2].innerHTML;   
}
function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.myname;
    selectedRow.cells[1].innerHTML = formData.myclass;
    selectedRow.cells[2].innerHTML = formData.mynumber;
}
function onDelete(td){
    if(confirm('are you sure you want to delete this record ?')){
    row = td.parentElement.parentElement;
    document.getElementById("studentlist").deleteRow(row.rowIndex);
    resetForm();
    }
}
//form validation
function validate() {
    isValid = true;
    if (document.getElementById("myname").value == "") {
        isValid = false;
        document.getElementById("mynameValidationError").classList.remove("hide");
    }else {
            isValid = true;
            if (!document.getElementById("mynameValidationError").classList.contains("hide"))
                document.getElementById("mynameValidationError").classList.add("hide");
        }
       
        if (document.getElementById("myclass").value == "") {
            isValid = false;
            document.getElementById("myclassValidationError").classList.remove("hide");
    }else {
            isValid = true;
            if (!document.getElementById("myclassValidationError").classList.contains("hide"))
                document.getElementById("myclassValidationError").classList.add("hide");
        }
    
        if (document.getElementById("mynumber").value == "") {
            isValid = false;
            document.getElementById("mynumberValidationError").classList.remove("hide");
        
    } else {
        isValid = true;
        if (!document.getElementById("mynumberValidationError").classList.contains("hide"))
            document.getElementById("mynumberValidationError").classList.add("hide");
    }
    
    return isValid;
}