// TODO: Write code to define and export the Employee class


class Employee {
    constructor(name, role, id, email, ) {
        this.name = name;
        this.role = role;
        this.id = id;
        this.email = email;
    }
    

    getId() { 
        return this.id;
    };

    getName() { 
        return this.name;
    }
    getRole() {
        return this.role;
    }
    getEmail() {
        return this.email;
    }
}

module.exports = {
    Employee,
};
