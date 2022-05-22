const fs = require('fs');
const path = require('path');
const process = require('process');
const readline = require('readline');
const { stdin: input, stdout: output } = require('process');
const rl = readline.createInterface({ input, output });
//node 02-write-file
const file = fs.open(path.join(__dirname, 'text.txt'), 'a', (err, fd) => {
    if (err)
        console.log(err);
    else {
    }
})

let date = ``;
const message = 'Thank you!'
rl.question('Hi, write some text\n ',
    (userInput) => {
        if (userInput.trim() === 'exit') {
            console.log(`${message}`)
            rl.close();
        } 
        // else if ('SIGINT') {
        //     console.log('exit')
        //     rl.close();
        // }
        else {
            date += userInput.trim() + '\n';
            createFile();
            date = '';
            userInputAll(userInput)
        }
        rl.on('SIGINT', () => {
            console.log(`${message}`)
            rl.close();
        })
      
    }
);



function userInputAll(userInput) {
    rl.question('',
        (userInput) => {
            if (userInput.trim() === 'exit') {
                console.log(`${message}`)
                rl.close();
            }
            // else if ('SIGINT') {
            //     console.log('exit')
            //     rl.close();
            // }
            else {
                date += userInput.trim() + '\n';
                createFile();
                date = '';
                userInputAll(userInput)
            }
            rl.on('SIGINT', () => {
                console.log(`${message}`)
                rl.close();
            })
        }
    );
}

async function createFile() {
    fs.writeFile(path.join(__dirname, 'text.txt'), date, { flag: 'a' }, (err) => {
        if (err)
            console.log(err);
        else {

        }

    });
};
createFile();
