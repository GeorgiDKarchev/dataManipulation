// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;
console.log(isSum50);

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;
console.log(n1 % 2);
console.log(n2 % 2);
console.log(n3 % 2);
console.log(n4 % 2);
console.log(isTwoOdd);


// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isNotLargeThan25 = n1 < 25 && n2 < 25 && n3 < 25 && n4 < 25;
console.log(isNotLargeThan25);

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;
console.log(isUnique);

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && isNotLargeThan25 && isUnique;
console.log(isValid);

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);
  console.log(`\n`);
  console.log("%c------------Part 1--------------" , "color:green");



  //Part 1 Math Problems

  
  //Check if all # divisible by 5
  const isDivisibleBy5=(n1%5) + (n2%5) + (n3%5) + (n4%5) ===0;
  console.log(`It is ${isDivisibleBy5} that all numbers are divisible by 5.`);


  //Check if n1 greater than n4
  const isN1GreaterThanN4= n1>n4;
  console.log(`First number is larger than the last - This is ${isN1GreaterThanN4}`);

  //Subtract the first number from the second number.
  //Multiply the result by the third number.
  //Find the remainder of dividing the result by the fourth number.
  const findReminder=((n2-n1)*n3)%n4;
  console.log(`Remainder of the calculation ((15-10)*20)%5 is ${findReminder}`);

  //Change the way that isOver25 calculates.
  // So that we do not need to use the NOT operator (!) in other logic comparisons.
  // Rename the variable as appropriate.

  console.log(`Variable isOver25 was changed to  variable IsNotLargeThan25 and (>) was changet with (<) in result we didnt have to use (!)`)
  console.log(`\n`);
  console.log("%c--------------part 2-------------" , "color:green");



  //Part 2: Practical Math:
  
//How many gallons of fuel will you need for the entire trip?

const distanceTrip = 1500 //The distance of the trip, in total
const fuelConsumptionAt55MPH = 30  //At 55 miles per hour, you get 30 miles per gallon.
const fuelConsumptionAt60PMH = 28  //At 60 miles per hour, you get 28 miles per gallon.
const fuelConsumptionAt75MPH = 23  //At 75 miles per hour, you get 23 miles per gallon.
const budget = 175  //fuel budget of $175
const costFuelPerGalon = 3 //The average cost of fuel is $3 per gallon

const galonsNeenedAt55MPHSpeed = distanceTrip / fuelConsumptionAt55MPH;
const galonsNeenedAt60MPHSpeed = distanceTrip / fuelConsumptionAt60PMH;
const galonsNeenedAt75MPHSpeed = distanceTrip / fuelConsumptionAt75MPH;
 
console.log(`For the entire trip of:${distanceTrip} miles we will need: \n
 - ${galonsNeenedAt55MPHSpeed} galons if we travel with speed 55 miles per hour. \n
 - ${galonsNeenedAt60MPHSpeed} galons if we travel with speed 60 miles per hour. \n
 - ${galonsNeenedAt75MPHSpeed} galons if we travel with speed 75 miles per hour.\n \n`);


 //Will your budget be enough to cover the fuel expense?
console.log(`%c Will your budget be enough to cover the fuel expense?`, 'color:green');
const budgetNeededFortravelWith55MPH = galonsNeenedAt55MPHSpeed * costFuelPerGalon;
const budgetNeededFortravelWith60MPH = galonsNeenedAt60MPHSpeed * costFuelPerGalon;
const budgetNeededFortravelWith75MPH = galonsNeenedAt75MPHSpeed * costFuelPerGalon;
 
if (budgetNeededFortravelWith55MPH <= budget) {
   console.log (`Budget of \$${budget} will be enough to cover the \$${budgetNeededFortravelWith55MPH} fuel expenses for traveling with 55 Mph`);

}  else{
     console .log(`Budget of \$${budget} will Not be enough to cover the\$ ${budgetNeededFortravelWith55MPH}fuel expenses for traveling with 55 Mph`);
};



if (budgetNeededFortravelWith60MPH <= budget) {
  console.log (`Budget of \$${budget} will be enough to cover the \$${budgetNeededFortravelWith60MPH} fuel expenses for traveling with 60 Mph`);

}  else{
    console .log(`Budget of \$${budget} will Not be enough to cover the\$ ${budgetNeededFortravelWith60MPH}fuel expenses for traveling with 60 Mph`);
};


