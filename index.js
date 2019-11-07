'use strict'

const clear = require('clear')
const figlet = require('figlet')
const chalk = require('chalk')

const { euclideanDistance, manhattanDistance } = require('./lib/distances')
const { getEstimationData, displayInfoById, Obj2Numbers } = require('./lib/utils')
const { askToUseDefaults, askYourProjectData } = require('./lib/inquirer')

clear()

console.log(
    chalk.blue(
        figlet.textSync('Analogist', {
            font: 'Ogre',
            horizontalLayout: 'full'
        })
    )
)

const default2Estimate = {
    input: 10,
    output: 60,
    inquiry: 3,
    file: 6,
    vaf: 0.96,
    rawfp: 500,
    adjfp: 500,
    estimationFunction: 'euclidean'
}

let toEstimate = {}
let estimationFunction = ''
let projectsData = []
askToUseDefaults()
    .then(({ defaultsUsage }) => defaultsUsage === 'Use defaults' ? default2Estimate : askYourProjectData())
    .then(data => {
        estimationFunction = data.estimationFunction
        delete data.estimationFunction
        data = Object.assign({ id: -1 }, data) // add to the beginning
        data.effort = -1

        toEstimate = Obj2Numbers(data)
        
        console.log(`\nYour project's data to estimate`)
        console.table([toEstimate])
    })
    .then(() => getEstimationData)
    .then(data => {
        projectsData = data
        switch(estimationFunction) {
            case 'euclidean':
                return euclideanDistance(data, toEstimate)
            case 'manhattan':
                return manhattanDistance(data, toEstimate)
            default:
                return euclideanDistance(data, toEstimate)
        }
    })
    .then((distance) => displayInfoById(projectsData, distance.id))
