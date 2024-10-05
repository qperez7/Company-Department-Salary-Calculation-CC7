// Task 1: Create a Department Structure
const company = {

    departments: [
     {
    departmentName: 'Engineering',
    employees: [
     {
    name: 'Alice',
    salary: 100000,
    subordinates: [
    
     {
    
    name: 'Bob',
    salary: 80000,
    subordinates: [
    
    {
    
    name: 'Charlie',
    salary: 60000,
    subordinates: []
    
   }
    
 ]}]},
    
     {
    name: 'David',
    salary: 90000,
    subordinates: []
     }
    
    ]},
    
    {
    
    departmentName: 'Sales',
    employees: [
    
     {
    
    name: 'Eve',
    salary: 85000,
    subordinates: [
    
    {
    
    name: 'Frank',
    salary: 70000,
    subordinates: []
    
    }]},
    
    {
    name: 'Grace',
    salary: 95000,
    subordinates: []
    }] }]};
console.log(company);

 //Task 2: Create a Recursive Function to Calculate Total Salary for a Department
function calculateDepartmentSalary (department) {
    let sum = 0
function calculateEmployeeSalary (employee) {
    sum += employee.salary;

    //Recursively calculate the salary of each subordinate
    if (employee.subordinates.length > 0) {
    for(let subordinate of employee.subordinates) {
        calculateEmployeeSalary(subordinate)
    }}
    //Recursively calculate the salary of each employee
    for (let employee of department.employees ) {
        calculateEmployeeSalary(employee)
    return sum
}}}
const sum = calculateDepartmentSalary('Engineering');
console.log(`Total salary for the Enginnering department: $${sum}`);

// Task 3: Create a Function to Calculate the Total Salary for All Departments
function calculateCompanySalary() {
for (let company of company.departments) {
    calculateDepartmentSalary(company)
return totalSalary;
}}
//Calculate total salary for the company
const totalSalary = calculateDepartmentSalary(company);
console.log(`Total salary for the Company: $${totalSalary}`); 