import React from 'react'

import Layout from '../Components/Layout'
import {QuestionWithOption} from '../Components/QuestionOption'
import DHQuantitySelector from '../Components/DHQuantitySelector'

export default function DairyIntakePage () {
    return (
        <Layout currentPage={10} numPages={20} nextPagePath="/question11">
            <QuestionWithOption
            question="How many serves of milk, yogurt or cheese do you have each day?"
            option="Serve = One cup of milk (any kind), 2 slices cheese, small tub of yogurt"
            >
            </QuestionWithOption>            
            <div className="row">
                <div className="col-lg-12">
                    <div className="wide-content-wrapper">
                        <DHQuantitySelector icon="milk" iconLabel="Milk" unit="" />
                        <DHQuantitySelector icon="cheese" iconLabel="Cheese" unit="" />
                        <DHQuantitySelector icon="yogurt" iconLabel="Yogurt" unit="" />
                    </div> 
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="wide-content-wrapper">
                        <DHQuantitySelector icon="milk-alternatives" iconLabel="Dairy alternatives such as almond milk, soy milk or soy yoghurt (with added calcium)" unit="" />
                    </div> 
                </div>
            </div>
        </Layout>
    )
}
