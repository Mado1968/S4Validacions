const form = document.getElementById('myFormId');

function registerValidate() {
	var acumErrores = 0;

	form.classList.remove('is-invalid');

	var inputEmail = document.getElementById('inputEmail');

	var inputPassword = document.forms["myForm"]["inputPassword"];
	var inputAddress = document.forms["myForm"]["inputAddress"];
	var inputProvince = document.forms["myForm"]["inputProvince"];
	var inputCity = document.forms["myForm"]["inputCity"];
	var inputZip = document.forms["myForm"]["inputZip"];
	var gridCheck = document.forms["myForm"]["gridCheck"];

	if (inputEmail.value == "") {
		inputEmail.classList.add("is-invalid");
		document.getElementById("errorEmail").textContent = "Aquest camp es obligatori";
		acumErrores++;
	} else if (!validar_email(inputEmail.value)) {
		inputEmail.classList.add("is-invalid");
		document.getElementById("errorEmail").textContent = "El email no té el format correcte";
		acumErrores++;
	}

	if (inputPassword.value == "") {
		inputPassword.classList.add("is-invalid");
		document.getElementById("errorPassword").textContent = "Aquest camp es obligatori";
		acumErrores++;
	}


	if (inputProvince.value == "") {
		inputProvince.classList.add("is-invalid");
		document.getElementById("errorProvince").textContent = "La provincia es obligatoria";
		acumErrores++;
	}

	if (acumErrores > 0) {
		return false;
	} else {
		return true;
	}
}


form.addEventListener('blur', (event) => {
	console.log(event);
	if (event.target.value != '') event.target.classList.remove('is-invalid');
	
}, true);

function validar_email(email) {
	var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(email) ? true : false;
}

const searchFocus = document.getElementById('search-focus');
const keys = [
	{ keyCode: 'AltLeft', isTriggered: false },
	{ keyCode: 'ControlLeft', isTriggered: false },
];

window.addEventListener('keydown', (e) => {
	keys.forEach((obj) => {
		if (obj.keyCode === e.code) {
			obj.isTriggered = true;
		}
	});

	const shortcutTriggered = keys.filter((obj) => obj.isTriggered).length === keys.length;

	if (shortcutTriggered) {
		searchFocus.focus();
	}
});

window.addEventListener('keyup', (e) => {
	keys.forEach((obj) => {
		if (obj.keyCode === e.code) {
			obj.isTriggered = false;
		}
	});
});


function validarBusqueda() {
	var x, text;

	x = document.getElementById("search-focus").value;

	if (x.length == 0 || x.length == 1 || x.length == 2) {
		searchFocus.classList.add("is-invalid");

		document.getElementById("text1").innerHTML = "Cal introduir un minim de 3 lletres";
	} else {
		searchFocus.classList.add("is-valid");
		document.getElementById("text1").innerHTML = " Correcte !";

	}

};

function testPw() {
	var t = document.getElementById("inputPassword2").value;
	var s = document.getElementById("inputPassword").value;


	if (t == "" || s == "") {
		inputPassword2.classList.add("is-invalid");
		inputPassword.classList.add("is-invalid");
		document.getElementById("text2").innerHTML = " Incorrecte !";
	}
	else if (t != s) {
		inputPassword2.classList.add("is-invalid");
		inputPassword.classList.add("is-invalid");
		document.getElementById("text2").innerHTML = " Incorrecte !";


	} else {
		inputPassword2.classList.add("is-valid");
		inputPassword.classList.add("is-valid");
		document.getElementById("text2").innerHTML = " Correcte !";

	}
};

