// an object whose properties are objects

const family = {};

family.mother = new Person("Janet", "Jones");
family.father = new Person("Tyrone", "Jones");
family.daughter = new Person("Maria", "Jones");

console.table(family);




// an array of objects, logging only firstName

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const tyrone = new Person("Tyrone", "Jones");
const janet = new Person("Janet", "Smith");
const maria = new Person("Maria", "Cruz");

console.table([tyrone, janet, maria], ["firstName"]);


table(data)
table(data, columns)



//mysql2
`use employee_tracker;
CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(255),
  PRIMARY KEY(id)

)`



const departments = [
  new Department("sales", "1"),
  new Department("marketing", "2"),
  new Department("customer service", "3")
]
const employees = [
  new Employee(11, "max", "walters", "sales", "manager"),
  new Employee(12, "rob", "davidson", "sales", "employee"),
  new Employee(13, "jacy", "hohan", "marketing", "manager"),
  new Employee(14, "isia", "bleep", "marketing", "employee"),
  new Employee(15, "sam", "sdf", "customer service", "manager"),
  new Employee(16, "benny", "kalli", "customer service", "employee")
]
const roles = [
  new Roles("manager", "5", "marketing", 8000),
  new Roles("employee", "6", "marketing", 8000)
]


case "Add employee":
  // const empQuery =
  //   "INSERT INTO employees (first_name, last_name, e_role_id, e_dep_id) VALUES (?, ?, ?, ?);";
  // const empResults = connection.query(empQuery, [answer.first_name, answers.last_name, answers.e_role_id, answers.e_dep_id], (err, result) => {
  //   err ? console.log(err) : console.log(empResults);
  // });
  break;

  break;
  case "Add department":
    const depQuery = "INSERT INTO departments (d_name) VALUES (?);";
    const depResults = connection.query(depQuery, [answer.d_name], (err, result) => {
      err ? console.log(err) : console.log(depResults);
    });
    break;
  case "Add a role":
    const roleQuery =
      "INSERT INTO roles (r_name, r_salary) VALUES (?,?);";
    const roleResults = connection.query(roleQuery, [answer.r_name, answer.r_salary], (err, result) => {
      err ? console.log(err) : console.log(roleResults);
    });
    break;






    // questions
    /* 
    -
    
    */