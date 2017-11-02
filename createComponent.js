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

function component(name, type, cssModule, typescript) {
    switch (type)
    {
        case 'React.Component':
        case 'React.PureComponent':
            return templates.component.class({ name, type, cssModule, typescript })

        case 'Function':
        default:
            return templates.component.function({ name, cssModule, typescript })
    }
}

function createComponent(
    dir,
    name,
    typescript,
    type,
    cssModule,
    story
) {
    const componentDirectory = path.join(dir, name)
    const filename = path.join(componentDirectory, `${name}.${typescript ? "tsx" : "jsx"}`)

    if(fs.existsSync(componentDirectory)) {
        return console.error('Component already exists')
    }

    fs.mkdirSync(componentDirectory)

    fs.writeFileSync(
        filename,
        component(name, type, cssModule, typescript)
    )

    fs.writeFileSync(
        path.join(componentDirectory, `index.${typescript ? "ts" : "js"}`),
        templates.component.index({ name, typescript })
    )

    if(cssModule) {
        fs.writeFileSync(path.join(componentDirectory, `${name}.module.scss`), '')
    }

    if(story) {
        fs.writeFileSync(
            path.join(componentDirectory, `${name}.story.${typescript ? "tsx" : "jsx"}`),
            templates.component.story({ name, typescript })
        )
    }
}

module.exports = createComponent
