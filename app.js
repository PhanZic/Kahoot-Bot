const Kahoot = require("kahoot.js-updated");
const fs = require('fs');
const gameCode = 7805071;
const path = require('path');
const client = new Kahoot;
var name = 'Atlib' + ' ' + Math.floor(Math.random() * 99999999).toString()

setInterval(kahoot, 30)
function kahoot() {
    client.join(gameCode, name);

    client.on("Joined", () => {
        console.log(`I joined the Kahoot! with the name ${name}`);
        if (!fs.existsSync('Logs')) {
            fs.mkdir(path.join(__dirname, '/Logs'),
                { recursive: true }, (err) => {
                    if (err) {
                        return console.error(err);
                    }
                    console.log('Directory created successfully!');
                });
            fs.appendFile(`${__dirname}/Logs/${gameCode}.txt`, `fucked game: ${gameCode}\r\n`, function (err) {
                if (err) throw err;
            });
        } else {
            fs.appendFile(`${__dirname}/Logs/${gameCode}.txt`, `fucked game: ${gameCode}\r\n`, function (err) {
                if (err) throw err;
            });
        }
    });

    client.on("QuizStart", () => {
    });

    client.on("QuestionStart", question => {
        question.answer(Math.floor(Math.random() * 5));
        console.log('i answered a question')
    });
    client.on("QuizEnd", () => {
        console.log("The quiz has ended.");
    });
}