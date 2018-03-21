#!/usr/bin/env node
const path = require('path')
const inquirer = require('inquirer')

const dir = process.argv[2]

if (!dir) {
    return console.error('No directory defined')
}

const createComponent = require('./createComponent')

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Component name'
        },
        {
            type: 'list',
            name: 'ts',
            message: 'TypeScript?',
            choices: ['No', 'Yes']
        },
        {
            type: 'list',
            name: 'type',
            message: 'Type of component?',
            choices: ['React.Component', 'React.PureComponent', 'Function']
        },
        {
            type: 'list',
            name: 'stylesheet',
            message: 'Stylesheet?',
            choices: ['No', 'SCSS', 'SCSS Module', 'CSS', 'CSS Module']
        },
        {
            type: 'list',
            name: 'story',
            message: 'Storybooks story?',
            choices: ['No', 'Yes']
        }
    ])
    .then(input => createComponent(path.join(process.cwd(), dir), input))
