function confirmButton() {
    if(confirm("Confirm join land?")){
        alert("Traveller choose plane.");
    }else{
        document.getElementById("joinland").checked=false;
    }
}