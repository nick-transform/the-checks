import React from 'react';

import Layout from '../Components/Layout'
import {QuestionWithOption} from '../Components/QuestionOption'
import DHControlInputList from '../Components/DHControlInputList'

export default function BudgetPage () {
    const optionArray = [
    {
        label: 'Where to find reliable financial information',
        name: 'name',
        value: 'Where to find reliable financial information'
    },
        {
        label: 'Using my home as retirement income',
        name: 'name',
        value: 'Using my home as retirement income'
    },
    {
        label: "Growing my retirement savings",
        name: 'name',
        value: "Growing my retirement savings"
    },
        {
        label: 'How to keep working',
        name: 'name',
        value: 'How to keep working'
    },
    {
        label: 'My pension entitlements',
        name: 'name',
        value: 'My pension entitlements'
    },
    {
        label: "Estate planning/Organising Will",
        name: 'name',
        value: "Estate planning/Organising Will"
    },
    {
        label: "Aged care",
        name: 'name',
        value: "Aged care"
    },
    {
        label: "None of these",
        name: 'name',
        value: "None of these"
    }];

    return (
        <Layout currentPage={18} numPages={20} nextPagePath="/question19">
            <QuestionWithOption
            question="What information would help you prepare for the future?"
            option=""
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