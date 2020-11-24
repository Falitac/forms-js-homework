var form = document.forms['register-form'];
function validate() {
	//Wszystkie niepoprawne odpowiedzi znajdą się w liście i będą dodawane podczas sprawdzania
	document.querySelector('#result').innerHTML = "<ul></ul>";
	var results = document.querySelector('#result ul');
		
		//Wymagania w loginie
		if(form.login.value.length<3)
			results.innerHTML += "<li>Login powinien mieć co najmniej 3 znaki</li>";
		var letters = /^[A-Za-z]+$/;
		if(!form.login.value.match(letters)) results.innerHTML+="<li>Login powinien mieć tylko znaki</li>";
		
		//Wymagania w haśle
		var passwordNumbers = /\d+/;
		var passwordLowChar = /[a-z]+/;
		var passwordUpChar = /[A-Z]+/;
		var passwordSpecialChar = /[!@#\$%\^\&*\(\)]+/;
		if(!form.password.value.match(passwordNumbers))
			results.innerHTML+= "<li>Hasło powinno mieć co najmniej 1 cyfrę</li>";
		if(!form.password.value.match(passwordLowChar))
			results.innerHTML+= "<li>Hasło powinno mieć co najmniej 1 małą literę</li>";
		if(!form.password.value.match(passwordUpChar ))
			results.innerHTML+= "<li>Hasło powinno mieć co najmniej 1 dużą literę</li>";
		if(!form.password.value.match(passwordSpecialChar))
			results.innerHTML+= "<li>Hasło powinno mieć co najmniej 1 specjalny znak</li>";
		if(form.password.value.length<8)
			results.innerHTML+="<li>Hasło powinno mieć co najmniej 8 znaków</li>";
		if(form.password.value!==form.passwordCheck.value)
			results.innerHTML+="<li>Podane hasła się różnią</li>"

}

function checkForm() {
	//Funkcja sprawdza czy nie ma błędów
	if(document.querySelector('#result ul').innerHTML==="")
		alert("Konto utworzone pomyślnie!");
}

function generateLogin() {
	//Prosty generator loginów na podstawie losowych sylab. Można dodawać dowolne sylaby które utworzą pewien login który będzie z dużej litery
	var syl = ["al", "kra", "tos", "sli", "far", "cin", "wio"];
	var size = Math.floor(2*Math.random())+2;
	var login="";
	for(let i=0;i<size;i++)
	login += syl[Math.floor(syl.length*Math.random())];
	login = login.charAt(0).toUpperCase()+login.slice(1);
	form.login.value = login;
	return false;
}

setInterval(validate, 200);