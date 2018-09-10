import React from 'react';

import Layout from '../Components/Layout'
import {QuestionWithOption} from '../Components/QuestionOption'
import DHControlInputList from '../Components/DHControlInputList'

export default function WorkArrangementPage () {
    const optionArray = [
    {
        label: 'Full time',
        name: 'name',
        value: 'Full time'
    },
        {
        label: 'Part time',
        name: 'name',
        value: 'Part time'
    },
    {
        label: "Casual",
        name: 'name',
        value: "Casual"
    },
        {
        label: 'Looking for work',
        name: 'name',
        value: 'Looking for work'
    },
    {
        label: 'Unemployed',
        name: 'name',
        value: 'Unemployed'
    },
    {
        label: "Considering retirement",
        name: 'name',
        value: "Considering retirement"
    },
    {
        label: "Semi-retired",
        name: 'name',
        value: "Semi-retired"
    },
    {
        label: "Retired",
        name: 'name',
        value: "Retired"
    },
    {
        label: "Unable to work due to illness or disability",
        name: 'name',
        value: "Unable to work due to illness or disability"
    },
    {
        label: "I\'ve been retrenched or made redundant",
        name: 'name',
        value: "I\'ve been retrenched or made redundant"
    },
    {
        label: "Unpaid work such as parent, carer or volunteer",
        name: 'name',
        value: "Unpaid work such as parent, carer or volunteer"
    }];

    return (
        <Layout currentPage={19} numPages={20} nextPagePath="/question20">
            <QuestionWithOption
            question="What are your current work arrangements?"
            option="PICK AS MANY AS YOU LIKE"
            >
            </QuestionWithOption>            
            <div className="row">
                <div className="col-lg-12">
                    <div className="narrow-content-wrapper">
                        <DHControlInputList options={optionArray} type="checkbox" />
                    </div>
                </div>
            </div>
        </Layout>
    )
}