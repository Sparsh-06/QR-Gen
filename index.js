import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs-extra';


inquirer.prompt([
    {"message": "What do youo want to enter into the qr image ? : ",
    "name":"qrtext"}
]).then((answers) => {
    const ans = answers.qrtext;
    var qr_svg = qr.image(ans);
    qr_svg.pipe(fs.createWriteStream('answers.png'));
}).catch((error) => {
    if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
    } else {
        // Something else went wrong
    }
});