import React from 'react'

import Layout from '../Components/Layout'
import {QuestionWithOption} from '../Components/QuestionOption'
import DHSmileySelector from '../Components/DHSmileySelector'

export default function HowConfidentYouFeelPage () {
    const userName = "Lee";

    const question = "Ok " + userName + ", let’s see how confident you’re feeling about…";
    return (
        <Layout currentPage={1} numPages={20} nextPagePath="/question2">
            <QuestionWithOption
            question={question}
            option=""
            >
            </QuestionWithOption>            
            <div className="row">
                <div className="col-lg-12">
                    <DHSmileySelector name="money" question="Your health" />
                    <DHSmileySelector name="health" question="Your money" />
                    <DHSmileySelector name="work" question="Your work" />
                    <DHSmileySelector name="social" question="Your social life" />
                </div>
            </div>
        </Layout>
    )
}
