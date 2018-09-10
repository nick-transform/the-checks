import React from 'react'

import Layout from '../Components/Layout'
import {Question} from '../Components/QuestionOption'
import DHSlider from '../Components/DHSlider'

export default function WorkStatusPage () {
    return (
        <Layout currentPage={20} numPages={30} nextPagePath="/question21">
            <div className="row">
                <div className="col-lg-12">
                    <Question question="Would you like to chnge anything about your current work status?"></Question>
                    <DHSlider leftLabel="No. I'm happy" rightLabel="Yes. I'd like a change" defaultValue={5} min={1} max={9} />
                </div>
            </div>
        </Layout>
    )
}
