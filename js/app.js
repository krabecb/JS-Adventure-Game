class Adventurer {
    constructor(name) {
        console.log('Constructor is working.')

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

        //Show stats and start game
        this.showStats()
    },

    showStats: function() {
        //Get location of ul by ID
        const statsLocation = document.querySelector('#stats')
        statsLocation.innerText = '' //Prevents duplication

        const liName = document.createElement('li')
        liName.innerText = `Name: ${this.adventurer.name}`

        const liLevel = document.createElement('li')
        liLevel.innerText = `Level: ${this.adventurer.level}`

        const liHealth = document.createElement('li')
        liHealth.innerText = `Health: ${this.adventurer.health}`

        const liMelee = document.createElement('li')
        liMelee.innerText = `Melee: ${this.adventurer.melee}`

        const liRanged = document.createElement('li')
        liRanged.innerText = `Ranged: ${this.adventurer.ranged}`

        const liDefense = document.createElement('li')
        liDefense.innerText = `Defense: ${this.adventurer.defense}`

        const liSpeech = document.createElement('li')
        liSpeech.innerText = `Speech: ${this.adventurer.speech}`

        const liStealth = document.createElement('li')
        liStealth.innerText = `Stealth: ${this.adventurer.stealth}`

        statsLocation.append(liName)
        statsLocation.append(liLevel)
        statsLocation.append(liHealth)
        statsLocation.append(liMelee)
        statsLocation.append(liRanged)
        statsLocation.append(liDefense)
        statsLocation.append(liSpeech)
        statsLocation.append(liStealth)
    },
}

game.createAdventurer("Brian")




//Event Listeners