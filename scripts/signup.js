// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// show a message with a type of the input
function showMessage(input, message, type) {
	// get the small element and set the message
	const msg = input.parentNode.querySelector("small");
	msg.innerText = message;
	// update the class for the input
	input.className = type ? "success" : "error";
	return type;
}

function showError(input, message) {
	return showMessage(input, message, false);
}

function showSuccess(input) {
	return showMessage(input, "", true);
}

function hasValue(input, message) {
	if (input.value.trim() === "")  {
		return showError(input, message);
	}
	return showSuccess(input);
}

function validateEmail(input, requiredMsg, invalidMsg) {
	// check if the value is not empty
	if (!hasValue(input, requiredMsg)) {
		return false;
	}
	// validate email format
	const emailRegex =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	const email = input.value.trim();
	if (!emailRegex.test(email)) {
		return showError(input, invalidMsg);
	}
	return true;
}

const form = document.querySelector("#signup");
const NAME_REQUIRED = "Please enter your name";
const EMAIL_REQUIRED = "Please enter your email";
const EMAIL_INVALID = "Please enter a correct email address format";
const PASSWORD_REQUIRED = "Please enter a valid password"

form.addEventListener("submit", function (event) {
	// stop form submission
	event.preventDefault();

	// validate the form
	let nameValid = hasValue(form.elements["name"], NAME_REQUIRED);
	let emailValid = validateEmail(form.elements["email"], EMAIL_REQUIRED, 
    EMAIL_INVALID);
    let passwordValid = hasValue(form.elements["password"], PASSWORD_REQUIRED);
	// if valid, submit the form.
	if (nameValid && emailValid && passwordValid) {
        const firebaseConfig = {
            apiKey: "AIzaSyCyRULcF-4DAFzapesMfowJLY0F7R8ddZg",
            authDomain: "obliteration-b71e1.firebaseapp.com",
            projectId: "obliteration-b71e1",
            storageBucket: "obliteration-b71e1.appspot.com",
            messagingSenderId: "259747363387",
            appId: "1:259747363387:web:e05ed2c11420566bdbfa1e",
            measurementId: "G-C7FT1KSJB1"
        };
        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const analytics = getAnalytics(app);
        const auth = firebase.auth();
        const db = firebase.firestore();
        console.log(email,password)
        //create user
        auth.createUserWithEmailAndPassword(email, password)
	}
    console.log(`Error: invalid name or password`)
});