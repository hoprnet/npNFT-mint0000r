import React from "react";
import styled from "@emotion/styled";
import Section from '../future-hopr-lib-components/Section/index.jsx'
import Typography from '../future-hopr-lib-components/Typography/index.jsx'
import Button from '../future-hopr-lib-components/Button/index.jsx'


export default function Section_RPCh(props) {

    return (
        <Section
            id={'Section2A'}
            center
        >
            
            <Typography center>
                Despite millions of users worldwide, today’s wallets often leak user IP addresses and all sorts of metadata. 
                {' '}<a href="https://rpch.net/" target="_blank" >Check out the Only Private Blockchain Gateway RPCh by HOPR.</a>
            </Typography>

        </Section>
    );
}

