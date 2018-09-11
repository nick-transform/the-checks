import React from 'react';
import AUtextInput from '@gov.au/text-inputs';
import Layout from '../Components/Layout'
import {DHRadio} from '../Components/DHControlInput'


const UserDetailPage = () => {
    return (
        <Layout currentPage={0} numPages={23} nextPagePath="/question1">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="narrow-content-wrapper">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                                <label htmlFor="first-name" >Hello, what's your first name?</label>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                                <AUtextInput id="first-name" block />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                                <label htmlFor="age" >Age?</label>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                                <AUtextInput id="age" />
                            </div>
                        </div>
                        <div>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                                <label htmlFor="gender" >Gender?</label>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                                <DHRadio label="Male" name="gender" id="gender"></DHRadio>
                                <DHRadio label="Female" name="gender" id="gender"></DHRadio>
                                <DHRadio label="Other" name="gender" id="gender"></DHRadio>
                                <DHRadio label="Prefer not to say" name="gender" id="gender"></DHRadio>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default UserDetailPage;