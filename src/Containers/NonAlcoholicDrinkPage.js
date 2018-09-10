import React from 'react'

import Layout from '../Components/Layout'
import DHControlInput from '../Components/DHControlInput'
import {QuestionWithOption} from '../Components/QuestionOption'

export default function NonAlcoholicDrinkPage () {
    return (
        <Layout currentPage={9} numPages={20} nextPagePath="/question10">
            <QuestionWithOption
            question="What kind of drink would you normally choose?"
            option="PICK AS MANY AS YOU LIKE"
            >
            </QuestionWithOption>            
            <div className="row">
                <div className="col-lg-12">
                    <div className="narrow-content-wrapper">
                        <DHControlInput multiple name="wdoy" iconStyle="circle" icon="soft-drink" label="Soft drink" />
                        <DHControlInput multiple name="wdoy" iconStyle="circle" icon="tea-coffee" label="Tea or coffee" />
                        <DHControlInput multiple name="wdoy" iconStyle="circle" icon="water" label="water" />   
                    </div> 
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="narrow-content-wrapper">
                        <DHControlInput multiple name="wdoy" iconStyle="circle" icon="juice" label="Juice" />
                        <DHControlInput multiple name="wdoy" iconStyle="circle" icon="dietdrink" label="Diet" />
                    </div>                    
                </div>
            </div>
        </Layout>
    )
}
