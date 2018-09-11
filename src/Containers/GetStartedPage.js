import React from 'react';

import Layout from '../Components/Layout';
import AUbutton from '@gov.au/buttons';


export default function GetStartedPage () {
    return (
        <Layout currentPage={0} numPages={23} nextPagePath="/details">
            <div className="row">
                <div className="col-lg-12">
                    <div className="narrow-content-wrapper">
                        <p>Do you think about what the future looks like?</p>
                        <p>Take our 10 minute check up and recieve personalised results for improving your quality of life today and tomorrow.</p>
                        <AUbutton link="/details">
                            LETS'S GET STARTED
                        </AUbutton>
                    </div>
                </div>
            </div>
        </Layout>
    )
}