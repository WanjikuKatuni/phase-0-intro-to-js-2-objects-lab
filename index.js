// Write your solution in this file!
const employee = {
    name:"Ann",
    streetAddress:"limuru"
}

function updateEmployeeWithKeyAndValue(employee,key,value){
    const newEmployee = {...employee};

    newEmployee[key]=value;

    return newEmployee;

}
const newEmployee = updateEmployeeWithKeyAndValue(employee,"name","stacy");
console.log(newEmployee);

function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
    employee[key]=value;

    return employee;
}

const oldEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee,"name","wangui");
console.log(oldEmployee)

function deleteFromEmployeeByKey(employee,key){
    const deletedEmployee = {...employee};

    delete deletedEmployee[key];

    return deletedEmployee;
}

const deletedEmployee = deleteFromEmployeeByKey(employee,"name");
console.log(deletedEmployee)

function destructivelyDeleteFromEmployeeByKey(employee, key) {

    
    delete employee[key]

    return employee

}
const anotherEmployee = destructivelyDeleteFromEmployeeByKey(employee,"name");
console.log(anotherEmployee)