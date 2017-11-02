const createComponent = require('./createComponent')
const path = require('path')

const dir = path.join(process.cwd(), '/test')

function generateObject(
    name,
    typescript,
    type,
    cssModule,
    story,
) {
    return {
        name,
        typescript,
        type,
        cssModule,
        story,
    }
}

createComponent(dir, generateObject("Func", false, "Function", false, false))
createComponent(dir, generateObject("FuncCSS", false, "Function", true, false))
createComponent(dir, generateObject("FuncTS", true, "Function", false, false))
createComponent(dir, generateObject("FuncTSCSS", true, "Function", true, false))

createComponent(dir, generateObject("Class", false, "React.Component", false, false))
createComponent(dir, generateObject("ClassStory", false, "React.Component", false, true))
createComponent(dir, generateObject("ClassCSS", false, "React.Component", true, false))
createComponent(dir, generateObject("ClassTS", true, "React.Component", false, false))
createComponent(dir, generateObject("ClassTSStory", true, "React.Component", false, true))
createComponent(dir, generateObject("ClassTSCSS", true, "React.Component", true, false))
