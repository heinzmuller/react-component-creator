#!/usr/bin/env node
const path = require('path')
const inquirer = require('inquirer')
const fs = require('fs')

const dir = process.argv[2]

if (!dir) {
    return console.error('No directory defined')
}

const packageDir = path.resolve(process.env.PWD, 'package.json')

let hasStorybook = false
let hasTypeScript = false

if (fs.existsSync(packageDir)) {
    const pkg = require(packageDir)

    if (pkg.dependencies) {
        hasStorybook = pkg.dependencies['@storybook/react']
            ? true
            : hasStorybook
        hasTypeScript = pkg.dependencies['typescript'] ? true : hasTypeScript
    }

    if (pkg.devDependencies) {
        hasStorybook = pkg.devDependencies['@storybook/react']
            ? true
            : hasStorybook
        hasTypeScript = pkg.devDependencies['typescript'] ? true : hasTypeScript
    }
}

const createComponent = require('./createComponent')

const prompt = [
    {
        type: 'input',
        name: 'name',
        message: 'Component name'
    },
    {
        type: 'list',
        name: 'ts',
        message: 'TypeScript?',
        choices: ['No', 'Yes'],
        default: hasTypeScript ? 'Yes' : 'No'
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
        choices: ['No', 'Yes'],
        default: hasStorybook ? 'Yes' : 'No'
    }
]

inquirer
    .prompt(prompt)
    .then(input => createComponent(path.join(process.cwd(), dir), input))
