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

        //JQuery
        $statsContainer.val('')

        for(let i = 0; i < statsList.length; i++) {
            let $listName = $('<li id="'+ statsList[i] +'">'+ statsList[i] + ": " + adventurerStats[i] +'</li>')
            $($ulStats).append($listName)
        } 
    },

    chapterOne: function() {
        let storyArr = [
            `${this.adventurer.name} has always wanted to go on an adventure. You've dreamed of glorious battles where 
            you would strike down any foe in your path.`, 
            'Alas you are but a table cleaner',
            'test 3'
        ]

        const $nextButtonOne = $('<button id="chapter-one-button">Next</button>')
        $screen.append($nextButtonOne)

        let i = 0

        $($screen).append("<p class='story'>" + storyArr[i] + "</p>")

        $( "#chapter-one-button" ).on('click', function() {
            if(i < storyArr.length) {
                $(".story").remove()
                i++
                $($screen).append("<p class='story'>" + storyArr[i] + "</p>")
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