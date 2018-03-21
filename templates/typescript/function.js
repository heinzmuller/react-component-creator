module.exports = ({
    name,
    stylesheet,
    stylesheetIsModule
}) => `import * as React from 'react'
${
    stylesheet
        ? `
${stylesheetIsModule ? 'const css = ' : ''}require('./${stylesheet}')
`
        : ''
}
const ${name}: React.SFC = props => (
    <div${stylesheetIsModule ? ' className={css.wrapper}' : ''}>
        <h1>${name}</h1>
    </div>
)

export default ${name}
`
