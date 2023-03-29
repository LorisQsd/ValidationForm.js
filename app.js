// FORM VALIDATION
const form = document.querySelector("form");

form.addEventListener("submit", handleForm);

function handleForm(e) {
    e.preventDefault();
    submitForm();
}
function submitForm() {
    const validName = form.querySelector("#nameCheck").getAttribute("src");
    const validEmail = form.querySelector("#emailCheck").getAttribute("src");
    const validPassword = form.querySelector("#passwordCheckSvg").getAttribute("src");
    const validMatchPassword = form.querySelector("#passwordMatchSvg").getAttribute("src");

    const validInput = "ressources/check.svg"
    const imgs = document.querySelectorAll("img")

    if (validName == validInput && validEmail == validInput && validPassword == validInput && validMatchPassword == validInput) {
        alert("Félicitation, votre formulaire a bien été envoyé !")
    } else if (inputName.value == "" || inputEmail.value == "" || inputPassword.value == "" || inputPasswordCheck.value == ""){
        imgs.forEach(el => {
            el.style.display = "block";
        })
    } else {
        console.log("Invalid Form")/* I can improve this part by displaying errorMsgName & errorMsgEmail depending of which input is empty */
    }
}

/* NAME CHECK */
const inputName = form.querySelector("#name");

inputName.addEventListener("input", checkInputName)
inputName.addEventListener("focusout", checkInputName)

function checkInputName(){
    const imgCheck = form.querySelector("#nameCheck");
    const errorMsg = form.querySelector("#errorMsgName")
    if(inputName.value.length >= 3) {/* I could use a regex here but I decided to make it simple */
        imgCheck.style.display = "block";
        imgCheck.src = "ressources/check.svg"
        errorMsg.textContent = ""
    } else {
        imgCheck.style.display = "block";
        imgCheck.src = "ressources/error.svg"
        errorMsg.textContent = "Choisissez un pseudo contenant au moins 3 caractères."
    }
}

/* EMAIL CHECK */
const inputEmail = form.querySelector("#email");

inputEmail.addEventListener("input", checkEmail);
inputEmail.addEventListener("focusout", checkEmail)

function checkEmail() {
    const imgCheck = form.querySelector("#emailCheck");
    const errorMsg = form.querySelector("#errorMsgEmail")

    const validateEmail = inputEmail.value.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)

    if(validateEmail){
        imgCheck.style.display = "block";
        imgCheck.src = "ressources/check.svg"
        errorMsg.textContent = ""
        } else{
        imgCheck.style.display = "block";
        imgCheck.src = "ressources/error.svg"
        errorMsg.textContent = "Rentrez un email valide."
        }
}

/* FIRST PASSWORD CHECK */
const inputPassword = form.querySelector("#password");

inputPassword.addEventListener("input", checkPassword)
inputPassword.addEventListener("focusout", checkPassword)

function checkPassword() {
    const imgCheck = form.querySelector("#passwordCheckSvg");
    const imgCheckMatch = form.querySelector("#passwordMatchSvg")
    const lowIndicator = form.querySelector("#low")
    const mediumIndicator = form.querySelector("#medium")
    const highIndicator = form.querySelector("#high")

    const validatePassword = inputPassword.value.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,20}$/);
    const weakPassword = inputPassword.value.match(/^(?=.*[a-z])/);
    const mediumPassword = inputPassword.value.match(/^(?=.*[a-z])(?=.*[0-9])/)

    if(validatePassword) {
        imgCheck.style.display = "block";
        imgCheck.src = "ressources/check.svg";

        lowIndicator.style.display = "block";
        mediumIndicator.style.display = "block";
        highIndicator.style.display = "block";
    } else if (mediumPassword) {
        imgCheck.style.display = "block";
        imgCheck.src = "ressources/error.svg";

        lowIndicator.style.display = "block";
        mediumIndicator.style.display = "block";
        highIndicator.style.display = "none";
    } else if (weakPassword) {
        imgCheck.style.display = "block";
        imgCheck.src = "ressources/error.svg";

        lowIndicator.style.display = "block";
        mediumIndicator.style.display = "none";
        highIndicator.style.display = "none";
    } else {
        imgCheck.style.display = "block";
        imgCheck.src = "ressources/error.svg";

        lowIndicator.style.display = "none";
        mediumIndicator.style.display = "none";
        highIndicator.style.display = "none";
    }

    /* I check the same condition of the following function to "link" them. So if passwordCheck input is not the same as password input and the focus is on password input, the svg will change in passwordCheck input */
    if (inputPasswordCheck.value === "") {
        imgCheckMatch.style.display = "block";
        imgCheckMatch.src = "ressources/error.svg";
    }else if (inputPasswordCheck.value !== inputPassword.value) {
        imgCheckMatch.style.display = "block";
        imgCheckMatch.src = "ressources/error.svg";
    } else {
        imgCheckMatch.src = "ressources/check.svg";
    }
}

/* PASSWORD MATCH */
const inputPasswordCheck = form.querySelector("#passwordCheck");

inputPasswordCheck.addEventListener("input", checkMatchedPassword);
inputPasswordCheck.addEventListener("focusout", checkMatchedPassword)

function checkMatchedPassword() {
    const imgCheck = form.querySelector("#passwordMatchSvg");

    if(inputPasswordCheck.value === "") {
        imgCheck.style.display = "block";
        imgCheck.src = "ressources/error.svg"
    } else if (inputPasswordCheck.value === inputPassword.value){
        imgCheck.style.display = "block";
        imgCheck.src = "ressources/check.svg"
    } else {
        imgCheck.style.display = "block";
        imgCheck.src = "ressources/error.svg"
    }
}