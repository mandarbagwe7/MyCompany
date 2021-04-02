function userid_validation(uid,mx,my)
{
	var uid_len = uid.value.length;
	
	if (uid_len == 0 || uid_len >= my || uid_len < mx)
	{
		alert("Username should not be empty / length be between " + mx + " to " + my);
		uid.focus();
		return false;
	}
	
	return true;
}


function passid_validation(passid,mx,my)
{
	var passid_len = passid.value.length;
	
	if (passid_len == 0 ||passid_len >= my || passid_len < mx)
	{
		alert("Password should not be empty / length be between " + mx + " to " + my);
		passid.focus();
		return false;
	}
	
	return true;
}


function allLetter(name)
{ 
	var letters = /^[A-Za-z]+$/;
	
	if(name.value.match(letters))
	{
		return true;
	}
	else
	{
		alert('Name should not be empty / Name must have alphabet characters only');
		name.focus();
		return false;
	}
}

function ValidateEmail(uemail)
{
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	
	if(uemail.value.match(mailformat))
	{
		return true;
	}
	else
	{
		alert("Email should not be empty / You have entered an Invalid Email Address!");
		uemail.focus();
		return false;
	}
}


function formValidation()
{
var uname = document.registration.name;
var uid = document.registration.username;
var passid = document.registration.password;
var uemail = document.registration.email;

if(allLetter(uname))
	{
		if(userid_validation(uid,5,12))
		{
			if(passid_validation(passid,7,12))
			{
				if(ValidateEmail(uemail))
				{
					localStorage.setItem(uname.value, passid.value);
					localStorage.setItem(uname.value + "-u", uid.value);
					localStorage.setItem(uname.value + "-e", uemail.value);
					// localStorage.setItem(uname.value+'-s', (uid.value, passid.value, uemail.value));
					alert("Thank You for your response.");
					return true;
				}
			} 
		}
	}	
return false;
}



function show_stock(){
    var key = "";
	var list = "<tr><th>Name</th><th>Username</th><th>Password</th><th>Email</th></tr>\n";
	var i = 0;
	
	for (i = 0; i <= localStorage.length-1; i++) {
		key = localStorage.key(i);
    	// value = localStorage.getItem(key);
    	if((!key.includes('-u')) && (!key.includes('-e'))){
        list += "<tr><td>" 
        		+ key + "</td>\n<td>"
				+ localStorage.getItem(key + "-u") + "</td>\n<td>"
				+ localStorage.getItem(key) + "</td>\n<td>"
				+ localStorage.getItem(key + "-e") + "</td></tr>\n";
		}
	}
	//if no item exists in the cart
	if (list == "<tr><th>Name</th><th>Username</th><th>Password</th><th>Email</th></tr>\n") {
		list += "<tr><td><i>empty</i></td>\n<td><i>empty</i></td><td><i>empty</i></td><td><i>empty</i></td></tr>\n";
	}
	//bind the data to html table
	
	document.getElementById('stock-list').innerHTML = list;
}	

function clearAll() {
	localStorage.clear();
	// doShowAll();
	 show_stock();
}