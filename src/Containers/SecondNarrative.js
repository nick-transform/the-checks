import React from 'react';

import Layout from '../Components/Layout'
import DHNarrative from '../Components/DHNarrative'

const secondNarrative = [
    'It sounds like your health could benefit from a little more exercise.',
    'For your age group, 2.5 hours per week of moderate intensity physical activity - such as walking or cycling - is recommended.',
    'That\'s only 21 minutes per day!',
]

export default () => (
    <Layout currentPage={15} numPages={20} nextPagePath="/question16">
        <DHNarrative narrative={secondNarrative} />
    </Layout>
)