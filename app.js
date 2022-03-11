const express = require("express");

const app = express();
app.use(express.json());

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
const arr = ["book1", "book2", "book3", "book4"];
const fun = () => {
  readline.question(`select the option`, (option) => {
    if (!(option >= 1 && option <= 3)) {
      console.log(
        "You have selected an invalid entry so please press 1, 2 or 3"
      );
      fun();
    } else {
      if (option == 1) {
        console.log(arr);
        fun();
      }
      if (option == 2) {
        readline.question(`what is the book name u want to add?`, (answer) => {
          arr.push(answer);
          fun();
        });
      }
      if (option == 3) {
        readline.question(
          `Are you sure you want to quit - press Y to quit`,
          (answer) => {
            if (answer == "Y") {
              console.log("BYE-BYE");
              readline.close();
            }
          }
        );
      }
    }
  });
};
fun();
const port = 3000;
app.listen(port, () => {
  //console.log(`App is running on port ${port}`);
});
