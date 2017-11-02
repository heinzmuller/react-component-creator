module.exports = ({ name, typescript }) => typescript ?
`export { default } from './${name}'
export * from './${name}'`
:
`export default from './${name}.jsx'

export ${name} from './${name}.jsx'
`
