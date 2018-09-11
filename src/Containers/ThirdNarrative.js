import React from 'react';

import Layout from '../Components/Layout'
import DHNarrative from '../Components/DHNarrative'

const thirdNarrative = [
    'You\'ve said you\'d like to find some part time work. Have you thought about upskilling or retraining?',
    'Learning something new can help open doors to job opportunities. It’s also a positive step that can help you feel more confident about the future.',
]

export default () => (
    <Layout currentPage={21} numPages={30} nextPagePath="/question22">
        <DHNarrative narrative={thirdNarrative} />
    </Layout>
)