let primaryConfirmation = prompt("Who's There? ", "");
let secondaryConfirmation;
//checking all the possibilities for the primary confirmation

if ( primaryConfirmation == null || primaryConfirmation == ""  || primaryConfirmation.toLowerCase() == "cancel"){
    alert("Cancelled.");
}else if(primaryConfirmation.toLowerCase() == "admin"){
    secondaryConfirmation = prompt("Password Please? ", "Enter Password here");
    //checking all the possibilities for the secondary confirmation
    if(secondaryConfirmation == "TheMaster"){
        alert("Welcome!");
    }else if(secondaryConfirmation == null || secondaryConfirmation.toLowerCase() == "cancel" || secondaryConfirmation == ""){
        alert("Cancelled.");
    }else{
        alert("Wrong Password.");
    }
}else{
    alert("I don't know you. Go away >:(");
}

