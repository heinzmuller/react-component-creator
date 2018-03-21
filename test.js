const createComponent = require('./createComponent')
const fs = require('fs')
const path = require('path')

const dir = path.join(process.cwd(), '/test')

function generateObject(name, typescript, type, stylesheet, story) {
    return {
        name,
        typescript,
        type,
        stylesheet,
        story
    }
}

try {
    fs.mkdirSync(dir)
} catch (exception) {
    //
}

createComponent(dir, generateObject('Func', false, 'Function', 'No', 'No'))
createComponent(dir, generateObject('FuncCSS', false, 'Function', 'CSS', 'No'))
createComponent(
    dir,
    generateObject('FuncCSSModule', false, 'Function', 'CSS Module', 'No')
)
createComponent(
    dir,
    generateObject('FuncSCSS', false, 'Function', 'SCSS', 'No')
)
createComponent(
    dir,
    generateObject('FuncSCSSModule', false, 'Function', 'SCSS Module', 'No')
)
createComponent(dir, generateObject('FuncTS', true, 'Function', 'No', 'No'))
createComponent(dir, generateObject('FuncTSCSS', true, 'Function', 'CSS', 'No'))
createComponent(
    dir,
    generateObject('FuncTSCSSModule', true, 'Function', 'CSS Module', 'No')
)
createComponent(
    dir,
    generateObject('FuncTSSCSS', true, 'Function', 'SCSS', 'No')
)
createComponent(
    dir,
    generateObject('FuncTSSCSSModule', true, 'Function', 'SCSS Module', 'No')
)

createComponent(
    dir,
    generateObject('Class', false, 'React.Component', 'No', 'No')
)
createComponent(
    dir,
    generateObject('ClassStory', false, 'React.Component', 'No', 'Yes')
)
createComponent(
    dir,
    generateObject('ClassCSS', false, 'React.Component', 'CSS', 'No')
)
createComponent(
    dir,
    generateObject(
        'ClassCSSModule',
        false,
        'React.Component',
        'CSS Module',
        'No'
    )
)
createComponent(
    dir,
    generateObject('ClassSCSS', false, 'React.Component', 'SCSS', 'No')
)
createComponent(
    dir,
    generateObject(
        'ClassSCSSModule',
        false,
        'React.Component',
        'SCSS Module',
        'No'
    )
)
createComponent(
    dir,
    generateObject('ClassTS', true, 'React.Component', 'No', 'No')
)
createComponent(
    dir,
    generateObject('ClassTSStory', true, 'React.Component', 'No', 'Yes')
)
createComponent(
    dir,
    generateObject('ClassTSCSS', true, 'React.Component', 'CSS', 'No')
)
createComponent(
    dir,
    generateObject(
        'ClassTSCSSModule',
        true,
        'React.Component',
        'CSS Module',
        'No'
    )
)
createComponent(
    dir,
    generateObject('ClassTSSCSS', true, 'React.Component', 'SCSS', 'No')
)
createComponent(
    dir,
    generateObject(
        'ClassTSSCSSModule',
        true,
        'React.Component',
        'SCSS Module',
        'No'
    )
)
