import React from 'react'

import Layout from '../Components/Layout'
import {Question} from '../Components/QuestionOption'
import DHSlider from '../Components/DHSlider'

export default function MoneyPage () {
    return (
        <Layout currentPage={16} numPages={20} nextPagePath="/question17">
            <div className="row">
                <div className="col-lg-12">
                    <Question question="How do you manage your money data to day?"></Question>
                    <DHSlider leftLabel="I need help" rightLabel="I track what\'s coming in and going out" defaultValue={5} min={1} max={9} />
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <Question question="When it comes to planning and saving for the future..."></Question>
                    <DHSlider leftLabel="I'm trying but it's hard" rightLabel="I have clear financial goals" defaultValue={5} min={1} max={9} />
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <Question question="Do you feel well informed about your financial decisions?"></Question>
                    <DHSlider leftLabel="Not really" rightLabel="I know what I'm doing" defaultValue={5} min={1} max={9} />
                </div>
            </div>
        </Layout>
    )
}
