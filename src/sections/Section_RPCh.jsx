import React from "react";
import styled from "@emotion/styled";

import Section from '../future-hopr-lib-components/Section/index.jsx'
import Typography from '../future-hopr-lib-components/Typography/index.jsx'
import Button from '../future-hopr-lib-components/Button'

import PoweredByHopr from '../future-hopr-lib-components/PoweredByHOPR'

const SSection = styled(Section)`
  padding-bottom: 40px;
  padding-top: 40px;
  align-items: flex-start;
`

function Section4() {
    return (
        <SSection
            lightBlue
            center
        >
            <Typography
                type="h6"
                className="mb32"
            >
                Want to know how RPCh – the first private Ethereum RPC provider – fixes all this?
            </Typography>
            <Button
                hopr
                href='https://hoprnet.org/rpch'
                target="_blank"
            >
                TELL ME MORE
            </Button>
            <PoweredByHopr
                style={{
                    marginTop: '20px',
                    marginBottom: '-16px',
                }}
            />
        </SSection>
    );
}

export default Section4;
