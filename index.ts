#! /usr/bin/env node
import inquirer from "inquirer"

const currency: any = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    INR: 83.57,
    PKR: 278,
}

const fromcurrency = await inquirer.prompt([
        {
            name: "fromcurr",
            message: "Enter From Currency: ",
            type: "list",
            choices:['USD','EUR', 'GBP', 'INR', 'PKR']
        },
        {
            name: "tocurr",
            message: "Enter To Currency: ",
            type: "list",
            choices:['USD','EUR', 'GBP', 'INR', 'PKR']
        },
        {
            name: "amount",
            message: "Enter Amount: ",
            type: "number",
        },
    ])    

let fromAmount = currency[fromcurrency.fromcurr]
let toAmount = currency[fromcurrency.tocurr]

let amount = fromcurrency.amount

let baseAmount = amount / fromAmount
let convertedAmount = baseAmount * toAmount

console.log("here is the converted amount in "+fromcurrency.tocurr+ ":" ,convertedAmount);




