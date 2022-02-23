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
    '**': ' ',
};

function decode(expr) {

    let arr = []
    getArray(expr, arr)
    arr = deleteZeros(arr)
    arr = getPair(arr)
    let morse = arr.map(elem => {
        elem = elem.map(elem => {
            if (elem === '10') {
                elem = '.'
            } else if (elem === '11') {
                elem = '-'
            } else {
                elem = "**"
            }
            return elem
        })
        
        return elem
    })

    morse = morse.map(elem => elem = elem.join(''))

    morse = morse.map(elem => {
        let sign
        for(let key in MORSE_TABLE) {
            if (elem === key) {
                sign = MORSE_TABLE[key]
            }
        }
        return sign
    })
    result = morse.join('')

    return result
}


function getArray(a, arr){
    for (let i = 0; i < a.length; i += 10) {
        
        arr.push(a.substr(i,10))
        
    }
    
    return arr
}

function deleteZeros(arr) {
    let newArr = arr.map(elem => {
        elem = +elem
        return elem
    })
    newArr = newArr.map(elem => {
        if (isNaN(elem)) {
            elem = '**'
        }
        return elem
    })
    newArr = newArr.map(elem => elem = String(elem))
    return newArr
}

function getPair(arr) {
    let res = []
    arr.forEach((elem, i) => {
        let newArr = []
        for (let i = 0; i < elem.length; i+=2){
            newArr.push(elem[i] + elem[i+1])
        }
        res.push(newArr)
        return newArr
    })
    return res
}

module.exports = {
    decode
}