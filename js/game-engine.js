let isAllMatched = false
let matchedCount = 0

let current = {
    card1: {
        class: '',
        alt: ''
    },
    card2: {
        class: '',
        alt: ''
    }
}

// listens for click on any card in the gamefield
document.getElementById('gamefield').onclick = function(event) {
    let target = event.target
    if (target.nodeName === 'IMG') {
        target = target.parentNode
    }

    // if the card is already face up method logic will be skipped
    if (includesClass(target.classList, 'off')) {
        return
    }

    if (validateCardClick(target)) {
        let card = performShowAnimation(target) /* function location: animation-controller.js */
        if (card) {
            if (current.card1.class === '') {
                current.card1.class = card.classList[1]
                current.card1.alt = card.alt
                showFriendlyMessage(card.alt)
            } else {
                current.card2.class = card.classList[1]
                current.card2.alt = card.alt
                let isEqual = compareCards()
                if (isEqual) {
                    updateSuccessMessage() /* function location: global-stats.js */
                    disableBothImages() /* function location: animation-controller.js */
                    clearCurrent()
                    matchedCount++
                    if (matchedCount === 8) {
                        isAllMatched = true
                        stopTimer()
                        updateMsgBox('COMPLETE!')
                        popFinishModal()
                        return
                    }
                } else {
                    updateFailMessage() /* function location: global-stats.js */
                    hideBothImages() /* function location: animation-controller.js */
                    clearCurrent()
                }

                updateAttempts() /* function location: global-stats.js */

                // rating mechanism
                if (attempts == 20) {
                    let star3 = document.getElementById('star3')
                    if (!includesClass(star3.classList, 'hidden')) {
                        $('#star3').fadeOut(500)
                        setTimeout(() => {
                            star3.classList.add('hidden')
                        }, 500)
                    }
                } else if (attempts == 40) {
                    let star2 = document.getElementById('star2')
                    if (!includesClass(star2.classList, 'hidden')) {
                        $('#star2').fadeOut(500)
                        setTimeout(() => {
                            star2.classList.add('hidden')
                        }, 500)
                    }
                }
            }
        }
    }
}

// custom function similar to existing 
// includes() js function
// which is valid only for arrays
function includesClass(array, className) {
    let includes = false
    for (let i = 0; i < array.length; i++) {
        if (array[i] === className) {
            includes = true
            break
        }
    }
    return includes
}

// ensure that the target of click is a card
function validateCardClick(target) {
    let isCardClicked = false
    let cardId = 'item'
    for (let i = 1; i <= 16; i++) {
        cardId += i
        if (target.id === cardId) {
            isCardClicked = true
            break;
        }
        cardId = 'item'
    }
    return isCardClicked
}

function compareCards() {
    if (current.card1.alt === current.card2.alt) {
        return true
    } else {
        return false
    }
}

function clearCurrent() {
    current.card1.class = ''
    current.card1.alt = ''
    current.card2.class = ''
    current.card2.alt = ''
}
