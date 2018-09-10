import React from 'react'

import Layout from '../Components/Layout'
import DHControlInput from '../Components/DHControlInput'
import {QuestionWithOption} from '../Components/QuestionOption'

export default function SmokePage () {
    return (
        <Layout currentPage={14} numPages={20} nextPagePath="/question15">
            <QuestionWithOption
            question="Do you smoke, including roll-your-own or cigars?"
            option=""
            >
            </QuestionWithOption>            
            <div className="row">
                <div className="col-lg-12">
                    <div className="narrow-content-wrapper">
                        <DHControlInput name="wdoy" iconStyle="circle" icon="cigs-everday" label="Yes. Every day" />
                        <DHControlInput name="wdoy" iconStyle="circle" icon="cigs-not-everyday" label="Yes. But not every day" />
                        <DHControlInput name="wdoy" iconStyle="circle" icon="cigs-no-quit" label="No. I've quit" />   
                    </div> 
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="narrow-content-wrapper">
                        <DHControlInput name="wdoy" iconStyle="circle" icon="cigs-never-have" label="No. Never have" />
                        <DHControlInput name="wdoy" iconStyle="circle" icon="e-cigs" label="Yes. e-cigarettes (vaping)" />
                        <DHControlInput name="wdoy" iconStyle="circle" icon="cigs-occasionally" label="Occasionally" />
                    </div>                    
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="narrow-content-wrapper">
                        <DHControlInput name="wdoy" iconStyle="circle" icon="trying-quit" label="Trying to quit" />
                    </div>                    
                </div>
            </div>
        </Layout>
    )
}
