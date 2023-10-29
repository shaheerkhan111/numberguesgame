import inquirer from "inquirer";
const computergeneratednumber = Math.floor(Math.random() * 100);
const answer = await inquirer.prompt([
    {
        message: "write the number between 1 to 100",
        type: "number",
        name: "userguess"
    }
]);
const { userguess } = answer;
if (userguess === computergeneratednumber)
    [
        console.log(userguess, "userguess", computergeneratednumber),
        console.log("you win")
    ];
else {
    console.log(userguess, "userguess", computergeneratednumber),
        console.log("try again");
}
