module.exports = ({ name, type, stylesheet, typescript }) => `import ${typescript ? "* as React" : "React"} from 'react'${typescript ? "" : `
import PropTypes from 'prop-types'`}
${stylesheet ? `
${stylesheet}
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
