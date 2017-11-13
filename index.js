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
        choices: ['React.Component', 'React.PureComponent', 'Function']
    },
    {
        type: 'list',
        name: 'stylesheet',
        message: 'Stylesheet?',
        choices: ['No', 'CSS', 'CSS Module', 'SCSS', 'SCSS Module']
    },
    {
        type: 'confirm',
        name: 'story',
        message: 'Storybooks story?',
        default: false
    }
]).then(input => createComponent(path.join(process.cwd(), dir), input));
