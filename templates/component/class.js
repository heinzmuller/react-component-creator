module.exports = ({ name, type, cssModule, typescript }) => `import ${typescript ? "* as React" : "React"} from 'react'${typescript ? "" : `
import PropTypes from 'prop-types'`}
${cssModule ? `
import ${typescript ? "* as css" : "css"} from './${name}.module.scss'
` : ""}
class ${name} extends ${type} {${typescript?"": `
    static propTypes = {
        children: PropTypes.element
    }
`}
    render() {
        return (
            <div>
                <h1>${name}</h1>
            </div>
        )
    }
}

export default ${name}
`
