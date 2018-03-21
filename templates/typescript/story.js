module.exports = ({ name }) => `import * as React' from 'react'
import { storiesOf } from '@storybook/react'

import ${name} from './${name}'

const stories = storiesOf('${name}', module)

stories.add('Default', () => (
    <${name} />
))
`
