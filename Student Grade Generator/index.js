function getGrade() {
  const marks = prompt("Enter your marks(0-100)");
  // change marks to an integer
  const mark = parseFloat(marks);
  // Add integrity checks for user input
  if (isNaN(mark) || mark < 0 || mark > 100) {
    alert("Please enter a number between 0 and 100.");
    return;
  }
  // Calculate grade
  let grade;
  if (mark > 79) {
    grade = "A";
  } else if (mark >= 60) {
    grade = "B";
  } else if (mark >= 50) {
    grade = "C";
  } else if (mark >= 40) {
    grade = "D";
  } else {
    grade = "E";
  }
  alert(`Your Grade is: ${grade}`); //display grade to user
}
getGrade(); //function call