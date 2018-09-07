import React from 'react'

import Layout from '../Components/Layout'
import DHControlInput from '../Components/DHControlInput'
import {QuestionWithOption} from '../Components/QuestionOption'

export default function WhoDependsPage () {
    return (
        <Layout currentPage={5} numPages={20} nextPagePath="/question6">
            <QuestionWithOption
            question="What are your top 3 health priorities?"
            option=""
            >
            </QuestionWithOption>            
            <div className="row">
                <div className="col-lg-12">
                    <div className="narrow-content-wrapper">
                        <DHControlInput multiple name="wdoy" iconStyle="circle" icon="jeans" label="Fitting into my clothes" />
                        <DHControlInput multiple name="wdoy" iconStyle="circle" icon="exercise" label="Exercise more" />
                        <DHControlInput multiple name="wdoy" iconStyle="circle" icon="feel-younger" label="Feeling younger" />   
                    </div> 
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="narrow-content-wrapper">
                        <DHControlInput multiple name="wdoy" iconStyle="circle" icon="shoulder-ache" label="Avoiding aches and pains" />
                        <DHControlInput multiple name="wdoy" iconStyle="circle" icon="staying-independent" label="Staying independent" />
                        <DHControlInput multiple name="wdoy" iconStyle="circle" icon="sharp-mind" label="Keeping my mind sharp" />
                    </div>                    
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="narrow-content-wrapper">
                        <DHControlInput multiple name="wdoy" iconStyle="circle" icon="active-social-life" label="More active social life" />
                        <DHControlInput multiple name="wdoy" iconStyle="circle" icon="existing-condition" label="Manage existing conditions" />
                        <DHControlInput multiple name="wdoy" iconStyle="circle" icon="being-there-family" label="Being there for my family" />
                    </div>                    
                </div>
            </div>
        </Layout>
    )
}
