import React from 'react'

import Layout from '../Components/Layout'
import DHControlInput from '../Components/DHControlInput'
import {QuestionWithOption} from '../Components/QuestionOption'

export default function SnacksPage () {
    return (
        <Layout currentPage={7} numPages={20} nextPagePath="/question8">
            <QuestionWithOption
            question="Which snack do you usually eat?"
            option="PICK AS MANY AS YOU LIKE"
            >
            </QuestionWithOption>            
            <div className="row">
                <div className="col-lg-12">
                    <div className="narrow-content-wrapper">
                        <DHControlInput multiple name="wdoy" iconStyle="circle" icon="nuts" label="Nuts" />
                        <DHControlInput multiple name="wdoy" iconStyle="circle" icon="fresh-fruit" label="Fresh fruit" />
                        <DHControlInput multiple name="wdoy" iconStyle="circle" icon="chips" label="Potato chips" />   
                    </div> 
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="narrow-content-wrapper">
                        <DHControlInput multiple name="wdoy" iconStyle="circle" icon="chocolate" label="Chocolate" />
                        <DHControlInput multiple name="wdoy" iconStyle="circle" icon="pastries" label="Pastries" />
                        <DHControlInput multiple name="wdoy" iconStyle="circle" icon="vegies" label="Vegies" />
                    </div>                    
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="narrow-content-wrapper">
                        <DHControlInput multiple name="wdoy" iconStyle="circle" icon="cakes" label="Cakes or muffins" />
                        <DHControlInput multiple name="wdoy" iconStyle="circle" icon="biscuits" label="Biscuits" />
                        <DHControlInput multiple name="wdoy" iconStyle="circle" icon="not-available" label="None of these" />
                    </div>                    
                </div>
            </div>
        </Layout>
    )
}
