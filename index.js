#!/usr/bin/env node

var inquirer = require('inquirer');
var fs = require('fs');
var path = require('path');

function mkdirp(target) {
    target.split('/').forEach((dir, index, splits) => {
        const parent = splits.slice(0, index).join('/');
        const dirPath = path.resolve(parent, dir);
        if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath);
        }
    });
}

const dir = process.argv[2]

if(! dir) {
    return console.error('No directory defined')
}

function component(type, name, cssModule) {
    switch (type)
    {
        case 'React.Component':
        case 'React.PureComponent':
            return (
`import React, { PropTypes } from 'react'
${cssModule ? `
import css from './${name}.scss'
` : ''}
class ${name} extends ${type} {
    static propTypes = {
        children: PropTypes.element
    }

    render() {
        const {
            children
        } = this.props

        return (
            <div>
                <h1>${name}</h1>
                {children}
            </div>
        )
    }
)

export default ${name}
`
            )

        case 'Stateless':
        default:
            return (
`import React, { PropTypes } from 'react'
${cssModule ? `
import css from './${name}.scss'
` : ''}
const ${name} = ({
    children
}) => (
    <div>
        <h1>${name}</h1>
        {children}
    </div>
)

${name}.propTypes = {
    children: PropTypes.element
}

export default ${name}
`
            )
    }
}

inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'Component name'
    },
    {
        type: 'list',
        name: 'type',
        message: 'Type of component?',
        choices: ['Stateless', 'React.Component', 'React.PureComponent']
    },
    {
        type: 'confirm',
        name: 'cssModule',
        message: 'CSS module?',
        default: true
    }
]).then(function ({
    name,
    type,
    cssModule
}) {
    const componentDirectory = path.join(__dirname, dir, name)
    console.log('componentDirectory', componentDirectory)
    const filename = path.join(componentDirectory, `${name}.jsx`)
    console.log('filename', filename)

    if(fs.existsSync(componentDirectory)) {
        return console.error('Component already exists')
    }

    mkdirp(componentDirectory)
    fs.writeFileSync(filename, component(type, name, cssModule))
    fs.writeFileSync(path.join(componentDirectory, 'index.js'), (
`export default from './${name}.jsx'

export ${name} from './${name}.jsx'
`
    ))
    if(cssModule) {
        fs.writeFileSync(path.join(componentDirectory, `${name}.scss`), '')
    }
});
