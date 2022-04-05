function subjects() {
  subjects = parseInt(prompt("How many subjects do you take?"));
  document.getElementById("results").innerHTML =
    "<strong>Subject    Result    Grade</strong>";

  for (i = 0; i < subjects; i++) {
    subjectName = prompt("Enter your subject name");
    result = prompt("Enter your result for " + subjectName);
    document.getElementById("results").innerHTML +=
      "<br />" + subjectName + " " + result;
    if (result >= 70) {
      document.getElementById("results").innerHTML += " A";
    } else if (result >= 65) {
      document.getElementById("results").innerHTML += " B";
    } else if (result >= 55) {
      document.getElementById("results").innerHTML += " C";
    } else if (result >= 40) {
      document.getElementById("results").innerHTML += " D";
    } else if (result >= 30) {
      document.getElementById("results").innerHTML += " E";
    } else {
      document.getElementById("results").innerHTML += " F";
    }
  }
}
