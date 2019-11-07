'use strict'

const csv = require('csv-parser')
const fs = require('fs')

module.exports = {
    getEstimationData: new Promise((resolve, reject) => {
        let data = []
        fs.createReadStream('data/albrecht.csv')
            .pipe(csv({
                mapValues: ({ header, index, value }) => parseFloat(value)
            }))
            .on('data', row => {
                data.push(row)
            })
            .on('end', () => {
                resolve(data)
            })
            .on('error', err => reject(err))
    }),

    min: (obj, key, id = 'id') => {
        const values = obj.map(x => x[key])
        const ids = obj.map(x => x[id])
        const minValue = Math.min(...values)
        const minId = ids[values.indexOf(minValue)]

        return { id: minId, distance: minValue }
    },

    displayInfoById: (data, id) => {
        console.log(`\nThe closes project using Albrecht dataset`)
        console.table(data.filter(x => x.id === id))
    },

    Obj2Numbers: obj => {
        for (const key in obj) obj[key] = parseFloat(obj[key])
        return obj
    }
}
