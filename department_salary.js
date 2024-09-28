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
    let totalDepartmentSales = company.find(department => { department.employees.salary
        
    })
 //Recursively calculate the sales for each subordinate
for( let subordinate of employees.subordinates) {
    totalDepartmentSales += calculateDepartmentSalary(subordinate);
}
return totalDepartmentSales;
}
//Calculate total salary for a department
const totalDepartmentSales = calculateDepartmentSalary('Enginnering');
console.log(`Total salary for the Enginnering department: $${totalDepartmentSales}`);

// Task 3: Create a Function to Calculate the Total Salary for All Departments
function calculateDepartmentSalary(company) {
    let totalSalary = company.departments.employees.salary;
// Recursive calculations for salary for each subordinate
for( let subordinate of company.subordinates) {
    totalSalary += calculateDepartmentSalary(subordinate);
}
return totalSalary;
}
// Calculate total salary for the company
const totalSalary = calculateDepartmentSalary(company);
console.log(`Total Sales for the company: $${totalSalary}`); 