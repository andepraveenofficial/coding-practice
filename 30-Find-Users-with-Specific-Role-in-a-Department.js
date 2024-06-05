// 3. Find Users with Specific Role in a Department
 
const company = { 
  "departments": [ 
    { "name": "Marketing", "employees": [ 
      { "id": 1, "name": "John", "role": "Manager" }, 
      { "id": 2, "name": "Jane", "role": "Developer" } 
    ] }, 
    { "name": "Sales", "employees": [ 
      { "id": 3, "name": "Alice", "role": "Salesperson" }, 
      { "id": 4, "name": "Bob", "role": "Manager" } 
    ] } 
  ] 
}; 

const departments = company.departments;
console.log(departments)

const output = [];

departments.forEach((department) => {
    const employees = department.employees;
    employees.forEach((employee) => {
      output.push(`${department.name} - ${employee.role} - ${employee.name}`) 
    })
})

console.log(output);