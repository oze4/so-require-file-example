const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

let somethingTxtPath = path.resolve(__dirname, './src/something.txt');
let somethingTxt = fs.readFileSync(somethingTxtPath, 'utf8');

async function sleep(ms) {
    return await new Promise(resolve => setTimeout(resolve, ms));
}

async function SoRequireFileExample() {
    console.log(chalk.yellow("About to read file..."))
    await sleep(2000);
    console.log(chalk.green("Contents of file: "), chalk.blue(somethingTxt));
}

module.exports = SoRequireFileExample;