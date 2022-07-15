import React from "react";
import styled from "@emotion/styled";
import Section from '../future-hopr-lib-components/Section/index.jsx'
import Typography from '../future-hopr-lib-components/Typography/index.jsx'
import Brick from '../future-hopr-lib-components/Brick/index.jsx'
import Button from '../future-hopr-lib-components/Button/index.jsx'

// Web3 Imports
import { useWeb3React, Web3ReactHooks, Web3ReactProvider } from '@web3-react/core'
import { providers, Web3Provider } from 'ethers'
import { InjectedConnector } from '@web3-react/injected-connector'


// Web3 Functions
function getLibrary(provider, connector) {
    return new providers.Web3Provider(provider)
}

const Subtext = styled(Typography)`
  max-width: 960px;
`

function Section2_Minter() {

    const { active, activate, deactivate, account, library, connector, error } = useWeb3React()

    const injected = new InjectedConnector(
        {
            supportedChainIds:[1, 100]
        }
    )

    const connectWallet = async () => {
        try {
            await activate(injected)
        } catch (err) {
            console.error(err)
        }
    }

    const disconnectWallet = async () => {
        try {
            deactivate(injected)
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <Section
            id={'Section2'}
            yellow
            center
        >
            <Web3ReactProvider getLibrary={getLibrary}>
                <div>
                    { active ? (
                        <div>
                            <Typography type="h5">
                                Connected with <b> { account } </b>
                            </Typography>
                            <Button
                                hopr
                                onClick={disconnectWallet}
                            >
                                Disconnect Wallet
                            </Button>
                        </div>
                    ) : (
                        <div>
                            <Typography type="h5">
                                Not Connected
                            </Typography>
                            <Button
                                hopr
                                onClick={connectWallet}
                            >
                                Connect Wallet
                            </Button>
                        </div>
                    ) }
                </div>
            </Web3ReactProvider>
        </Section>
    );
}

export default Section2_Minter;
