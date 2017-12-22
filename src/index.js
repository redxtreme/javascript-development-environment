import './index.css';
import {getUsers} from './api/userApi';
//import numeral from 'numeral';
//const courseValue = numeral(1000).format('$0,0.00');
//// insert a breakpoint for web debugger
////debugger;
//// ` means there's variables in the string
//console.log(`I would pay ${courseValue} for this awesome course!`); // eslint-disable-line no-console

// Populate table of users via API promise call.
getUsers().then(result => {
	let usersBody = "";

	result.forEach(user => {
		usersBody += `<tr>
		<td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
		<td>${user.id}</td>
		<td>${user.firstName}</td>
		<td>${user.lastname}</td>
		<td>${user.email}</td>
		</tr>`
	});

	global.document.getElementById('users').innerHTML = usersBody;
});
