/*------------ VARIABLES ------------*/

let firstName = document.getElementById("firstNameInput");
let lastName = document.getElementById("lastNameInput");
let phone = document.getElementById("phoneInput");
let message = document.getElementById("messageInput");
let countingZone = document.getElementById("countZone");
const maxChar = 400;

/*------------ FUNCTIONS ------------*/

/*INPUT VALIDATION FUNCTION*/
function warning(element, value){
    let alertElement = document.createElement("P");
    alertElement.classList.add("col-12", "alert",  "alert-danger");
    alertElement.id = "alertNotice";
    alertElement.innerText = "Saisie incorrecte.";
    let noticeExisting = document.getElementById("alertNotice");

    if(value){
        element.classList.remove("alert-success");
        element.classList.add("alert-danger");
        if(!element.nextElementSibling || element.nextElementSibling.id !== "alertNotice"){
            element.after(alertElement);
        }
    }
    else {
        element.classList.remove("alert-danger");
        element.classList.add("alert-success");
        noticeExisting = document.getElementById("alertNotice");
        if(element.nextElementSibling.id === "alertNotice"){
            noticeExisting.remove();
        }
    }
};

/*VALIDATE FIRST LAST NAME NO DIGIT MAX SIZE*/
function validateText(){
    let result = false;
    let REGEXPDIGIT = /[0-9]/;
    if(this.value.length < 2 || this.value.length > 50 || REGEXPDIGIT.test(this.value)){
        result = true;
    }
    warning(this , result);
};

/*VALIDATE PHONE NUMEBER FRENCH REGEXP*/
function validatePhone(){
    let result = false;
    let REGEXPPHONE = /^(0[1-68])(?:[ _.-]?(\d{2})){4}$/; // 0 à 68 + 4*2 digit
    if(!REGEXPPHONE.test(this.value)){
        result = true;
    }
    warning(this , result);
}

/*VALIDATE BADWORD PRESENCE IN TEXTAREA*/
function validateMessage(){
    let result = false;
    let badWords = [
        "sexe",
        "sex",
        "con",
        "connard"
    ];
    let explosedText = this.value.split(' ');//split in an array text in words

    for(let badWord of badWords){
        for(let word of explosedText){
            if(word === badWord){// compare each word with a badword
                result = true;
            }
        }
    }
    warning(this , result);
}

/*COUNT AND LIMITATE CHARACTER IN TEXTAREA*/
function countChar(){
    if(this.value.length >= 0 && this.value.length <= maxChar){
        countingZone.innerText = maxChar - this.value.length;
    }
    else {
        this.value = this.value.substring(0, maxChar);
    }
}

/*------------ EXECUTIONS ------------*/

firstName.addEventListener("focusout", validateText);
lastName.addEventListener("focusout", validateText);
phone.addEventListener("focusout", validatePhone);
message.addEventListener("focusout", validateMessage);
message.addEventListener("keyup", countChar);