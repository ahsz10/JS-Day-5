// Lab 5
// 
var id=1;

// Task 0 
class PersonClass{
  constructor(name,money) {
    this.name = name;
    this.money = money;
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
  constructor(name,money,salary,email,isManager) {
    super(name,money);
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


  
  /*fire(empId){
    for(let i=0;i<this.employees.length;i++){
      if(this.employees[i].id == empId){
        if(i==0){
          this.employees.shift();
          break;
        }else if(i == (this.employees.length-1)){
          this.employees.pop();
          break;
        }else{
          let tempEmployee = this.employees.filter(checkId)

          checkId(emplID){
            return emplID != empId;
          }

        }
      }
    }
  }*/

  fire(empId){

    let tempEmployee = this.employees.filter(checkId);

    this.employees = tempEmployee;

    function checkId(emplID){
      return emplID.id != empId;
    }
  }
}


function startProgram(){

  while(true){
    let usrInput= window.prompt("Enter the function you want to do: "+
    "\nAdding a new employee, hire an employee, fire an employee, search for an employee and list all Employees details");
    let usrInputLower = usrInput.toLowerCase();

    if(usrInputLower.includes("add") || usrInputLower === "add"){
       

    }else if(usrInputLower.includes("hire") || usrInputLower === "hire"){

    }else if(usrInputLower.includes("fire") || usrInputLower === "fire"){

    }else if(usrInputLower.includes("search") || usrInputLower === "search" ){

    }else if(usrInputLower.includes("list") || usrInputLower.includes("list all") || usrInputLower === "list all"){
      
    }

  }
}



////////// Calling Tasks Funtions //////////

// Task 1 

// Task 2 


// Task 3





