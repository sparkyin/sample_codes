var ActiveDirectory = require('activedirectory');

var config = { url: 'ldap://dc.domain.com',
               baseDN: 'dc=domain,dc=com',
               username: 'username@domain.com',
               password: 'password' }

var ad = new ActiveDirectory(config);

//e.g.
//var ad = new ActiveDirectory('ldap://panacloud.local', 'dc=panacloud,dc=local', 'usuf@panacloud.local', 'password');


console.log('---------------------------Without Password just verfify Username------------------------------------')
var username = 'farrukhsiraj@polymerxs.local';

ad.findUser(username, function(err, user) {
  
if (err) {
    
	console.log('ERROR: ' +JSON.stringify(err));
    
	return;
  
}
 
 
 
if (! user) { 
	console.log('User: ' + username + ' not found.');
 
} else {
	console.log(JSON.stringify(user));
}


});




console.log('---------------------------With Password just verfify Username & Password------------------------------------')
var username = 'uqutub@panacloud.local';

var password = 'mypassword';


ad.authenticate(username, password, function(err, auth) {
  if (err) {
    
	console.log('ERROR: '+JSON.stringify(err));
    
}

 

if (auth) {
    
	console.log('Authenticated!');
  
}
  else {
    
	console.log('Authentication failed!');
  
}


});
