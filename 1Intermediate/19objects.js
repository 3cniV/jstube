var user = {
    firstName: "Vincent",
    lastName: "Tobi",
    role: "Admin",
    loginCount: 32,
    facebookSignedIn: true,
};

console.log(user.firstName);
console.log(user["lastName"]);

console.log(user.loginCount);
user.loginCount = 44;
console.log(user.loginCount);
console.table(user);


var iphone = {
    phoneName: "iPhone 15",
    modelNumber: "BE3U43J4J4CK4",
    storageType: "1 Terabyte",
    role: "owner",   
}

console.table(iphone);