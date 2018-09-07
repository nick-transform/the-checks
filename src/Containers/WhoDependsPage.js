import React from 'react'

import Layout from '../Components/Layout'
import DHControlInput from '../Components/DHControlInput'
import {QuestionWithOption} from '../Components/QuestionOption'

export default function WhoDependsPage () {
    return (
        <Layout currentPage={4} numPages={20} nextPagePath="/narrative1">
            <QuestionWithOption
            question="Who depends on you?"
            option="Pick as many as you like"
            >
            </QuestionWithOption>            
            <div className="row">
                <div className="col-lg-12">
                    <div className="narrow-content-wrapper">
                        <DHControlInput multiple name="wdoy" iconStyle="circle" icon="partner" label="Partner" />
                        <DHControlInput multiple name="wdoy" iconStyle="circle" icon="children" label="Children" />
                        <DHControlInput multiple name="wdoy" iconStyle="circle" icon="grandkids" label="Grandkids" />   
                    </div> 
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="narrow-content-wrapper">
                        <DHControlInput multiple name="wdoy" iconStyle="circle" icon="close-friends" label="Close friends" />
                        <DHControlInput multiple name="wdoy" iconStyle="circle" icon="siblings" label="Family members" />
                        <DHControlInput multiple name="wdoy" iconStyle="circle" icon="parents" label="Parents" />
                    </div>                    
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="narrow-content-wrapper">
                        <DHControlInput multiple name="wdoy" iconStyle="circle" icon="pets" label="Pets" />
                        <DHControlInput multiple name="wdoy" iconStyle="circle" icon="community" label="Community" />
                        <DHControlInput multiple name="wdoy" iconStyle="circle" icon="not-available" label="None of these" />
                    </div>                    
                </div>
            </div>
        </Layout>
    )
}
