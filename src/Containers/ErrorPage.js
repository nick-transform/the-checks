import React from 'react';

import Layout from '../Components/Layout'

export default function ErrorPage () {
    return (
        <Layout currentPage={0} numPages={23}>
            <div className="row">
                <div className="col-lg-12">
                    <p>Can't find what you are looking for...</p>
                </div>
            </div>
        </Layout>
    )
}