//Allow user to access the course if he is :
//logged in from email
//logged in from google
//logged in from facebook


var email = true;
var facebook = false;
var google = false;

// if (email) {
//     console.log("logged in from email");
// } else {
//     console.log("email not recognized");
// }
// if (facebook) {
//     console.log ("logged in from facebook");
// } else {
//     console.log("facebook user not verified");
// }
// if (google) {
//     console.log("logged in from google");
// } else {
//     console.log("google account not verified");
// }

if (email || facebook || google) {
    console.log("Login success");
}