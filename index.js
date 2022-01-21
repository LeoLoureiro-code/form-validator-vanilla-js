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

const validate = (username, email, password, confirmPassword) => {

    if (username.value.length < 3) {
        let nameMessage = document.getElementById("nameMessage")
        nameMessage.innerText = "Name must be at leats 3 characters"
        nameMessage.className = "errorMessage"
        nameMessage.classList.remove("error")
        username.className = "errorField"
    } else {
        nameMessage.classList.remove('errorMessage')
        username.classList.remove('errorField')
        nameMessage.className = "error"
    }
    if (email.value.length === 0 || /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value) === false) {
        let emailMessage = document.getElementById('emailMessage')
        emailMessage.removeAttribute("class")
        emailMessage.innerText = "Not valid email"
        emailMessage.className = "errorMessage"
        emailMessage.classList.remove("error")
        email.className = "errorField"
    } else {
        emailMessage.classList.remove('errorMessage')
        email.classList.remove('errorField')
        emailMessage.className = "error"
    }
    if (password.value.length < 6) {
        let passwordMessage = document.getElementById("passwordMessage")
        passwordMessage.removeAttribute("class")
        passwordMessage.innerText = "Password must be at least 6 characters"
        passwordMessage.className = "errorMessage"
        passwordMessage.classList.remove("error")
        password.className = "errorField"
    }else {
        passwordMessage.classList.remove('errorMessage')
        password.classList.remove('errorField')
        passwordMessage.className = "error"
    }
    if (password.value !== confirmPassword.value || password.value === "") {
        let confirmMessage = document.getElementById("confirmMessage")
        confirmMessage.removeAttribute("class")
        confirmMessage.innerText = "Password needs to be the same"
        confirmMessage.className = "errorMessage"
        confirmMessage.classList.remove("error")
        confirmPassword.className = "errorField"
    }else {
        confirmMessage.classList.remove('errorMessage')
        confirmPassword.classList.remove('errorField')
        confirmMessage.className = "error"
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

