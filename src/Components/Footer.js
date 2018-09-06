import React from 'react'

import NextButton from './NextButton'

export default ({routePath}) => (
    <footer className="dh-footer" role="contentinfo">
        <nav className="dh-footer__navigation row">
            <div className="col-xs-12">
                <NextButton path={routePath} text="NEXT"></NextButton>
            </div>
        </nav>
        <section className="dh-footer__end row">
            <div className="col-xs-12">
                <p></p>
            </div>
        </section>
    </footer>
)