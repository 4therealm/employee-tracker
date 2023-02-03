// Function to fetch and display departments
async function viewDepartments() {
  try {
    const response = await fetch("/api/departments");
    const departments = await response.json();
    console.table(departments);
  } catch (error) {
    console.error(error);
  }
}

// Function to fetch and display employees
async function viewEmployees() {
  try {
    const response = await fetch("/api/employees");
    const employees = await response.json();
    console.table(employees);
  } catch (error) {
    console.error(error);
  }
}

// Function to fetch and display roles
async function viewRoles() {
  try {
    const response = await fetch("/api/roles");
    const roles = await response.json();
    console.table(roles);
  } catch (error) {
    console.error(error);
  }
}

// Function to add an employee
async function addEmployee(firstName, lastName, roleId, managerId) {
  try {
    const response = await fetch("/api/employees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        role_id: roleId,
        manager_id: managerId,
      }),
    });
    const employee = await response.json();
    console.table(employee);
  } catch (error) {
    console.error(error);
  }
}

// Function to add a department
async function addDepartment(departmentName) {
  try {
    const response = await fetch("/api/departments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: departmentName,
      }),
    });
    const department = await response.json();
    console.table(department);
  } catch (error) {
    console.error(error);
  }
}

// Function to add a role
async function addRole(roleName, salary, departmentId) {
  try {
    const response = await fetch("/api/roles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: roleName,
        salary: salary,
        department_id: departmentId,
      }),
    });
    const role = await response.json();
    console.table(role);
  } catch (error) {
    console.error(error);
  }
}
