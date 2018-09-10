import React from 'react';

import Layout from '../Components/Layout'
import {QuestionWithOption} from '../Components/QuestionOption'
import DHControlInputList from '../Components/DHControlInputList'

export default function FastFoodPage () {
    const optionArray = [
    {
        label: 'Every day',
        name: 'name',
        value: 'Every day'
    },
        {
        label: '2-4 days per week',
        name: 'name',
        value: '2-4 days per week'
    },
    {
        label: "Once a week",
        name: 'name',
        value: "Once a week"
    },
        {
        label: 'Once a month',
        name: 'name',
        value: 'Once a month'
    },
    {
        label: 'Ocassionally',
        name: 'name',
        value: 'Ocassionally'
    },
        {
        label: "Never",
        name: 'name',
        value: "Never"
    }];

    return (
        <Layout currentPage={8} numPages={20} nextPagePath="/question9">
            <QuestionWithOption
            question="How often do you eat fast foods such as burgers, deep fried foods, and pizza?"
            option=""
            >
            </QuestionWithOption>            
            <div className="row">
                <div className="col-lg-12">
                    <DHControlInputList options={optionArray} type="radiobutton" />
                </div>
            </div>
        </Layout>
    )
}