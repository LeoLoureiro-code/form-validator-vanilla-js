const username = document.getElementById('name')
const email = document.getElementById('email')
const password = document.getElementById('password')
const confirmPassword = document.getElementById('confirm')
const button = document.getElementById('btn')
const form = document.getElementById('form')
const inputs = document.getElementsByTagName("input")

form.addEventListener('click', function (e) {
    e.preventDefault()
})

const itsNotValid = (message, element) =>{
    message.classList.remove("errorMessage")
    message.className = "error"
    element.classList.remove("errorField")
}

const itsValid = (message, element) =>{
    message.className = "errorMessage"
    message.classList.remove("error")
    element.className = "errorField"
}

const validate = (username, email, password, confirmPassword) => {

    if (username.value.length < 3) {
        let nameMessage = document.getElementById("nameMessage")
        nameMessage.innerText = "Name must be at leats 3 characters"
        itsValid(nameMessage, username)
    } else {
        itsNotValid(nameMessage, username)
    }
    if (email.value.length === 0 || /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value) === false) {
        let emailMessage = document.getElementById('emailMessage')
        emailMessage.removeAttribute("class")
        emailMessage.innerText = "Not valid email"
        itsValid(emailMessage, email)
    } else {
        itsNotValid(emailMessage, email)
    }
    if (password.value.length < 6) {
        let passwordMessage = document.getElementById("passwordMessage")
        passwordMessage.removeAttribute("class")
        passwordMessage.innerText = "Password must be at least 6 characters"
        itsValid(passwordMessage, password)
    }else {
        itsNotValid( passwordMessage, password)
    }
    if (password.value !== confirmPassword.value || password.value === "") {
        let confirmMessage = document.getElementById("confirmMessage")
        confirmMessage.removeAttribute("class")
        confirmMessage.innerText = "Password needs to be the same"
        itsValid(confirmMessage, confirmPassword)
    }else {
        itsNotValid(confirmMessage, confirmPassword)
    }

}

button.addEventListener('click', function () {
    validate(username, email, password, confirmPassword)
    if (!username.classList.contains("errorField")
        && !email.classList.contains("errorField")
        && !password.classList.contains("errorField")
        && !confirmPassword.classList.contains("errorField")) {
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].className = "correct"
        }
    }
})

