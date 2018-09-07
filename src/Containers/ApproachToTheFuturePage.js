import React from 'react';

import Layout from '../Components/Layout'
import {QuestionWithOption} from '../Components/QuestionOption'
import DHControlInputList from '../Components/DHControlInputList'

export default function ApproachToTheFuture () {
    const optionArray = [
    {
        label: 'I like to plan',
        name: 'name',
        value: 'I like to plan'
    },
        {
        label: 'I sort of have a plan',
        name: 'name',
        value: 'I sort of have a plan'
    },
    {
        label: "I don't have time to think about it",
        name: 'name',
        value: "I don't have time to think about it"
    },
        {
        label: 'I would like to have a plan',
        name: 'name',
        value: 'Every day'
    },
    {
        label: 'I live for today',
        name: 'name',
        value: 'I live for today'
    },
        {
        label: "I don't have a plan",
        name: 'name',
        value: "I don't have a plan"
    }];

    return (
        <Layout currentPage={3} numPages={20} nextPagePath="/question4">
            <QuestionWithOption
            question="What is your approach to the future?"
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