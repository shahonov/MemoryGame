let cards = {
    pair1: {
        cardsPositions: [ -1, -1 ]
    },
    pair2: {
        cardsPositions: [ -1, -1 ]
    },
    pair3: {
        cardsPositions: [ -1, -1 ]
    },
    pair4: {
        cardsPositions: [ -1, -1 ]
    },
    pair5: {
        cardsPositions: [ -1, -1 ]
    },
    pair6: {
        cardsPositions: [ -1, -1 ]
    },
    pair7: {
        cardsPositions: [ -1, -1 ]
    },
    pair8: {
        cardsPositions: [ -1, -1 ]
    }
}

function performRandomPlacement() {
    document.getElementById('message-box').textContent = 'Good luck!'
    disableButton('start-game')

    enableCards()

    let positions = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ,16 ]

    placePair(cards.pair1, positions, './imgs/cards/camel.svg', 'camel')
    placePair(cards.pair2, positions, './imgs/cards/crocodile.svg', 'crocodile')
    placePair(cards.pair3, positions, './imgs/cards/elephant.svg', 'elephant')
    placePair(cards.pair4, positions, './imgs/cards/flamingo.svg', 'flamingo')
    placePair(cards.pair5, positions, './imgs/cards/kangaroo.svg', 'kangaroo')
    placePair(cards.pair6, positions, './imgs/cards/koala.svg', 'koala')
    placePair(cards.pair7, positions, './imgs/cards/penguin.svg', 'penguin')
    placePair(cards.pair8, positions, './imgs/cards/turtle.svg', 'turtle')

    startTimer() /* function location: game-stats.js */
}

function enableButton(className) {
    let resetBtn = document.getElementsByClassName(className)[0]
    resetBtn.classList.toggle('on')
    resetBtn.classList.toggle('off')
    resetBtn.removeAttribute('disabled')
}

function disableButton(className) {
    let resetBtn = document.getElementsByClassName(className)[0]
    resetBtn.classList.toggle('on')
    resetBtn.classList.toggle('off')
    resetBtn.setAttribute('disabled', 'true')
}

function enableCards() {
    for (let i = 1; i <= 16; i++) {
        let idName = 'item' + i
        let node = document.getElementById(idName)
        setTimeout(() => {
            if (includesClass(node.classList, 'off')) {
                node.classList.remove('off')
                node.classList.add('on')
            }
        }, 0)
    }
}

// randomly place pair of cards with identical images
function placePair(pair, positions, src, alt) {
    for (let i = 0; i < 2; i++) {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 16)
            while (positions[num] === 0) {
                num = Math.floor(Math.random() * 16)
            }
            positions[num] = 0
            pair.cardsPositions[i] = num + 1
            let idName = 'item' + (num + 1)

            let node = document.getElementById(idName)
            if (!node.hasChildNodes()) {
                let img = createImgElement(src, alt, num + 1)
                node.appendChild(img)
            }
        }, 0)
    }
}

function createImgElement(src, alt, num) {
    let img = document.createElement('img')
    img.setAttribute('src', src)
    img.setAttribute('alt', alt)
    img.className = 'image hidden image' + num
    return img
}

// restarts the game and all its current progress and stats
function clearAll() {
    stopTimer()
    clearCurrent()

    isAllMatched = false
    matchedCount = 0
    attempts = 0
    secondsElapsed = 0
    minutesElapsed = 0

    document.getElementById('message-box').textContent = 'Click Start Button'
    clearStats() /* function location: game-stats.js */
    enableButton('start-game')
    removeAllChildren()
    restoreClasses()
    restoreStars()
}

function removeChildNodes(node) {
    if (node) {
        while (node.firstChild) {
            node.removeChild(node.firstChild)
        }
    }
}

// removes all images from cards
function removeAllChildren() {
    for (let i = 0; i <= 16; i++) {
        let idName = 'item' + i
        let node = document.getElementById(idName)
        setTimeout(() => {
            setTimeout(() => removeChildNodes(node), 0)        
        }, 0)
    }
}

function restoreClasses() {
    for (let i = 1; i <= 16; i++) {
        let idName = 'item' + i
        let node = document.getElementById(idName)
        node.className = 'item gradient off stable'
    }
}

// checks if any stars are hidden and makes them visible again
function restoreStars() {
    let star2 = document.getElementById('star2')
    let star3 = document.getElementById('star3')
    if (includesClass(star2.classList, 'hidden')) {
        $('#star2').fadeIn()
        $('#star3').fadeIn()
        star2.classList.remove('hidden')
        star3.classList.remove('hidden')
        return
    } else if (includesClass(star3.classList, 'hidden')) {
        $('#star3').fadeIn()
        star3.classList.remove('hidden')
    }
}