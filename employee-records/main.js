employees = []

function Employee(name, job, salary) {
    this.name = name
    this.job = job
    this.salary = salary
    this.status = "Full Time"
}



var jim = new Employee("Jim", "Salesman", "30,000")
var dwight = new Employee("Dwight", "Salesman", "28,000")
var michael = new Employee("Michael", "Manager", "20,000")

Employee.prototype.printEmployeeForm = function () {
    console.log("Name: " + this.name + ", Job Title: " + this.job + ", Salary: $" + this.salary + ", Status: " + this.status)
}

jim.printEmployeeForm()
dwight.printEmployeeForm()
michael.printEmployeeForm()

employees.push(JSON.stringify(jim), JSON.stringify(dwight), JSON.stringify(michael))

console.log("Employees: ", employees)