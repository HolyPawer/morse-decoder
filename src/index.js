const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {

    let arr = []
    let item = ''
    let result = ''

    for (let i = 0; i < expr.length; i++) {
        item += expr[i]
        if (item.length == 10) {
            arr.push(item)
            item = ''
        }
    }
    arr.forEach(element => {
        if (element == '**********') {
            result += ' '
        } else {
            result += (MORSE_TABLE[element, parseInt(element).toString().replace(/10/g,'.').replace(/11/g,'-')])
        }
    });
    return result
}

module.exports = {
    decode
}