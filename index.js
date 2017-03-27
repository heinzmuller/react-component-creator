#!/usr/bin/env node
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

const dir = process.argv[2]

if(! dir) {
    return console.error('No directory defined')
}

const templates = {
    component: {
        class: require('./templates/component/class'),
        function: require('./templates/component/function'),
        index: require('./templates/component/index')
    }
}

function component(name, type) {
    switch (type)
    {
        case 'React.Component':
        case 'React.PureComponent':
            return templates.component.class({ name, type })

        case 'Function':
        default:
            return templates.component.function({ name })
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
        choices: ['Function', 'React.Component', 'React.PureComponent']
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
    const componentDirectory = path.join(process.cwd(), dir, name)
    const filename = path.join(componentDirectory, `${name}.jsx`)

    if(fs.existsSync(componentDirectory)) {
        return console.error('Component already exists')
    }

    fs.mkdirSync(componentDirectory)

    fs.writeFileSync(
        filename,
        component(name, type)
    )

    fs.writeFileSync(
        path.join(componentDirectory, 'index.js'),
        templates.component.index({ name })
    )

    if(cssModule) {
        var data = fs.readFileSync(filename).toString().split("\n");
        data.splice(2, 0, `import css from './${name}.scss'\n`);
        var text = data.join("\n");

        fs.writeFileSync(filename, text)
        fs.writeFileSync(path.join(componentDirectory, `${name}.scss`), '')
    }
});
