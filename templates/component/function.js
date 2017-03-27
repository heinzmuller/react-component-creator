module.exports = ({ name }) => `import React, { PropTypes } from 'react'

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
