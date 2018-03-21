module.exports = ({
    name,
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
const ${name} = (props) => (
    <div${stylesheetIsModule ? ' className={css.wrapper}' : ''}>
        <h1>${name}</h1>
    </div>
)

${name}.propTypes = {
    children: PropTypes.element
}

export default ${name}
`
