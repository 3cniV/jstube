// Create an application with the following roles:
// admin - gets full access 
// subadmin - gets access to create/delete courses
// testprep - gets access to create/delete courses
// user - gets access to consume content 

var user = "abc";

switch (user) {
    case "admin":
        console.log("you get full access");
        break;
    case "subadmin":
        console.log("get access to create/delete courses");
        break;
    case "testprep":
        console.log("get access to create/delete courses");
        break;
    case "user":
        console.log("get access to consume content");
        break;

    default:
        console.log("Trial User")
        break;
}