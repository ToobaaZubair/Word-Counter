import inquirer from "inquirer";
const wordCounter = await inquirer.prompt([{
        type: "input",
        name: "text",
        message: "Enter your text"
    }]);
const result = wordCounter.text.trim().split(/\s+/).length;
console.log(`Your Total words are: ${result}`);
// import inquirer from "inquirer";
//   const userInput=await inquirer.prompt([
//     {
//       type: "input",
//       name: "text",
//       message: "Enter some text:",
//     },
//   ]);
//   const wordCount =  userInput.text.trim().split(/\s+/).length;
//   console.log(`Word count: ${wordCount}`);
