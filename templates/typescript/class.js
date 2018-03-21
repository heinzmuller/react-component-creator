module.exports = ({
    name,
    type,
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
class ${name} extends ${type} {
    render() {
        return (
            <div${stylesheetIsModule ? ' className={css.wrapper}' : ''}>
                <h1>${name}</h1>
            </div>
        )
    }
}

export default ${name}
`
