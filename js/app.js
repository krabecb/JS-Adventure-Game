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

        // const statsLocation = document.querySelector('#stats')
        // statsLocation.innerText = '' //Prevents duplication

        for(let i = 0; i < statsList.length; i++) {
            let $listName = $('<li id="'+ statsList[i] +'">'+ statsList[i] + ": " + adventurerStats[i] +'</li>')
            $($ulStats).append($listName)
        }

        // const liName = document.createElement('li')
        // const liLevel = document.createElement('li')
        // const liHealth = document.createElement('li')
        // const liMelee = document.createElement('li')
        // const liRanged = document.createElement('li')
        // const liDefense = document.createElement('li')
        // const liSpeech = document.createElement('li')
        // const liStealth = document.createElement('li')

        // let listArr = []
        // listArr.push(liName)
        // listArr.push(liLevel)
        // listArr.push(liHealth)
        // listArr.push(liMelee)
        // listArr.push(liRanged)
        // listArr.push(liDefense)
        // listArr.push(liSpeech)
        // listArr.push(liStealth)



        // for(let i = 0; i < listArr.length; i++) {
        //     listArr[i].innerText = `${statsList[i]}: ${adventurerStats[i]}`
        //     statsLocation.append(listArr[i])
        // }
    },

    
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