if (budgetNeededFortravelWith75MPH <= budget) {
  console.log (`Budget of \$${budget} will be enough to cover the \$${budgetNeededFortravelWith75MPH} fuel expenses for traveling with 75 Mph`);

}  else{
    console .log(`Budget of \$${budget} will Not be enough to cover the\$ ${budgetNeededFortravelWith75MPH} fuel expenses for traveling with 75 Mph`);
};

//How long will the trip take, in hours?
console.log("\n %c How long wil the trip takes in hours ?", "color:green");
 
const hoursforTrvelingWith55 = distanceTrip / 55
console.log(`If traveling with 55 MPH will teke ${hoursforTrvelingWith55} hours to complete the trip.`);
const hoursforTrvelingWith60 = distanceTrip / 60

console.log(`If traveling with 60 MPH will teke ${hoursforTrvelingWith60} hours to complete the trip.`);

const hoursforTrvelingWith75 = distanceTrip / 75
console.log(`If traveling with 75 MPH will teke ${hoursforTrvelingWith75} hours to complete the trip.`);

//Compare the results when traveling at an average of 55, 60, and 75 miles per hour. Which makes the most sense for the trip?
console.log("%cWhich makes the most sense for the trip compare traveing with 55, 60 and 75 MPH?" , "color:green")

//Most fuel efficient way to travel is?

if (galonsNeenedAt55MPHSpeed<galonsNeenedAt60MPHSpeed  && galonsNeenedAt55MPHSpeed<galonsNeenedAt75MPHSpeed){
    console.log(`The most fuel efficient  way to travel is  with 55 MPH`);
  } else if (galonsNeenedAt60MPHSpeed<galonsNeenedAt55MPHSpeed && galonsNeenedAt60MPHSpeed<galonsNeenedAt75MPHSpeed){
    console.log(`The most fuel efficient  way to travel is  with 60 MPH`);
  } else if (galonsNeenedAt75MPHSpeed<galonsNeenedAt55MPHSpeed && galonsNeenedAt75MPHSpeed<galonsNeenedAt60MPHSpeed){
    console.log(`The most fuel efficient  way to travel is  with 75 MPH`);
  }
else{
  console.log("I do not know wich is the most fuel efficient way to travel");
}

// finding the most cost efficient way to travel regarding cost $$$

if (budgetNeededFortravelWith55MPH<=budget && budgetNeededFortravelWith55MPH<budgetNeededFortravelWith60MPH && 
  budgetNeededFortravelWith55MPH<budgetNeededFortravelWith75MPH){
    console.log(`\$${budgetNeededFortravelWith55MPH} is the budget  needed for traveling with 55 MPG and this is the most cost efficient way to travel.`)
  } else if (budgetNeededFortravelWith60MPH<=budget && budgetNeededFortravelWith60MPH<budgetNeededFortravelWith55MPH && 
    budgetNeededFortravelWith60MPH<budgetNeededFortravelWith75MPH){
      console.log(`\$${budgetNeededFortravelWith60MPH} is the budget needed for traveling with 60 MPG and this is the most cost efficient way to travel.`)
    } else if (budgetNeededFortravelWith75MPH<=budget && budgetNeededFortravelWith75MPH<budgetNeededFortravelWith55MPH && 
      budgetNeededFortravelWith75MPH<budgetNeededFortravelWith60MPH){
        console.log(`\$${budgetNeededFortravelWith75MPH} is the budget needed for traveling with 75 MPG and this is the most cost efficient way to travel.`)
      }
else{
  console.log(`I am not sure wich is the most cost efficient way to travel`)
}

// Finding wich trip will take shortest time
 
if (hoursforTrvelingWith55 < hoursforTrvelingWith60 && hoursforTrvelingWith55 < hoursforTrvelingWith75){
  console.log(`${hoursforTrvelingWith55}  hours traveling with 55 MPH is the shortest time to travel the distanse of 1500miles. `)
} else if(hoursforTrvelingWith60 < hoursforTrvelingWith55 && hoursforTrvelingWith60 < hoursforTrvelingWith75){
  console.log(`${hoursforTrvelingWith60}  hours traveling with 60 MPH is the shortest time to travel the distanse of 1500miles. `)

} else if(hoursforTrvelingWith75 < hoursforTrvelingWith55 && hoursforTrvelingWith75 < hoursforTrvelingWith60){
  console.log( `${hoursforTrvelingWith75}  hours traveling with 75 MPH is the shortest time to travel the distanse of 1500miles. `)
}
else{
  console.log(` I do not know wich trip require shortest travel time`)
}
 







  















