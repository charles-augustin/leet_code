function Employee(id, importance, subordinates) {
    this.id = id;
    this.importance = importance;
    this.subordinates = subordinates;
}

let emp = new Employee(1, 5, [2, 3]);
let emp1 = new Employee(2, 3, []);
let emp2 = new Employee(3, 3, []);

let employee = [];

employee.push(emp);
employee.push(emp1);
employee.push(emp2);


let empImportance = (employee, id) => {
    let tot = 0;
    let getEmployee = eid => employee.find(e => e.id == eid);

    let target = getEmployee(id);
    let queue = [target];

    while(queue.length !== 0) {
        let emp = queue.shift();
        tot += emp.importance;
        emp.subordinates.map(getEmployee).forEach(emp => queue.push(emp));
    }
    
    return tot;
}

function eid() {
    console.log([]==[]);
}



// console.log(empImportance(employee, 1));
console.log(eid());

