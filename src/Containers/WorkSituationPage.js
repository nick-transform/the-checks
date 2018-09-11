import React from 'react';

import Layout from '../Components/Layout'
import {QuestionWithOption} from '../Components/QuestionOption'
import DHControlInputList from '../Components/DHControlInputList'

export default function WorkSituationPage () {
    const optionArray = [
    {
        label: 'Change my career',
        name: 'name',
        value: 'Change my career'
    },
        {
        label: 'Reskill or retrain',
        name: 'name',
        value: 'Reskill or retrain'
    },
    {
        label: "Discuss changing my work hours/conditions",
        name: 'name',
        value: "Discuss changing my work hours/conditions"
    },
        {
        label: 'Start my own business',
        name: 'name',
        value: 'Start my own business'
    },
    {
        label: 'Volunteer',
        name: 'name',
        value: 'Volunteer'
    },
    {
        label: "Learn something new and interesting",
        name: 'name',
        value: "Learn something new and interesting"
    },
    {
        label: "I want to do someting but I'm not sure what",
        name: 'name',
        value: "I want to do someting but I'm not sure what"
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
        label: "None of these",
        name: 'name',
        value: "None of these"
    }];

    return (
        <Layout currentPage={21} numPages={30} nextPagePath="/narrative3">
            <QuestionWithOption
            question="In the future, would you like to do any of the following?"
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