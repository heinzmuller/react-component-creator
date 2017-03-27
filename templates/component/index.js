module.exports = ({ name }) => `export default from './${name}.jsx'

export ${name} from './${name}.jsx'
`
