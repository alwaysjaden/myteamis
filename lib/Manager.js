// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
// const Manager = require ("./Employee")

class Manager{
    constructor(name, role, id, email, officeNumber ) {
        this.name = name;
        this.role = role;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
    }
    
}

const managers = [
  
    new Manager("Jared", "Manger",1,"jared@fakemail.com",1)

]

console.log(managers);


module.exports = {
    Manager,
    managers,
};