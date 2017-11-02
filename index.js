#!/usr/bin/env node
const path = require('path');
const inquirer = require('inquirer');

const dir = process.argv[2]

if(! dir) {
    return console.error('No directory defined')
}

const createComponent = require('./createComponent')

inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'Component name'
    },
    {
        type: 'confirm',
        name: 'typescript',
        message: 'TypeScript?',
        default: false
    },
    {
        type: 'list',
        name: 'type',
        message: 'Type of component?',
        choices: ['Function', 'React.Component', 'React.PureComponent']
    },
    {
        type: 'confirm',
        name: 'cssModule',
        message: 'CSS module?',
        default: true
    },
    {
        type: 'confirm',
        name: 'story',
        message: 'Storybooks story?',
        default: true
    }
]).then(input => createComponent(path.join(process.cwd(), dir), input));
