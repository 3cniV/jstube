var User = function(firstName, courseCount){
    this.firstName = firstName;
    this.courseCount = courseCount;
    this .getCourseCount = function(){
        console.log(`course count is:  ${this.courseCount}`);
    };
};

User.prototype.getFirstname = function() {
    console.log(`Your Firstname is : ${this.firstName}`);
}

var vincent = new User("Vincent", 2);
vincent.getCourseCount();

if (vincent.hasOwnProperty("firstName")) {
    vincent.getFirstname();
}

// console.log(vincent);

var sam = new User("sam", 1);
sam.getCourseCount();
sam.getFirstname();
// console.log(sam);


// new style of creating an object using the new keyword.