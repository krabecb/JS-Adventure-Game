//JQuery - Set up index.html
const $gameContainer = $('<div id="game-container"></div>')
$(document.body).prepend($gameContainer)

const $statsContainer = $('<div id="stats-container"></div>')
$($gameContainer).prepend($statsContainer)

const $ulStats = $('<ul id="stats"></ul>')
$($statsContainer).prepend($ulStats)

const $mainContainer = $('<div id="main"></div>')
$($gameContainer).append($mainContainer)

const $title = $('<h1 id="title">The Raven\s Whisper</h1>')
$($mainContainer).prepend($title)

const $screen = $('<div id="screen"></div>')
$($mainContainer).append($screen)

const $form = $('<form id="input-form" name="name-form"></form>')
$($screen).prepend($form)

const $screenInput = $('<input id="screen-input" type="text" name="screen-input" placeholder="What is your name?">')
$($form).prepend($screenInput)

const $startButton = $('<button id="start-button">Start Adventure</button>')
$($form).append($startButton)

const $playerOptions = $('<div id="player-options"></div>')
$($mainContainer).append($playerOptions)

//Creating player buttons.
let playerButtons = 4

for(let i = 0; i < playerButtons; i++) {
    let $button = $('<button id="button-'+ i +'"></button>')
    $($playerOptions).append($button)
}

//Hiding playerOptions until game starts.
$playerOptions.css({
    display: 'none'
})

class Adventurer {
    constructor(name) {
        // console.log('Constructor is working.')

        this.name = name
        this.level = 1
        this.health = 100
        this.melee = 5
        this.ranged = 5
        this.defense = 5
        this.speech = 5
        this.stealth = 5
    }
}


const game = {


    adventurer: '', //Holds adventurer information.

    createAdventurer: function(name) {
        this.adventurer = new Adventurer(name)

        //Show stats and start game.
        this.showStats()
        this.chapterOne()
    },

    showStats: function() {
        let statsList = ['name', 'level', 'health', 'melee', 'ranged', 'defense', 'speech', 'stealth']

        let adventurerStats = [
            this.adventurer.name, 
            this.adventurer.level,
            this.adventurer.health,
            this.adventurer.melee,
            this.adventurer.ranged,
            this.adventurer.defense,
            this.adventurer.speech,
            this.adventurer.stealth
        ]

        $statsContainer.val('')

        for(let i = 0; i < statsList.length; i++) {
            let $listName = $('<li id="'+ statsList[i] +'">'+ statsList[i] + ": " + adventurerStats[i] +'</li>')
            $($ulStats).append($listName)
        } 
    },

    chapterOne: function() {
        let storyArr = [
            `You're name is ${this.adventurer.name}, and you have always wanted to go on an adventure. You've dreamed of glorious battles where 
            you would strike down any foe in your path.`, 
            "But unfortunately, you are just a table cleaner at the village tavern and aren't sure you would be a good fit as an adventurer anyway.",
            "Then one night, a stranger walks into the tavern, dressed in a hooded cloak and equipped with a bow and dagger. He sits down at a table in the furthest corner of the tavern and gestures for you.",
            "He asks if you know the way to the next town. You do, but you've only made the trip once when you were younger, so you are not sure if you'd be of help. The stranger tells you that he's asked people around town but they do not know the way.",
            "From his cloak he grabs a silver sword and large bag of coin and places it on the table. Your eyes catch the glimmer of the well-crafted sword and the stranger notices. He knows that you're not in it for the money and he smiles, saying that he knew you have the look for adventure in your eyes.",
            "The stranger confesses that his original guide did not survive the journey, but has a pet raven who keeps him company. Reluctantly, you agree to travel with him. You decide now is the time to take a leap of faith at being an adventurer, and the bag of coin would solve nearly all of your financial problems."
        ]

        let i = 0

        $($screen).prepend("<p class='story'>" + storyArr[i] + "</p>")

        const $nextButtonOne = $('<button id="chapter-one-button">Next</button>')
        $screen.append($nextButtonOne)

        $( "#chapter-one-button" ).on('click', function() {
            if(i < storyArr.length) {
                $(".story").remove()
                i++
                if(i === storyArr.length) {
                    $("#chapter-one-button").remove()
                } else {
                $($screen).prepend("<p class='story'>" + storyArr[i] + "</p>")
                }
            }
        })
    } 
}

//EVENT - Start Adventure button
$( "#input-form" ).submit(function( event ) {
  event.preventDefault()
  game.createAdventurer($("input:text").val()) //Input is the element and text is the type.
  $("input:text").val('')
  $form.css({
    display: 'none'
  })
})