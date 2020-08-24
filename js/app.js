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
        const statsLocation = document.querySelector('#stats')
        statsLocation.innerText = '' //Prevents duplication

        const liName = document.createElement('li')
        const liLevel = document.createElement('li')
        const liHealth = document.createElement('li')
        const liMelee = document.createElement('li')
        const liRanged = document.createElement('li')
        const liDefense = document.createElement('li')
        const liSpeech = document.createElement('li')
        const liStealth = document.createElement('li')

        let listArr = []
        listArr.push(liName)
        listArr.push(liLevel)
        listArr.push(liHealth)
        listArr.push(liMelee)
        listArr.push(liRanged)
        listArr.push(liDefense)
        listArr.push(liSpeech)
        listArr.push(liStealth)

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

        for(let i = 0; i < listArr.length; i++) {
            listArr[i].innerText = `${statsList[i]}: ${adventurerStats[i]}`
            statsLocation.append(listArr[i])
        }
    },
}

game.createAdventurer("Brian")




//Event Listeners