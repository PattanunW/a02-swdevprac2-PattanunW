function confirmButton() {
    if(confirm("Confirm join land?") && document.getElemenyById("joinland").checked==false){
        alert("Traveller choose plane.");
    }else{
        document.getElementById("joinland").checked=false;
    }
}