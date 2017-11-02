const createComponent = require('./createComponent')
const path = require('path')

const dir = path.join(process.cwd(), '/test')

createComponent(dir, "Func", false, "Function", false, false)
createComponent(dir, "FuncCSS", false, "Function", true, false)
createComponent(dir, "FuncTS", true, "Function", false, false)
createComponent(dir, "FuncTSCSS", true, "Function", true, false)

createComponent(dir, "Class", false, "React.Component", false, false)
createComponent(dir, "ClassStory", false, "React.Component", false, true)
createComponent(dir, "ClassCSS", false, "React.Component", true, false)
createComponent(dir, "ClassTS", true, "React.Component", false, false)
createComponent(dir, "ClassTSStory", true, "React.Component", false, true)
createComponent(dir, "ClassTSCSS", true, "React.Component", true, false)
