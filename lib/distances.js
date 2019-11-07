'use strict'

const { min, Obj2Numbers } = require('./utils')

module.exports = {
    euclideanDistance: (data, goal) => {
        goal = Obj2Numbers(goal)
        const distances = []
        for (const record of data) {
            let sum = 0
            let tmpIdStorage = 0
            for (const key in record) {
                if (key === 'Effort') continue
                if (key === 'id')
                    tmpIdStorage = record[key]
                else
                    sum += (record[key] - goal[key]) ** 2
            }
            distances.push({
                id: tmpIdStorage,
                distance: Math.sqrt(sum)
            })
        }
        return min(distances, 'distance')
    },

    manhattanDistance: (data, goal) => {
        goal = Obj2Numbers(goal)
        const distances = []
        for (const record of data) {
            let sum = 0
            let tmpIdStorage = 0
            for (const key in record) {
                if (key === 'Effort') continue
                if (key === 'id')
                    tmpIdStorage = record[key]
                else
                    sum += Math.abs(record[key] - goal[key])
            }
            distances.push({
                id: tmpIdStorage,
                distance: sum
            })
        }
        return min(distances, 'distance')
    }
}