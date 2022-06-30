const button1 = document.querySelector('#email-sign-in');

button1.addEventListener('click', () =>{
    document.querySelector('#preferredAction').children.style.visibility = "visible"
    document.querySelector('#sign-in-form').children.style.visibility = "hidden"
})

let userSignIn = document.querySelector('#email-sign-in')
let welcome = document.querySelector('#preferredAction')

userSignIn.addEventListener('click', () => {
    welcome.style.visibility = "hidden";
    userSignIn.style.visibility = "visible";
})