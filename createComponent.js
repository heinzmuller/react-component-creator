const path = require('path')
const fs = require('fs')

const TEMPLATES = {
    javascript: {
        class: require('./templates/javascript/class'),
        function: require('./templates/javascript/function'),
        index: require('./templates/javascript/index'),
        story: require('./templates/javascript/story')
    },
    typescript: {
        class: require('./templates/typescript/class'),
        function: require('./templates/typescript/function'),
        index: require('./templates/typescript/index'),
        story: require('./templates/typescript/story')
    }
}

function component(templates, name, type, stylesheet, stylesheetIsModule) {
    switch (type) {
        case 'React.Component':
        case 'React.PureComponent':
            return templates.class({
                name,
                type,
                stylesheet,
                stylesheetIsModule
            })

        case 'Function':
        default:
            return templates.function({
                name,
                stylesheet,
                stylesheetIsModule
            })
    }
}

function createComponent(dir, { name, ts, type, stylesheet, story }) {
    const typescript = ts === 'Yes'
    const storybook = story === 'Yes'

    const templates = typescript ? TEMPLATES.typescript : TEMPLATES.javascript

    const componentDirectory = path.join(dir, name)
    const filename = path.join(
        componentDirectory,
        `${name}.${typescript ? 'tsx' : 'jsx'}`
    )

    const hasStylesheet = stylesheet !== 'No'
    const stylesheetIsModule = stylesheet.indexOf('Module') >= 0
    const stylesheetExtension = stylesheet.indexOf('SCSS') >= 0 ? 'scss' : 'css'
    const stylesheetFilename = hasStylesheet
        ? `${name}${stylesheetIsModule ? '.module' : ''}.${stylesheetExtension}`
        : ''

    if (fs.existsSync(componentDirectory)) {
        return console.error(name, 'Component already exists')
    }

    fs.mkdirSync(componentDirectory)

    fs.writeFileSync(
        filename,
        component(templates, name, type, stylesheetFilename, stylesheetIsModule)
    )

    fs.writeFileSync(
        path.join(componentDirectory, `index.${typescript ? 'ts' : 'js'}`),
        templates.index({ name })
    )

    if (hasStylesheet) {
        fs.writeFileSync(
            path.join(componentDirectory, stylesheetFilename),
            stylesheetIsModule
                ? `.wrapper {
    padding: 10px;
}`
                : ''
        )
    }

    if (storybook) {
        fs.writeFileSync(
            path.join(
                componentDirectory,
                `${name}.story.${typescript ? 'tsx' : 'jsx'}`
            ),
            templates.story({ name })
        )
    }
}

module.exports = createComponent
