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

function createComponent(
    dir,
    { name, ts, type, stylesheet, story },
    write = true
) {
    const output = {}

    const typescript = ts === 'Yes'
    const storybook = story === 'Yes'

    const templates = typescript ? TEMPLATES.typescript : TEMPLATES.javascript

    const componentDirectory = path.join(dir, name)
    const filename = path.join(
        componentDirectory,
        `${name}.${typescript ? 'tsx' : 'jsx'}`
    )

    if (fs.existsSync(componentDirectory) && write) {
        return console.error(name, 'Component already exists')
    }

    const hasStylesheet = stylesheet !== 'No'
    const stylesheetIsModule = stylesheet.indexOf('Module') >= 0
    const stylesheetExtension = stylesheet.indexOf('SCSS') >= 0 ? 'scss' : 'css'
    const stylesheetFilename = hasStylesheet
        ? `${name}${stylesheetIsModule ? '.module' : ''}.${stylesheetExtension}`
        : ''

    output['index'] = templates.index({ name })

    output['component'] = component(
        templates,
        name,
        type,
        stylesheetFilename,
        stylesheetIsModule
    )

    if (hasStylesheet) {
        output['stylesheet'] = stylesheetIsModule
            ? `.wrapper {
padding: 10px;
}`
            : ''
    }

    if (storybook) {
        output['story'] = templates.story({ name })
    }

    if (write) {
        fs.mkdirSync(componentDirectory)

        if (output['index']) {
            fs.writeFileSync(
                path.join(
                    componentDirectory,
                    `index.${typescript ? 'ts' : 'js'}`
                ),
                output['index']
            )
        }

        if (output['component']) {
            fs.writeFileSync(filename, output['component'])
        }

        if (output['stylesheet']) {
            fs.writeFileSync(
                path.join(componentDirectory, stylesheetFilename),
                output['stylesheet']
            )
        }

        if (output['story']) {
            fs.writeFileSync(
                path.join(
                    componentDirectory,
                    `${name}.story.${typescript ? 'tsx' : 'jsx'}`
                ),
                output['story']
            )
        }
    } else {
        return output
    }
}

module.exports = createComponent
