// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
// const Intern = require ("./Employee")

class Intern  {
        constructor(name, role, id, email, school ) {
            this.name = name;
            this.role = role;
            this.id = id;
            this.email = email;
            this.school = school;
        }
        
    
}

const interns = [
  
    new Intern("John", "Intern",5,"john@fakemail.com","2University")

]

console.log(interns)


module.exports = {
    Intern,
    interns,
};

