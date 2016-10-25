
const eol = require('os').EOL;
const readline = require('readline');

const borderSize = (() => {
    const [ windowHeight, windowWidth ]  = process.stdout.getWindowSize();

    return {
        x: windowWidth/2.2,
        y: windowHeight/9
    }
})();


function drawBorder() {
    const borderLine = "x"
    const height = (borderLine + " ".repeat(borderSize.y) + borderLine + eol).repeat(borderSize.y);
    const width = (borderLine).repeat(borderSize.x);
    process.stdout.write(width);
    process.stdout.write(height);
}

drawBorder();


readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);


process.stdin.on('keypress', movePaddle);

let paddlePosition = 0;

function movePaddle(str, key) {

    if (key.name === 'left') {
        paddlePosition < 0 ? paddlePosition = 0 : paddlePosition--;
        
    }

    if (key.name === 'right') {
        // console.log(borderSize.x);
        paddlePosition >= borderSize.x ? paddlePosition = 14 : paddlePosition++;
}
    
    if(key.name === 'q') process.exit();

    readline.clearLine(process.stdout);
    readline.cursorTo(process.stdout, paddlePosition);
    process.stdout.write(`=====`);
}