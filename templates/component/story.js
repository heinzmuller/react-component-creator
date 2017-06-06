module.exports = ({ name }) => `import React from 'react'
import { storiesOf } from '@storybook/react'
import ${name} from './${name}.jsx'

const stories = storiesOf('${name}', module)

stories.add('Default', () => (
    <${name} />
))
`
