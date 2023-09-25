//User is only allowed to make a purchase when he is :
//logged in
//email verified
//cardInfo - valid
//if any one is missing, stop purchase

var isLoggedin = true;
var isEmailverified = false;
var cardInfo = true;

// if (isLoggedin) {
//     console.log("Logged In Success")
//     if (isEmailverified) {
//         console.log("Email is verified")
//         if (cardInfo) {
//             console.log("You can make a purchase")
//         }
//     }
// }


if (isLoggedin && isEmailverified && cardInfo) {
    console.log("Allow user to make a purchase");
} else{
    console.log("You are NOT allowed to do that");
}