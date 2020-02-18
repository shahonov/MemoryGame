let attempts = 0
let secondsElapsed = 0
let minutesElapsed = 0
let chronometer

const friendlyMessages = {
    'camel': 'Dusty Camel, the Best Friend in the Desert',
    'crocodile': 'A Crocodile... maybe Dundee',
    'elephant': 'Big Elephant, Big Fellow',
    'flamingo': 'Fancy Glamarous Flamingo',
    'kangaroo': 'Watch out! A Karate Kangaroo',
    'koala': 'Cute Koala Seeking for Leafs',
    'penguin': 'Sweet Arctic Penguin',
    'turtle': 'Super Fast Running Turtle'
}

const successMessages = [ 
    'Well done!', 
    'Bingo!', 
    'Bullseye!', 
    'Matched!', 
    'Perfect!' 
]

const failMessages = [ 
    'Oops', 
    'Try again',
    'Nope', 
    'Unlucky', 
    'Does not match' 
]

function updateAttempts() {
    attempts++
    document.getElementById('attempts-count').textContent = attempts
}

function updateSuccessMessage() {
    let index = getRandomIndex()
    let message = successMessages[index]
    updateMsgBox(message)
}

function updateFailMessage() {
    let index = getRandomIndex()
    let message = failMessages[index]
    updateMsgBox(message)
}

function getRandomIndex() {
    let index = Math.floor(Math.random() * 5)
    return index
}

function showFriendlyMessage(type) {
    let message = friendlyMessages[type]
    updateMsgBox(message)
}

function updateMsgBox(message) {
    document.getElementById('message-box').textContent = message
}

function clearStats() {
    attempts = 0
    secondsElapsed = 0
    minutesElapsed = 0
    let time = stringifyTime()
    document.getElementById('time-elapsed').textContent = time
    document.getElementById('attempts-count').textContent = attempts
}

/* CHRONOMETER */
function startTimer() {
    updateTimer()
}

function stopTimer() {
    clearTimeout(chronometer)
}

function updateTimer() {
    incrementTime()
    chronometer = setTimeout(updateTimer, 1000)
}

function incrementTime() {
    secondsElapsed++
    if (secondsElapsed == 60) {
        secondsElapsed = 0
        minutesElapsed++
    }
    let time = stringifyTime()
    document.getElementById('time-elapsed').textContent = time
}

function stringifyTime() {
    let stringified = ''
    if (minutesElapsed < 10) {
        stringified += '0' + minutesElapsed + ':'
    } else {
        stringified += minutesElapsed + ':'
    }
    if (secondsElapsed < 10) {
        stringified += '0' + secondsElapsed
    } else {
        stringified += secondsElapsed
    }

    return stringified
}
/* CHRONOMETER */