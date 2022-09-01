// Lab 5
var id=1;

// Task 0 
class PersonClass{
  constructor(name,age) {
    this.name = name;
    this.money = 100;
    this.age = age;
    this.sleepMood;
    this.healthRate;
  }

  eat(meals){
    if(meals === 3){
      this.healthRate= 100;
    }else if(meals === 2){
      this.healthRate= 75;
    }else if(meals === 1){
      this.healthRate= 50;
    }else{
      console.log("Invalid input");
    }
  }

  sleep(hours){
    if(hours > 0){
      if(hours === 7){
        this.sleepMood= "happy";
      }else if(hours < 7){
        this.sleepMood= "tired";
      }else if(hours >7){
        this.sleepMood= "lazy";
      }
    }else{
      console.log("Invalid input");
    }
  }

  buy(itemNum){
    this.money-= (10*itemNum);
  }
}

class employee extends PersonClass{
  constructor(name,age,salary,email,isManager) {
    super(name,age);
    this.salary=salary;
    this.id=id;
    id+=1;
    this.email=email;
    this.workMood;
    this.isManager=isManager;
  }

  work(hours){
    if(hours > 0){
      if(hours === 8){
        this.workMood= "happy";
      }else if(hours > 8){
        this.workMood= "tired";
      }else if(hours < 8){
        this.workMood= "lazy";
      }
    }else{
      console.log("Invalid input");
    }
  }
}

class office{

  constructor(name){
    this.name=name;
    this.employees= new Array();
  }

  getAllEmployees(){
    document.write("<h2>All Employees</h2>")
    for(let i=0;i<this.employees.length;i++){
      if(this.employees[i].isManager === true){
        // console.log("Name: "+this.employees[i].name+"\nId and Email: "+ this.employees[i])
        document.write("<p>Name: </p>"+this.employees[i].name+"<p>Id: </p>"+ this.employees[i].id+
        "<p>Id and Email: </p>"+ this.employees[i].email+"<p>Title: Manager</p> <br><hr>");
      }else{
        document.write("<p>Name: </p>"+this.employees[i].name+"<p>Id: </p>"+ this.employees[i].id+
        "<p>Id and Email: </p>"+ this.employees[i].email+"<p>Salary: </p>"+ this.employees[i].salary+"<hr>");
      }
    }
    document.write("<hr><hr><hr>");
  }

  getEmployee(idEmail){
    document.write("<h2>Searching for emplyee with id: </h2>"+idEmail)
    for(let i=0;i<this.employees.length;i++){
      if(this.employees[i].id == idEmail || this.employees[i].email ==idEmail){
        if(this.employees[i].isManager === true){
          // console.log("Name: "+this.employees[i].name+"\nId and Email: "+ this.employees[i])
          document.write("<p>Name: </p>"+this.employees[i].name+"<br> <p>Id: </p>"+ this.employees[i].id+
          "<p>Id and Email: </p>"+ this.employees[i].email+"<br> <p>Title: Manager</p>");
          break;
        }else{
          document.write("<p>Name: </p>"+this.employees[i].name+"<p>Id: </p>"+ this.employees[i].id+
          "<p>Id and Email: </p>"+ this.employees[i].email+"<p>Salary: </p>"+ this.employees[i].salary);
          break;
        }
      }
    }
    document.write("<hr>");
  }

  hire(emp){
    this.employees.push(emp);
  }

  fire(empId){

    let tempEmployee = this.employees.filter(checkId);

    this.employees = tempEmployee;

    function checkId(emplID){
      return emplID.id != empId;
    }
  }
}


function createEmployee(){
    const name = window.prompt("Enter Name: ");
    const nameLower= name.toLowerCase();
    const age = window.prompt("Enter Age: ");
    let salary;
    while(true){
      salary = parseInt(window.prompt("Enter Salary: (Have to be greater than 1000) ")); 
      if(salary>1000){
        break;
      }
    }
    const email = window.prompt("Enter email: ");
    const emailLower= email.toLowerCase();
    const manager = window.prompt("Is he a manager:\n (Yes/No) "); 
    const managerLower =manager.toLowerCase();
    let manFlag;
    if(managerLower === "yes"|| managerLower === "y" ){
      manFlag = true;
    }else{
      manFlag = false;
    }
    let temp = new employee(nameLower,age,salary,emailLower,manFlag);
    console.log(temp);

    return temp;
}

function searchEmployee(office,id){
  let flag=false;
  for(let i=0;i<office.employees.length;i++){
    if(office.employees[i].id == id){
      flag=true;
      break;
    }
  }
  return flag;
}

function startProgram(){
  var mainOffice = new office("newOffice1");
  while(true){
    let usrInput= window.prompt("Enter the function you want to do: "+
    "\nAdding a new employee(hire an employee), fire an employee, search for an employee and list all Employees details"+
    "\n Note to Quit the application please enter \'quit\' or \'q\'");
    let usrInputLower = usrInput.toLowerCase();

    if(usrInputLower.includes("hire") || usrInputLower === "hire" || usrInputLower.includes("add") || usrInputLower === "add"){
      mainOffice.hire(createEmployee());
    }else if(usrInputLower.includes("fire") || usrInputLower === "fire"){
      let fireId = window.prompt("Firing an Employee \nEnter Employee ID: ");
      if(searchEmployee(mainOffice,fireId)){
        mainOffice.fire(fireId);
        alert("The employee with id: "+fireId+" is fired")
      }else{
        alert("Invalid ID. Please try again")
      }
    }else if(usrInputLower.includes("search") || usrInputLower === "search" ){
      let searchId =parseInt(window.prompt("Searching for an Employee \nEnter ID: "));
      if(searchEmployee(mainOffice,searchId)){
        mainOffice.getEmployee(searchId);
      }else{
        alert("Invalid ID. Please try again")
      }
    }else if(usrInputLower.includes("list") || usrInputLower.includes("list all") || usrInputLower === "list all"){
      mainOffice.getAllEmployees();
    }else if(usrInputLower === "quit" || usrInputLower === "q"){
      alert("Terminating the application")
      break;
    }

  }
}



////////// Calling Tasks Funtions //////////

startProgram();

