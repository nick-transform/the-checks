import React from 'react';

import Layout from '../Components/Layout'
import {QuestionWithOption} from '../Components/QuestionOption'
import DHControlInputList from '../Components/DHControlInputList'

export default function DoYouDrinkPage () {
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
            label: 'Once a fortnight',
            name: 'name',
            value: 'Once a fortnight'
        },
        {
            label: 'Monthly',
            name: 'name',
            value: 'Monthly'
        },
        {
            label: "Occasionally",
            name: 'name',
            value: "Occasionally"
        },
        {
            label: "Never",
            name: 'name',
            value: "Never"
    }];
    return (
        <Layout currentPage={11} numPages={20} nextPagePath="/question12">
            <QuestionWithOption
            question="Do you drink alcohol?"
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