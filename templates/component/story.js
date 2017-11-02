module.exports = ({ name, typescript }) => `import ${typescript ? "* as React" : "React"} from 'react'
import { storiesOf } from '@storybook/react'
import ${name} from './${name}${typescript ? "" : ".jsx"}'

const stories = storiesOf('${name}', module)

stories.add('Default', () => (
    <${name} />
))
`
