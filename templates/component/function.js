module.exports = ({ name }) => `import React from 'react'
import PropTypes from 'prop-types'

const ${name} = ({
    children
}) => (
    <div>
        <h1>${name}</h1>
        {children}
    </div>
)

${name}.propTypes = {
    children: PropTypes.element
}

export default ${name}
`
