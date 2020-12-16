// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
// const Engineer = require ("./Employee")

class Engineer {
    constructor(name, role, id, email, github ) {
        this.name = name;
        this.role = role;
        this.id = id;
        this.email = email;
        this.github = github;
    }
    
}

const engineers = [
    new Engineer("Alec","Engineer" ,2 ,"alec@fakeemail.com","ibealec"),
    new Engineer("Tammer", "Engineer",3,"tammer@fakeemail.com","tammerg"),
    new Engineer("Christian", "Engineer",4,"christian@fakeemail.com","ceckenrode"),

]

console.log(engineers)

module.exports = {
    Engineer,
    engineers
};

