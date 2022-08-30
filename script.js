// Lab 5
// 

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
    this.id=email;
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
      console.log("Name: "+this.employees[i].name+"\nId and Email: ")
    }
  }

  getEmployee(id){
    for(let i=0;i<this.employees.length;i++){
      if(this.employees[i].isManager === true){
        console.log();
      }
    }
  }

}
////////// Calling Tasks Funtions //////////

// Task 1 

// Task 2 


// Task 3 
