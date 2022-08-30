// Lab 5
// Task 
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


////////// Calling Tasks Funtions //////////

// Task 1 

// Task 2 


// Task 3 
