/*function edit() {
	htmlContainer += "Name: <input type='text' id='nme'><br>";
	htmlContainer += "Birthday: <input type='date' id='dte'><br>";
	htmlContainer += "Gender:<select id='gndr'> <option value='' id='gndr'></option> <option value='Male' id='gndr'>Male</option> <option value='Female' id='gndr'>Female</option> <br></select> ";
}*/

/*unction delete() {

}*/

function gwapoko() {
	var name = document.getElementById('nme').value;
	var birthday = document.getElementById('bday').value;
	var gender = document.getElementById('gndr').value;
	/*var row = htmlContainer.insertRow(-1);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);
	cell1 = name.innerHTML;
	cell2 = birtday.innerHTML;
	cell3 = gender.innerHTML;

*/
	console.log(name,birthday,gender);

	var htmlContainer = "<table border='1' style='width: 50%'>";
	htmlContainer += "<tr> <th>Name</th> <th>Birthday</th> <th>Gender</th> <th>Actions</th> </tr>";

	htmlContainer += "<tr> <td>" + name + "</td> <td>" + birthday + "</td> <td>" + gender + "</td> <td><button onclick='edit()'>Edit</button><button onclick='delete()'>Delete</button></td> </tr>";

	htmlContainer += "</table>";

	document.getElementById("tables").innerHTML = htmlContainer;


}

