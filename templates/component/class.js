module.exports = ({ name, type }) => `import React, { PropTypes } from 'react'

class ${name} extends ${type} {
    static propTypes = {
        children: PropTypes.element
    }

    render() {
        const {
            children
        } = this.props

        return (
            <div>
                <h1>${name}</h1>
                {children}
            </div>
        )
    }
}

export default ${name}
`
