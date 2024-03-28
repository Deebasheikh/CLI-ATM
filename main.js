#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let myBalance = 50000; //Dollar
let myPin = 7654;
console.log(chalk.bgBlue.bold.rgb(222, 173, 237)("Insert your card"));
console.log(chalk.bgMagenta.bold.rgb(222, 173, 237)("Welcome to your account"));
let languageAns = await inquirer.prompt([
    {
        name: "language",
        message: "Please select your preferred language",
        type: "list",
        choices: ["English", "Urdu"],
    },
]);
if (languageAns.language === "English") {
    console.log(chalk.bgMagenta.bold.rgb(222, 173, 237)('You have selected "English"'));
}
if (languageAns.language === "Urdu") {
    console.log(chalk.bgMagentaBright.bold.rgb(222, 173, 237)('You have selected "Urdu"'));
}
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin",
        type: "number",
    },
]);
if (pinAnswer.pin === myPin) {
    console.log(chalk.bgBlack.bold.rgb(222, 173, 237)("Correct pin code"));
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "How would you like to proceed.Please select option",
            type: "list",
            choices: [
                "Withdraw",
                "Fast cash",
                "Deposit fund",
                "Fund transfer",
                "Check balance",
            ],
        },
    ]);
    console.log(chalk.bgMagenta.bold.rgb(222, 173, 237)(operationAns));
    if (operationAns.operation === "Withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter your amount : ",
                type: "number",
            },
        ]);
        if (amountAns.amount > 15000) {
            console.log(chalk.bgRed.white.bold("You have crossed transaction limit"));
        }
        else if (amountAns.amount >= myBalance) {
            console.log(chalk.bgRed.white.bold("Your current balance is insufficient"));
        }
        else {
            console.log(chalk.bgMagenta.bold.rgb(222, 173, 237)("Transaction successful"));
            myBalance -= amountAns.amount;
            console.log(chalk.bgMagenta.bold.rgb(222, 173, 237)(`Your remaining balance is: "${myBalance}"`));
        }
    }
    if (operationAns.operation === "Fast cash") {
        let FastAns = await inquirer.prompt([
            {
                name: "Fast",
                message: "Please select amount",
                type: "list",
                choices: ["1000", "2000", "5000", "10000",],
            },
        ]);
        if (FastAns.Fast > 15000) {
            console.log(chalk.bgRed.white.bold("You have crossed transaction limit"));
        }
        else if (FastAns.Fast >= myBalance) {
            console.log(chalk.bgRed.white.bold("Your current balance is insufficient"));
        }
        else {
            console.log(chalk.bgMagenta.bold.rgb(222, 173, 237)("Transaction successful"));
            myBalance -= FastAns.Fast;
            console.log(chalk.bgMagenta.bold.rgb(222, 173, 237)(`Your remaining balance is: "${myBalance}"`));
        }
    }
    if (operationAns.operation === "Deposit fund") {
        let DepositAns = await inquirer.prompt([
            {
                name: "Deposit",
                message: "Insert cash : ",
                type: "number",
            },
        ]);
        if (DepositAns.Deposit > 15000) {
            console.log(chalk.bgRed.white.bold("You have crossed transaction limit"));
        }
        else if (DepositAns.Deposit >= myBalance) {
            console.log(chalk.bgRed.white.bold("Your current balance is insufficient"));
            if (DepositAns.Deposit > 15000) {
                console.log(chalk.bgRed.white.bold("You have crossed transaction limit"));
            }
        }
        else {
            console.log(chalk.bgMagenta.bold.rgb(222, 173, 237)("Transaction successful"));
            myBalance += DepositAns.Deposit;
            console.log(chalk.bgMagenta.bold.rgb(222, 173, 237)(`Your new balance is: "${myBalance}"`));
        }
    }
    if (operationAns.operation === "Fund transfer") {
        let transferAns = await inquirer.prompt([
            {
                name: "transfer",
                message: "Enter your amount : ",
                type: "number",
            },
        ]);
        let detailsAns = await inquirer.prompt([
            {
                name: "details",
                message: "Enter account number : ",
                type: "number",
            },
        ]);
        if (transferAns.transfer > 15000) {
            console.log(chalk.bgRed.white.bold("You have crossed transaction limit"));
        }
        else if (transferAns.transfer >= myBalance) {
            console.log(chalk.bgRed.white.bold("Your current balance is insufficient"));
        }
        else {
            console.log(chalk.bgMagenta.bold.rgb(222, 173, 237)("Transaction successful"));
            myBalance -= transferAns.transfer;
            console.log(chalk.bgMagenta.bold.rgb(222, 173, 237)(`Your remaining balance is: "${myBalance}"`));
        }
    }
    if (operationAns.operation === "Check balance") {
        console.log(chalk.bgMagenta.bold.rgb(222, 173, 237)(`Your current balance is : "${myBalance}" `));
    }
}
else {
    console.log(chalk.bgRed.bold.white("Incorrect pin code"));
}
console.log(chalk.bgMagenta.white.bold.italic("Thankyou for using CLI ATM.Goodbye!"));
