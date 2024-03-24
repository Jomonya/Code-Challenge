function calculateGrade(marks) {
    if (marks < 0 || marks > 100) {
      return "Invalid marks";
    } else if (marks > 79) {
      return "A";
    } else if (marks >= 60) {
      return "B";
    } else if (marks >= 50) {
      return "C";
    } else if (marks >= 40) {
      return "D";
    } else {
      return "E";
    }
  }
  
  
  const marks = prompt("Enter student marks (0-100):");
  console.log(calculateGrade(parseInt(marks, 10)));

  
  function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;
    
    if (speed < speedLimit + kmPerPoint) {
      console.log("Ok");
      return;
    }
    
    const points = Math.floor((speed - speedLimit) / kmPerPoint);
    if (points > 12) {
      console.log("License suspended");
    } else {
      console.log("Points:", points);
    }
  }
  
  
  const speed = prompt("Enter speed of the car:");
  checkSpeed(parseInt(speed, 10));



  function calculateNetSalary(basicSalary, benefits) {
    const taxRate = 0.30; 
    const nhifDeduction = 1000; 
    const nssfDeduction = 2000; 
    
    const grossSalary = basicSalary + benefits;
    const payee = grossSalary * taxRate;
    const netSalary = grossSalary - (payee + nhifDeduction + nssfDeduction);
    
    console.log("Gross Salary:", grossSalary);
    console.log("Net Salary:", netSalary);
  }
  

  const basicSalary = parseFloat(prompt("Enter basic salary:"));
  const benefits = parseFloat(prompt("Enter benefits:"));
  calculateNetSalary(basicSalary, benefits);
  
  