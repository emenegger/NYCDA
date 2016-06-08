var data = {
		"Ayomide": {
			password:'a11',
			grade:'78%',
			missing:'3',
		},
		"Brian": {
			password:'b11',
			grade:'98%',
			missing:'0',
		},
		"Cleryssa": {
			password:'c11',
			grade:'89%',
			missing:'1',
		},
		"Daron": {
			password:'d11',
			grade:'56%',
			missing:'9',
		},
		"Evan": {
			password:'e11',
			grade:'93%',
			missing:'2',
		},
		"Festus": {
			password:'f11',
			grade:'63%',
			missing:'6',
		},
	};


$(document).ready(function(){

var names = Object.keys(data);
console.log(data["Evan"].grade);

	$('#formy').submit(function(e){
		e.preventDefault();
		console.log(e);
		var selectedName = $('#select').val();

		var predefinedPasswordForName = data[selectedName].password;
		console.log(predefinedPasswordForName);

		var inputedPassword = $('#password').val();

			$('#info').empty();

			$('#grade').empty();

			$('#missass').empty();

		if (predefinedPasswordForName === inputedPassword) {
			console.log('password is correct')
			$('#info').append(selectedName + ', below is your information:')
			$('#grade').append('Grade: ' + data[selectedName].grade)
			$('#missass').append('Missing Assignments: ' + data[selectedName].missing)  
		} else {
			console.log('password not correct')
			alert("Whoops! Looks like the password you entered was incorrect. Try again.")
		}
	})
})