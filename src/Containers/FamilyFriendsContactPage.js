import React from 'react'

import Layout from '../Components/Layout'
import {QuestionWithOption} from '../Components/QuestionOption'
import DHSlider from '../Components/DHSlider'

export default function FamilyFriendsContactPage () {
    return (
        <Layout currentPage={22} numPages={30} nextPagePath="/question23">
            <QuestionWithOption
            question="How do you feel about your social life at the moment?"
            option="Move the sliders to let us know"
            >
            </QuestionWithOption>            
            <div className="row">
                <div className="col-lg-12">
                    <DHSlider leftLabel="I'd like to be more socially active" rightLabel="I'm socially active" defaultValue={5} min={1} max={9} />
                    <DHSlider leftLabel="Lonely" rightLabel="Not lonely" defaultValue={5} min={1} max={9} />
                    <DHSlider leftLabel="I have family relationship issues" rightLabel="My family relationships are great" defaultValue={5} min={1} max={9} />
                    <DHSlider leftLabel="I'd like to be more active in my community" rightLabel="I'm very active in my community" defaultValue={5} min={1} max={9} />
                </div>
            </div>
        </Layout>
    )
}
