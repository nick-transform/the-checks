import React from 'react';

import Layout from '../Components/Layout'
import DHNarrative from '../Components/DHNarrative'

const firstNarrative = [
    'It sounds like you\'re doing okay.',
    'When you\'ve finished the questions, we\'ll show you some resources that can help you make improvements in those areas that could be better.',
    'It\'s never too late. And taking small steps can make a big difference.',
]

export default () => (
    <Layout currentPage={4} numPages={20} nextPagePath="/question5">
        <DHNarrative narrative={firstNarrative} />
    </Layout>
)