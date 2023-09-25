/*
Define a function that can answer the role of a user.
A user can be on the following roles:
admin - with all access 
subadmin - with access to create/delete courses
testprep - with access to create/delete courses
user -consume content
other - trial user.

Input: getUserRole(name, role)
*/


var getUserRole = function (name, role){

    switch(role){
        case "admin":
            return `${name} is an admin with all access`
            break;
        case "subadmin":
            return `${name} is a sub-admin with access to create and delete courses`
            break;
        case "testprep":
            return `${name} is a testprep with access to create and delete tests`
            break;
        case "user":
            return `${name} is a user to consume content`
            break;

        default:
            break;
    }
}
console.log(getUserRole("vincent", "testprep"));

var getRole = getUserRole("sammy", "user");

console.log(getRole);
