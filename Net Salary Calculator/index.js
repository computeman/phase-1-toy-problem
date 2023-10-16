function salaryCalculator() {
  let basicSalary = prompt("Enter your basic salary without commas");
  let benefits = prompt("Enter your benefits");
  //convert to integer
  let grossPay = parseFloat(basicSalary) + parseFloat(benefits);

  //calculate paye based on gross salary.
  let paye = 0;
  if (grossPay > 800000) {
    paye = grossPay * 0.35;
  } else if (grossPay > 500000) {
    paye = grossPay * 0.325;
  } else if (grossPay > 32333) {
    paye = grossPay * 0.3;
  } else if (grossPay > 24000) {
    paye = grossPay * 0.25;
  } else {
    paye = grossPay * 0.1;
  }

  //create nhif raes array.

  let nhifRates = [
    { min: 0, max: 5999, deduction: 150 },
    { min: 6000, max: 7999, deduction: 300 },
    { min: 8000, max: 11999, deduction: 400 },
    { min: 12000, max: 14999, deduction: 500 },
    { min: 15000, max: 19999, deduction: 600 },
    { min: 20000, max: 24999, deduction: 750 },
    { min: 25000, max: 29999, deduction: 850 },
    { min: 30000, max: 34999, deduction: 900 },
    { min: 35000, max: 39999, deduction: 950 },
    { min: 40000, max: 44999, deduction: 1000 },
    { min: 45000, max: 49999, deduction: 1100 },
    { min: 50000, max: 59999, deduction: 1200 },
    { min: 60000, max: 69999, deduction: 1300 },
    { min: 70000, max: 79999, deduction: 1400 },
    { min: 80000, max: 89999, deduction: 1500 },
    { min: 90000, max: 99999, deduction: 1600 },
    { min: 100000, max: Infinity, deduction: 1700 },
  ];
  // Calculate nhif Deduction
  let nhifDeduction = 0;
  for (let nhifRate of nhifRates) {
    if (grossPay >= nhifRate.min && grossPay <= nhifRate.max) {
      nhifDeduction = nhifRate.deduction;
      break;
    }
  }

  let nssfRates = [
    { min: 0, max: 6000 },
    { min: 6001, max: 18000 },
  ];

  let nssfDeductions = 0;
  for (const i of nssfRates) {
    if (grossPay >= i.min && grossPay <= i.max) {
      nssfDeductions = grossPay * 0.06;
      break;
    }
  }
  
  let netSalary = grossPay - (paye + nhifDeduction + nssfDeductions);
  console.log("Gross Salary:", grossPay);
  console.log("Net Salary:", netSalary);
  console.log("PAYE:", paye);
  console.log("NHIF Deduction:", nhifDeduction);
  console.log("NSSF Deductions:", nssfDeductions);

  alert("Your Net Salary is: " + netSalary.toFixed(2));
}
salaryCalculator();
