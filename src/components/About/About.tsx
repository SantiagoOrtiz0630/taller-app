import React, { Component } from 'react';
import './About.scss';

import { observer } from 'mobx-react';

interface AboutProps {
}

interface AboutState {

}

@observer class About extends Component<AboutProps, AboutState> {

    constructor(props: any) {
        super(props);

    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {

        return (
            <section className="About">

                <svg className="About-logo" viewBox="0 0 96 138">
                    <path d="M96,138H0V0H96ZM8,130H88V8H8Z" />
                    <path d="M35,38.46H27.32L25.89,42H20.64l8-18.2h5.07L41.8,42H36.44Zm-1.5-3.79-2.34-5.83-2.34,5.83Z" />
                    <path d="M60,23.8H65.1V37.92h8.68V42H60Z" />
                    <path d="M26.69,63.88H21.1V59.8H37.41v4.08H31.84V78H26.69Z" />
                    <path d="M73,74v4H58.35V59.8H72.63v4H63.45v3.07h8.08v3.84H63.45V74Z" />
                    <path d="M64.53,109.16H61.72V114H56.57V95.8h8.32a10.29,10.29,0,0,1,4.29.83A6.26,6.26,0,0,1,72,99a6.37,6.37,0,0,1,1,3.56A6.29,6.29,0,0,1,72,106a6.2,6.2,0,0,1-2.62,2.29L73.34,114H67.83Zm3.25-6.63a2.46,2.46,0,0,0-.81-2,3.52,3.52,0,0,0-2.39-.7H61.72v5.33h2.86a3.62,3.62,0,0,0,2.39-.68A2.48,2.48,0,0,0,67.78,102.53Z" />
                    <rect x="25.92" y="101.56" width="6.68" height="6.68" />
                </svg>
                <p className="About-text">
                    This web portal is part of a job for the ICESI University in Cali, Colombia. It is a FanPage made to pay homage to some outstanding artists in modern musical genres such as Rock and Metal.</p>
                <p className="About-credits">
                    The songs are not mine, all the credits to the authors and bands mentioned here.</p>
                <h3 className="About-brand">by Santiago Ortiz Guevara</h3>
            </section>
        );
    }
}

export default About;
