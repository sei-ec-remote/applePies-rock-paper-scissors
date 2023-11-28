/*------ plan of action ------*/
// Identify and initialize our state variables
// (these are our constants and our lets pertaining to the state of our game)
// (usually, they are the initial starting point of our elements)
// (our starting values)

// code the main render() function & our renderResults()
// (these are controllers that update the view based on user input)

// code the click event listener
// code the win logic
// update our renderResults after we have win logic(to add a border to the winner)

// Code a countdown timer
// want to add some Audio to the countdown to improve user experience

/*------ constants ------*/

// list of choices
const RPS_LOOKUP = {
    r: {img: 'imgs/rock.png', beats: 's'},
    p: {img: 'imgs/paper.png', beats: 'r'},
    s: {img: 'imgs/scissors.png', beats: 'p'}
}

/*------ cached element references ------*/
const pResultEl = document.getElementById('p-result')
const cResultEl = document.getElementById('c-result')

const countdownEl = document.getElementById('countdown')

/*------ App's initial state variables ------*/
// some things will change as the game proceeds
let scores
// scores will be object keys (p = player score, c = computer score, t=tie)
let results

let winner

/*------ functions ------*/
// initializer function -> set up our initial state and call render()
function init() {
    scores = {
        p: 0,
        c: 0,
        t: 0
    }

    results = {
        p: 'r',
        c: 'r'
    }

    winner = 't'

    // eventually call render(), when render has been built
    render()
}

init()
// renderScores -> show how many wins/losses/ties
function renderScores() {
    // loop over the scores object, display the scores accordingly
    for (let key in scores) {
        // we're using the key to select an html element
        const scoreEl = document.getElementById(`${key}-score`)
        // we're using bracket notation to dynamically use object values based on a changing key
        scoreEl.innerText = scores[key]
    }
}

// renderResults -> show the results of player and computer choices
function renderResults() {
    // this looks at the results object, pulls the values for the keys P and C
    // then applies the img from the related part of the RPS_LOOKUP object
    // as the src for the img tag associated with the player and computer
    pResultEl.src = RPS_LOOKUP[results.p].img
    cResultEl.src = RPS_LOOKUP[results.c].img

    // this will visually identify who won the round
    // if this el belongs to the winner, change to purple
    // otherwise use white
    pResultEl.style.borderColor = winner === 'p' ? 'purple' : 'white'
    cResultEl.style.borderColor = winner === 'c' ? 'purple' : 'white'
}


// render -> transfer/visualize all changes to the dom
function render() {
    renderScores()
    renderResults()
}
// we'll do this by calling a couple other render functions through a countdown
// getRandom function for our computer player to select a move

// handleChoice -> for the player to select a move(this will be an event listener)

// need a getWinner function -> determine who wins, player, computer or a tie

/*------ event listeners ------*/
