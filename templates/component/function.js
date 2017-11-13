module.exports = ({ name, stylesheet, typescript }) => `import ${typescript ? "* as React" : "React"} from 'react'${typescript ? "" : `
import PropTypes from 'prop-types'`}
${stylesheet ? `
${stylesheet}
` : ""}
const ${name} = (props) => (
    <div>
        <h1>${name}</h1>
    </div>
)
${typescript ? "" : `
${name}.propTypes = {
    children: PropTypes.element
}
`}
export default ${name}
`
