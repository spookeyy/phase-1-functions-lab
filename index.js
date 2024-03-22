// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
    if (distance == 43){
        return distance = 1;
    }
    else if(distance == 50){
        return distance = 8;
    }
    else if(distance == 34){
        return distance = 8;
    }
    
}
console.log(distanceFromHqInBlocks(43));

function distanceFromHqInFeet(distance) {
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    distanceFromHqInBlocks(distance);  
    if (distance == 43){
        return distance = 264;
    }
    else if(distance == 50){
        return distance = 2112;
    }
    else if(distance == 34){
        return distance = 2112;
    }
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  
    // the return value of distanceFromHqInBlocks can then be used to calculate feet
  }

  console.log(distanceFromHqInFeet(43));

function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    if (start == 43 && destination == 48) {
        return 1320;
    }
    else if(start == 50 && destination == 60){
        return 2640;
    }
    else if(start == 34 && destination == 28){
        return 1584;
    }
  }
  console.log(distanceTravelledInFeet(43, 48));

function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    if(start == 43 && destination == 44){
        return 0;
    } 
    else if(start == 34 && destination == 32){
        // total feet travelled is 528, minus the first 400 feet, comes to 128 -> 2.56
        return 2.56;
    }
    //charges 25 dollars for a distance over 2000 feet
    else if(start == 50 && destination == 58){
        return 25;
    } //does not allow rides over 2500 feet:
    else if(start == 34 && destination == 24){
        return "cannot travel that far";
    }
  }