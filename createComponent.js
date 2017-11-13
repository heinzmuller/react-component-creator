const path = require('path');
const fs = require('fs');

const templates = {
    component: {
        class: require('./templates/component/class'),
        function: require('./templates/component/function'),
        index: require('./templates/component/index'),
        story: require('./templates/component/story'),
    }
}

function component(name, type, stylesheet, typescript) {
    switch (type)
    {
        case 'React.Component':
        case 'React.PureComponent':
            return templates.component.class({ name, type, stylesheet, typescript })

        case 'Function':
        default:
            return templates.component.function({ name, stylesheet, typescript })
    }
}

function createComponent(
    dir,
    {
        name,
        typescript,
        type,
        stylesheet,
        story,
    }
) {
    const componentDirectory = path.join(dir, name)
    const filename = path.join(componentDirectory, `${name}.${typescript ? "tsx" : "jsx"}`)

    const hasStylesheet = stylesheet !== 'No'
    const stylesheetIsModule = stylesheet.indexOf('Module') >= 0
    const stylesheetExtension = stylesheet.indexOf('SCSS') >= 0 ? 'scss' : 'css'
    const stylesheetFilename = `${name}${stylesheetIsModule ? '.module' : ''}.${stylesheetExtension}`

    if(fs.existsSync(componentDirectory)) {
        return console.error(name, 'Component already exists')
    }

    fs.mkdirSync(componentDirectory)

    let stylesheetImport

    if(hasStylesheet) {
        stylesheetImport = `import ${stylesheetIsModule ? 'css from ' : ''}'./${stylesheetFilename}'`
    }

    fs.writeFileSync(
        filename,
        component(name, type, stylesheetImport, typescript)
    )

    fs.writeFileSync(
        path.join(componentDirectory, `index.${typescript ? "ts" : "js"}`),
        templates.component.index({ name, typescript })
    )

    if(hasStylesheet) {
        fs.writeFileSync(path.join(componentDirectory, stylesheetFilename), '')
    }

    if(story) {
        fs.writeFileSync(
            path.join(componentDirectory, `${name}.story.${typescript ? "tsx" : "jsx"}`),
            templates.component.story({ name, typescript })
        )
    }
}

module.exports = createComponent
