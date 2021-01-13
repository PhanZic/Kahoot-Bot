// Coded by PhanZic#0441
const Kahoot = require("kahoot.js-updated");
var kahoots = [];
const fs = require('fs');
const path = require('path');
const gameCode = 6857875;
var name = 'CodeSec' + ' ' + Math.floor(Math.random() * 99999999).toString()
var bot_count = 230;

setTimeout(function () {
    for (var i = 0; i < bot_count; i++) {
        kahoots.push(new Kahoot);
        kahoots[i].join(gameCode, name + " " + String(i)).catch(error => {
            console.log("join failed " + error.description + " " + error.status)
        });
        kahoots[i].on("Joined", () => {
            console.log("successfully joined game with name:" + ' ' + name)
            if (!fs.existsSync('Logs')) {
                fs.mkdir(path.join(__dirname, '/Logs'),
                    { recursive: true }, (err) => {
                        if (err) {
                            return console.error(err);
                        }
                        console.log('Directory created successfully!');
                    });
                fs.appendFile(`${__dirname}/Logs/${gameCode}.txt`, `Bot Users: ${name}\r\n`, function (err) {
                    if (err) throw err;
                });
            } else {
                fs.appendFile(`${__dirname}/Logs/${gameCode}.txt`, `Bot Users: ${name}\r\n`, function (err) {
                    if (err) throw err;
                });
            }
        });
        kahoots[i].on("QuestionStart", (question) => {
            question.answer(
                Math.floor(
                    Math.random() * question.quizQuestionAnswers[question.questionIndex]
                ) + 0
            );
        });
        kahoots[i].on("Disconnect", (reason) => {
            console.log("disconnected because " + reason);
        });
    }
}, 5000);