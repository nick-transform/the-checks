import React from 'react';

import Layout from '../Components/Layout'
import {QuestionWithOption} from '../Components/QuestionOption'
import DHControlInputList from '../Components/DHControlInputList'

export default function SocialActivePage () {
    const optionArray = [
    {
        label: 'No',
        name: 'name',
        value: 'No'
    },
        {
        label: 'Transport',
        name: 'name',
        value: 'Transport'
    },
    {
        label: "Carer responsibilities",
        name: 'name',
        value: "Carer responsibilities"
    },
    {
        label: 'I\'m not good on a computer/smartphone',
        name: 'name',
        value: 'I\'m not good on a computer/smartphone'
    },
    {
        label: 'Money',
        name: 'name',
        value: 'Money'
    },
    {
        label: "I don't have enough spare time",
        name: 'name',
        value: "I don't have enough spare time"
    },
    {
        label: "Health issues",
        name: 'name',
        value: "Health issues"
    },
    {
        label: "Other",
        name: 'name',
        value: "Other"
    }];

    return (
        <Layout currentPage={23} numPages={30} nextPagePath="/narrative4">
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