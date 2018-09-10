import React from 'react'

import Layout from '../Components/Layout'
import DHControlInput from '../Components/DHControlInput'
import {QuestionWithOption} from '../Components/QuestionOption'

export default function DailyActivitiesPage () {
    return (
        <Layout currentPage={15} numPages={20} nextPagePath="/narrative2">
            <QuestionWithOption
            question="Do you need help with daily activities?"
            option="PICK AS MANY AS YOU LIKE"
            >
            </QuestionWithOption>            
            <div className="row">
                <div className="col-lg-12">
                    <div className="narrow-content-wrapper">
                        <DHControlInput multiple name="fin" iconStyle="circle" icon="transport" label="Transport" />
                        <DHControlInput multiple name="fin" iconStyle="circle" icon="cooking" label="Cooking" />
                        <DHControlInput multiple name="fin" iconStyle="circle" icon="cleaning" label="Cleaning" />   
                    </div> 
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="narrow-content-wrapper">
                        <DHControlInput multiple name="fin" iconStyle="circle" icon="personal-care" label="Personal care" />
                        <DHControlInput multiple name="fin" iconStyle="circle" icon="mobility" label="Mobility" />
                        <DHControlInput multiple name="fin" iconStyle="circle" icon="shopping" label="Shopping" />
                    </div>                    
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="narrow-content-wrapper">
                        <DHControlInput multiple name="fin" iconStyle="circle" icon="gardening" label="Gardening" />
                        <DHControlInput multiple name="fin" iconStyle="circle" icon="other" label="Other" />
                        <DHControlInput multiple name="fin" iconStyle="circle" icon="not-available" label="None of these" />
                    </div>                    
                </div>
            </div>
        </Layout>
    )
}
