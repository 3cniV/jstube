const vincent = {
    firstName : "Vincent",
    lastName : "Tobi",
    role : "Admin",
    courseCount: 3,
    getInfo: function () {
        console.log(`
            First name is ${this.firstName}
            Last name is ${this.lastName}
            His role is ${this.role}
            and he is studying ${this.courseCount} courses.
            `);
    },
};

const dj = {
    firstName: "Rock",
    lastName: "DJ",
    role: "Sub-Admin",
    courseCount: 4,
};

// vincent.getInfo();
// dj.getInfo();

// var djInfo = vincent.getInfo.bind(dj);
// djInfo();

vincent.getInfo.call(dj);
// Bind is an important par of JS