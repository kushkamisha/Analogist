'use strict'

const inquirer = require('inquirer')

module.exports = {
    askToUseDefaults: () => {
        const questions = [
            {
                name: 'defaultsUsage',
                type: 'list',
                message: 'Do you want to enter project data, or use defaults?',
                choices: ['Enter the data', 'Use defaults'],
                default: 'Enter the data'
            }
        ]
        return inquirer.prompt(questions)
    },

    askYourProjectData: () => {
        const questions = [
            {
                name: 'input',
                type: 'number',
                message: 'Enter the number of external inputs:',
                default: '10',
                validate: function (value) {
                    if (!Number.isNaN(parseFloat(value))) return true
                    return 'Please enter the valid number of external inputs'
                }
            },
            {
                name: 'output',
                type: 'number',
                message: 'Enter the number of external outputs:',
                default: '60',
                validate: function (value) {
                    if (!Number.isNaN(parseFloat(value))) return true
                    return 'Please enter the valid number of external outputs'
                }
            },
            {
                name: 'inquiry',
                type: 'number',
                message: 'Enter the number of external inquiries:',
                default: '3',
                validate: function (value) {
                    if (!Number.isNaN(parseFloat(value))) return true
                    return 'Please enter the valid number of external inquiries'
                }
            },
            {
                name: 'file',
                type: 'number',
                message: 'Enter the number of internal logical files:',
                default: '6',
                validate: function (value) {
                    if (!Number.isNaN(parseFloat(value))) return true
                    return 'Please enter the valid number of internal logical files'
                }
            },
            {
                name: 'vaf',
                type: 'number',
                message: 'Enter the value adjustment factor:',
                default: '0.96',
                validate: function (value) {
                    if (!Number.isNaN(parseFloat(value))) return true
                    return 'Please enter the valid value adjustment factor'
                }
            },
            {
                name: 'rawfp',
                type: 'number',
                message: 'Enter the number of RAW function points:',
                default: '500',
                validate: function (value) {
                    if (!Number.isNaN(parseFloat(value))) return true
                    return 'Please enter the number of RAW function points'
                }
            },
            {
                name: 'adjfp',
                type: 'number',
                message: 'Enter the number of adjusted function points:',
                default: '500',
                validate: function (value) {
                    if (!Number.isNaN(parseFloat(value))) return true
                    return 'Please enter the valid number of adjusted function points'
                }
            },
            {
                name: 'estimationFunction',
                type: 'list',
                message: 'Choose a distance estimation function',
                choices: ['euclidean', 'manhattan'],
                default: 'euclidean'
            },
        ]
        return inquirer.prompt(questions)
    }
}
