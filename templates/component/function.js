module.exports = ({ name, cssModule, typescript }) => `import ${typescript ? "* as React" : "React"} from 'react'${typescript ? "" : `
import PropTypes from 'prop-types'`}
${cssModule ? `
import ${typescript ? "* as css" : "css"} from './${name}.module.scss'
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
