/**
* Write a loop that makes seven calls to console.log to output the following triangle
*/

let lenght = 10;
let base = "#";
let space = " "
let spacel = lenght
for (let i = 0; i < lenght; i++) {
  for (let j = 0; j < spacel; j++) {
    space += " ";
  }
  spacel--;

  console.log(space + base);
  base += "##"
  space = " ";
}

