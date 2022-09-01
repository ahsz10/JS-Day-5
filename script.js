// Lab 5
// 
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
    this.id=i;
    i+=1;
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
    for(let i=0;i<this.employees.length;i++){
      document.write("<h2>All Employees</h2>")
      if(this.employees[i].isManager === true){
        // console.log("Name: "+this.employees[i].name+"\nId and Email: "+ this.employees[i])
        document.write("<p>Name: </p>"+this.employees[i].name+"<br> <p>Id: </p>"+ this.employees[i].id+
        "<br> <p>Id and Email: </p>"+ this.employees[i].email+"<br> <p>Title: Manager</p>");
      }else{
        document.write("<p>Name: </p>"+this.employees[i].name+"<br> <p>Id: </p>"+ this.employees[i].id+
        "<br> <p>Id and Email: </p>"+ this.employees[i].email+"<br> <p>Salary: </p>"+ this.employees[i].salary);
      }
    }
  }

  getEmployee(idEmail){
    for(let i=0;i<this.employees.length;i++){
      if(this.employees[i].id == idEmail || this.employees[i].email ==idEmail){
        if(this.employees[i].isManager === true){
          // console.log("Name: "+this.employees[i].name+"\nId and Email: "+ this.employees[i])
          document.write("<p>Name: </p>"+this.employees[i].name+"<br> <p>Id: </p>"+ this.employees[i].id+
          "<br> <p>Id and Email: </p>"+ this.employees[i].email+"<br> <p>Title: Manager</p>");
          break;
        }else{
          document.write("<p>Name: </p>"+this.employees[i].name+"<br> <p>Id: </p>"+ this.employees[i].id+
          "<br> <p>Id and Email: </p>"+ this.employees[i].email+"<br> <p>Salary: </p>"+ this.employees[i].salary);
          break;
        }
      }
    }
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
    const name = (window.prompt("Enter Name: ")).toLowerCase;
    const age = (window.prompt("Enter Age: ")).toLowerCase;
    const salary = (window.prompt("Enter Salary: ")).toLowerCase;
    const email = (window.prompt("Enter email: ")).toLowerCase;
    const manager = (window.prompt("Is he a manager:\n (Yes/No) ")).toLowerCase; 
    let manFlag = false;
    if(manager === "yes"|| manager === "y" || manager.includes("yes")){
      manFlag = true;
    }
    let temp = new employee(name,age,salary,email,manFlag);

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
  let mainOffice = new office(office1);

  while(true){
    let usrInput= window.prompt("Enter the function you want to do: "+
    "\nAdding a new employee(hire an employee), fire an employee, search for an employee and list all Employees details"+
    "\n Note to Quit the application please enter \'quit\' or \'q\'");
    let usrInputLower = usrInput.toLowerCase();

    if(usrInputLower.includes("hire") || usrInputLower === "hire" || usrInputLower.includes("add") || usrInputLower === "add"){
      // alert("Please make sure that you added the before choosing Hire")
      mainOffice.hire(createEmployee());
    }else if(usrInputLower.includes("fire") || usrInputLower === "fire"){
      let fireId = window.prompt("Firing an Employee \nEnter Email or ID: ");
      if(searchEmployee(mainOffice,fireId)){
        mainOffice.fire(fireId);
        alert("The employee with id: "+fireId+" is fired")
      }else{
        alert("Invalid ID. Please try again")
      }
    }else if(usrInputLower.includes("search") || usrInputLower === "search" ){
      mainOffice.getEmployee((window.prompt("Searching for an Employee \nEnter Email or ID: ")).toLowerCase);
    }else if(usrInputLower.includes("list") || usrInputLower.includes("list all") || usrInputLower === "list all"){
      mainOffice.getAllEmployees();
    }else if(usrInputLower === "quit" || usrInputLower === "q"){
      alert("Terminating the application")
      break;
    }

  }
}



////////// Calling Tasks Funtions //////////

// Task 1 

// Task 2 


// Task 3





