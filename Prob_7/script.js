const employees = [];

function addEmployee(employee) {
  employees.push(employee);
}

function calculateAverageSalary() {
  const total = employees.reduce(
    (total, employee) => total + employee.salary,
    0
  );
  return (total / employees.length).toFixed(2);
}

function highestSalaryDepartment() {
  if (employees.length === 0) return null;

  // Grouping salaries by department
  const departmentSalaries = employees.reduce((acc, employee) => {
    acc[employee.department] =
      (acc[employee.department] || 0) + employee.salary;
    return acc;
  }, {});

  // Finding the department with the maximum total salary
  return Object.entries(departmentSalaries).reduce((maxDept, currentDept) =>
    currentDept[1] > maxDept[1] ? currentDept : maxDept
  )[0];
}

function getEmployeesAboveSalary(salary) {
  return employees.filter((employee) => employee.salary > salary);
}

addEmployee({ id: 1, name: "John", department: "HR", salary: 50000 });
addEmployee({ id: 2, name: "Jane", department: "IT", salary: 80000 });
addEmployee({ id: 3, name: "Doe", department: "IT", salary: 60000 });

console.log(calculateAverageSalary()); // Output: 63333.33
console.log(highestSalaryDepartment()); // Output: 'IT'
console.log(getEmployeesAboveSalary(60000)); // Output: [{ name: 'Jane', ...}]

console.log(employees);
