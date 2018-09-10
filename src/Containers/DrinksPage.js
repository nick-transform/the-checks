import React from 'react'

import Layout from '../Components/Layout'
import {QuestionWithOption} from '../Components/QuestionOption'
import DHQuantitySelector from '../Components/DHQuantitySelector'

export default function DrinksPage () {
    return (
        <Layout currentPage={12} numPages={20} nextPagePath="/question13">
            <QuestionWithOption
            question="On the days you drink, how much do you have?"
            option=""
            >
            </QuestionWithOption>            
            <div className="row">
                <div className="col-lg-12">
                    <div className="narrow-content-wrapper">
                        <DHQuantitySelector icon="wine" iconLabel="Wine" unit="" />
                        <DHQuantitySelector icon="beer" iconLabel="Beer" unit="" />
                        <DHQuantitySelector icon="spirits" iconLabel="Spirits" unit="" />
                    </div> 
                </div>
            </div>
        </Layout>
    )
}
