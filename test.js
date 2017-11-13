const createComponent = require('./createComponent')
const fs = require('fs')
const path = require('path')

const dir = path.join(process.cwd(), '/test')

function generateObject(
    name,
    typescript,
    type,
    stylesheet,
    story,
) {
    return {
        name,
        typescript,
        type,
        stylesheet,
        story,
    }
}

try {
    fs.mkdirSync(dir)
} catch(exception) {
    //
}

createComponent(dir, generateObject("Func", false, "Function", "No", false))
createComponent(dir, generateObject("FuncCSS", false, "Function", "CSS", false))
createComponent(dir, generateObject("FuncCSSModule", false, "Function", "CSS Module", false))
createComponent(dir, generateObject("FuncSCSS", false, "Function", "SCSS", false))
createComponent(dir, generateObject("FuncSCSSModule", false, "Function", "SCSS Module", false))
createComponent(dir, generateObject("FuncTS", true, "Function", "No", false))
createComponent(dir, generateObject("FuncTSCSS", true, "Function", "CSS", false))
createComponent(dir, generateObject("FuncTSCSSModule", true, "Function", "CSS Module", false))
createComponent(dir, generateObject("FuncTSSCSS", true, "Function", "SCSS", false))
createComponent(dir, generateObject("FuncTSSCSSModule", true, "Function", "SCSS Module", false))

createComponent(dir, generateObject("Class", false, "React.Component", "No", false))
createComponent(dir, generateObject("ClassStory", false, "React.Component", "No", true))
createComponent(dir, generateObject("ClassCSS", false, "React.Component", "CSS", false))
createComponent(dir, generateObject("ClassCSSModule", false, "React.Component", "CSS Module", false))
createComponent(dir, generateObject("ClassSCSS", false, "React.Component", "SCSS", false))
createComponent(dir, generateObject("ClassSCSSModule", false, "React.Component", "SCSS Module", false))
createComponent(dir, generateObject("ClassTS", true, "React.Component", "No", false))
createComponent(dir, generateObject("ClassTSStory", true, "React.Component", "No", true))
createComponent(dir, generateObject("ClassTSCSS", true, "React.Component", "CSS", false))
createComponent(dir, generateObject("ClassTSCSSModule", true, "React.Component", "CSS Module", false))
createComponent(dir, generateObject("ClassTSSCSS", true, "React.Component", "SCSS", false))
createComponent(dir, generateObject("ClassTSSCSSModule", true, "React.Component", "SCSS Module", false))
