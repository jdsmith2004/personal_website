const auth = firebase.auth();

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

const signUpForm = document.querySelector("#sign-up-form");
const NAME_REQUIRED = "Please enter your name";
const EMAIL_REQUIRED = "Please enter your email";
const EMAIL_INVALID = "Please enter a correct email address format";
const PASSWORD_REQUIRED = "Please enter a valid password"

signUpForm.addEventListener("submit", function (event) {
	// stop signUpForm submission
	event.preventDefault();

	// validate the signUpForm
	let nameValid = hasValue(signUpForm.elements["name"], NAME_REQUIRED);
	let emailValid = validateEmail(signUpForm.elements["email"], EMAIL_REQUIRED, 
    EMAIL_INVALID);
    let passwordValid = hasValue(signUpForm.elements["password"], PASSWORD_REQUIRED);

	userName = signUpForm.elements["name"].value.trim();
	email = signUpForm.elements["email"].value.trim();
	password = signUpForm.elements["password"].value.trim();

	console.log(userName)
	console.log(email)
	console.log(password)
	// if valid, submit the signUpForm.
	if (nameValid && emailValid && passwordValid) {
        //create user
        auth.createUserWithEmailAndPassword(email, password).then(cred => {
			console.log(cred.user)
		})
	}
	signUpForm.reset();
    // console.log(`Error: invalid name or password`)
});

const logout = document.querySelector('.logout-button');
logout.addEventListener('click', (e) => {
	e.preventDefault();
	auth.signOut()
})

const signInForm = document.querySelector("#sign-in-form");
signInForm.addEventListener("submit", function (event) {
	// stop signUpForm submission
	event.preventDefault();

	// validate the signInForm
	let emailValid = validateEmail(signInForm.elements["email"], EMAIL_REQUIRED, 
    EMAIL_INVALID);
    let passwordValid = hasValue(signInForm.elements["password"], PASSWORD_REQUIRED);

	email = signInForm.elements["email"].value.trim();
	password = signInForm.elements["password"].value.trim();

	console.log(email)
	console.log(password)
	// if valid, submit the signInForm.
	if (emailValid && passwordValid) {
        //create user
        auth.signInWithEmailAndPassword(email, password).then(cred => {
			// display user object
			// console.log(cred.user)
		})
	}
	signInForm.reset();
    // console.log(`Error: invalid name or password`)
});
// listen for auth status changes
auth.onAuthStateChanged(user => {
	if (user) {
		console.log(`user logged in`);
	} else if (!user) {
		console.log(`user logged out`);
	}
})
// module.exports = {}