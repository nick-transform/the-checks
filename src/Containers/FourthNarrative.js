import React from 'react';

import Layout from '../Components/Layout'
import DHNarrative from '../Components/DHNarrative'

const fourthNarrative = [
    'Not getting out as much as you\'d like? Evidence suggests the key to enjoying life after you stop work is to have five hours per week of purposeful activities.',
    'If you’re not sure what to do with yourself, use the internet to search for activities in your area you think you’d enjoy. Maybe try something you’ve always wanted to but never had the time for – until now.'
]

export default () => (
    <Layout currentPage={23} numPages={30} nextPagePath="/question24">
        <DHNarrative narrative={fourthNarrative} />
    </Layout>
)