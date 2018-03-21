module.exports = ({
    name,
    type,
    stylesheet,
    stylesheetIsModule
}) => `import React from 'react'
import PropTypes from 'prop-types'
${
    stylesheet
        ? `
${stylesheetIsModule ? 'const css = ' : ''}require('./${stylesheet}')
`
        : ''
}
class ${name} extends ${type} {
    static propTypes = {
        children: PropTypes.element
    }

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
