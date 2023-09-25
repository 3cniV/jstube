// how to create objects

var User = {
    name: "",
    getUserName: function () {
        console.log(`User name is : ${this.name}`);
    },
};

var vincent = Object.create(User);

console.log(vincent);

vincent.name = "Vincent Tobi";
vincent.getUserName();

var sam = Object.create(User, {
    name: {value: "sammy" },
    courseCount: { value: 3 },
});

sam.getUserName();