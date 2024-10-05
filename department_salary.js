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
function calculateDepartmentSalary () {
let sum = 0
let department = company.departments
let employee = department[0].employees
// The Calculate Employee Salary function to assist the Department Salary function
let calculateEmployeeSalary = function(){
    employee.forEach((employee) => {sum += employee.salary})
    //Recursively calculate the salary of each employee

    for (let employee of department[0].employees ) {
    calculateEmployeeSalary(employee)
   
    }
    //Recursively calculate the salary of each subordinate 
    if (employee.subordinates.length >= 0) {
    for(let subordinate of employee.subordinates) {
        calculateEmployeeSalary(subordinate)
        
    }}
    
    
    
return sum
}}
const sum = calculateDepartmentSalary(company.departments[0].employees);
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