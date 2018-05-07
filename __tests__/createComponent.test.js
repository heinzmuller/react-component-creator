const createComponent = require('../createComponent')

function generateObject(name, typescript, type, stylesheet, story) {
    return {
        name,
        typescript,
        type,
        stylesheet,
        story
    }
}

const dir = './'

describe('createComponent', () => {
    test('Func', () => expect(createComponent(dir, generateObject('Func', false, 'Function', 'No', 'No'), false)).toMatchSnapshot())
    test('FuncCSS', () => expect(createComponent(dir, generateObject('FuncCSS', false, 'Function', 'CSS', 'No'), false)).toMatchSnapshot())
    test('FuncCSSModule', () => expect(createComponent(dir, generateObject('FuncCSSModule', false, 'Function', 'CSS Module', 'No'), false)).toMatchSnapshot())
    test('FuncSCSS', () => expect(createComponent(dir, generateObject('FuncSCSS', false, 'Function', 'SCSS', 'No'), false)).toMatchSnapshot())
    test('FuncSCSSModule', () => expect(createComponent(dir, generateObject('FuncSCSSModule', false, 'Function', 'SCSS Module', 'No'), false)).toMatchSnapshot())
    test('FuncTS', () => expect(createComponent(dir, generateObject('FuncTS', true, 'Function', 'No', 'No'), false)).toMatchSnapshot())
    test('FuncTSCSS', () => expect(createComponent(dir, generateObject('FuncTSCSS', true, 'Function', 'CSS', 'No'), false)).toMatchSnapshot())
    test('FuncTSCSSModule', () => expect(createComponent(dir, generateObject('FuncTSCSSModule', true, 'Function', 'CSS Module', 'No'), false)).toMatchSnapshot())
    test('FuncTSSCSS', () => expect(createComponent(dir, generateObject('FuncTSSCSS', true, 'Function', 'SCSS', 'No'), false)).toMatchSnapshot())
    test('FuncTSSCSSModule', () => expect(createComponent(dir, generateObject('FuncTSSCSSModule', true, 'Function', 'SCSS Module', 'No'), false)).toMatchSnapshot())

    test('Class', () => expect(createComponent(dir, generateObject('Class', false, 'React.Component', 'No', 'No'), false)).toMatchSnapshot())
    test('ClassStory', () => expect(createComponent(dir, generateObject('ClassStory', false, 'React.Component', 'No', 'Yes'), false)).toMatchSnapshot())
    test('ClassCSS', () => expect(createComponent(dir, generateObject('ClassCSS', false, 'React.Component', 'CSS', 'No'), false)).toMatchSnapshot())
    test('ClassCSSModule', () => expect(createComponent(dir, generateObject('ClassCSSModule', false, 'React.Component', 'CSS Module', 'No'), false)).toMatchSnapshot())
    test('ClassSCSS', () => expect(createComponent(dir, generateObject('ClassSCSS', false, 'React.Component', 'SCSS', 'No'), false)).toMatchSnapshot())
    test('ClassSCSSModule', () => expect(createComponent(dir, generateObject('ClassSCSSModule', false, 'React.Component', 'SCSS Module', 'No'), false)).toMatchSnapshot())
    test('ClassTS', () => expect(createComponent(dir, generateObject('ClassTS', true, 'React.Component', 'No', 'No'), false)).toMatchSnapshot())
    test('ClassTSStory', () => expect(createComponent(dir, generateObject('ClassTSStory', true, 'React.Component', 'No', 'Yes'), false)).toMatchSnapshot())
    test('ClassTSCSS', () => expect(createComponent(dir, generateObject('ClassTSCSS', true, 'React.Component', 'CSS', 'No'), false)).toMatchSnapshot())
    test('ClassTSCSSModule', () => expect(createComponent(dir, generateObject('ClassTSCSSModule', true, 'React.Component', 'CSS Module', 'No'), false)).toMatchSnapshot())
    test('ClassTSSCSS', () => expect(createComponent(dir, generateObject('ClassTSSCSS', true, 'React.Component', 'SCSS', 'No'), false)).toMatchSnapshot())
    test('ClassTSSCSSModule', () => expect(createComponent(dir, generateObject('ClassTSSCSSModule', true, 'React.Component', 'SCSS Module', 'No'), false)).toMatchSnapshot())
})
