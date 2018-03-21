module.exports = ({ name }) =>
    `export { default } from './${name}'
export * from './${name}'
`
