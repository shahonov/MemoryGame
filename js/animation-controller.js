let modal
let modalPopped = false

function performShowAnimation(target) {
    target.classList.toggle('gradient')
    target.classList.toggle('focus')
    target.classList.toggle('stable')
    target.classList.toggle('on')
    target.classList.toggle('off')
    setTimeout(() => {
        target.classList.toggle('gradient')
        target.classList.toggle('focus')
        target.classList.toggle('stable')
    }, 500)

    let imageClass = extractImageClass(target.id)
    let shownCard = showImage(imageClass)
    return shownCard
}

function extractImageClass(itemClass) {
    let char1 = itemClass[itemClass.length - 2]
    let char2 = itemClass[itemClass.length - 1]
    let numberGuess = char1 + char2
    if (isNaN(numberGuess)) {
        return 'image' + char2
    }
    return 'image' + numberGuess
}

function showImage(imageClass) {
    let node = document.getElementsByClassName(imageClass)[0]
    if (node) {
        node.classList.toggle('hidden')
    }
    return node
}

function disableBothImages() {
    let card1 = document.getElementsByClassName(current.card1.class)[0]
    let card2 = document.getElementsByClassName(current.card2.class)[0]
    setTimeout(() => {
    toggleGradient(card1, card2)
    toggleTrue(card1, card2)
    }, 500)
    setTimeout(() => {
        toggleTrue(card1, card2)
        toggleMatched(card1, card2)
    }, 1500)
}

function hideBothImages() {
    let card1 = document.getElementsByClassName(current.card1.class)[0]
    let card2 = document.getElementsByClassName(current.card2.class)[0]
    setTimeout(() => {
        toggleGradient(card1, card2)
        toggleFalse(card1, card2)
        toggleOn(card1, card2)
        toggleOff(card1, card2)
    }, 500)
    setTimeout(() => {
        toggleGradient(card1, card2)
        toggleFalse(card1, card2)
        toggleHidden(card1, card2)
    }, 1500)
}

function popFinishModal() {
    modal = document.createElement('div')
    modal.className = 'modal hidden'
    modal.id = 'modal'

    let modalGreeting = createModalContent('h3', 'modal header impact', 'COMPLETE!')
    let modalStats = document.createElement('p', 'modal stats impact', 'Stats:')
    let statsAttempts = createModalContent('p', 'modal stats-attempts impact', 'Total Attempts: ' + attempts)
    let statsStars = createModalContent('p', 'modal stats-stars impact', 'Rating (Stars Count): ' + getRatingInt())
    let statsTime = createModalContent('p', 'modal stats-time impact', 'Time Elapsed: ' + stringifyTime())
    let okButton = createModalContent('button', 'modal btn impact', 'OK')
    okButton.addEventListener('click', closeModal)

    modalStats.appendChild(statsAttempts)
    modalStats.appendChild(statsStars)
    modalStats.appendChild(statsTime)

    modal.appendChild(modalGreeting)
    modal.appendChild(modalStats)
    modal.appendChild(okButton)

    document.body.insertAdjacentElement('afterbegin', modal)
    $('#modal').fadeIn(500)
    
    setTimeout(() => {
        document.body.addEventListener('click', closeModal)
    }, 100)



    modalPopped = true
}

function createModalContent(elementType, className, textContent) {
    let node = document.createElement(elementType)
    node.className = className
    node.textContent = textContent
    return node
}

function closeModal(event) {
    if (event.target.className === 'modal btn impact' && modalPopped) {
        $('#modal').fadeOut(500)
        setTimeout(() => {
            if (document.body.children[0].id === 'modal') {
                document.body.removeChild(modal)
                document.body.removeEventListener('click', closeModal)
            }
        }, 500)
    }

    let containsModal = includesClass(event.target.classList, 'modal')
    if (!containsModal && modalPopped) {
        $('#modal').fadeOut(500)
        setTimeout(() => {
            if (document.body.children[0].id === 'modal') {
                document.body.removeChild(modal)
                document.body.removeEventListener('click', closeModal)
            }
        }, 500)
    }
}

function getRatingInt() {
    if (attempts < 20) {
        return 3
    } else if (attempts >= 20 && attempts <= 39) {
        return 2
    } else {
        return 1
    }
}

function toggleTrue(card1, card2) {
    card1.parentNode.classList.toggle('true')
    card2.parentNode.classList.toggle('true')
}

function toggleFalse(card1, card2) {
    card1.parentNode.classList.toggle('false')
    card2.parentNode.classList.toggle('false')
}

function toggleHidden(card1, card2) {
    card1.classList.toggle('hidden')
    card2.classList.toggle('hidden')
}

function toggleOn(card1, card2) {
    card1.parentNode.classList.toggle('on')
    card2.parentNode.classList.toggle('on')
}

function toggleOff(card1, card2) {
    card1.parentNode.classList.toggle('off')
    card2.parentNode.classList.toggle('off')
}

function toggleGradient(card1, card2) {
    card1.parentNode.classList.toggle('gradient')
    card2.parentNode.classList.toggle('gradient')
}

function toggleMatched(card1, card2) {
    card1.parentNode.classList.toggle('matched')
    card2.parentNode.classList.toggle('matched')
}