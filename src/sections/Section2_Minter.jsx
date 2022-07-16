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

const MinterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
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

  	const mintNpNFT = async () => {
  		console.log("minting not implemented yet")
  	}

    return (
        <Section
            id={'Section2'}
            yellow
            center
        >
            <MinterContainer>
                { active ? (
                    <>
                        <Subtext center>
                            Connected address <b> { account } </b>
                        </Subtext>
                        <Button
                            hopr
                            onClick={mintNpNFT}
                        >
                            Mint Non-Private NFT
                        </Button>
                    </>
                ) : (
                    <>
                        <Subtext center>
                            No wallet connected.
                        </Subtext>
                        <Subtext center>
                            We recommend that you open this page in your <a href="https://coinbase-wallet.onelink.me/q5Sx/fdb9b250" target="_blank">Coinbase Mobile Wallet</a> to mint your NFT.
                        </Subtext>
                        <Subtext center>
                            Why Coinbase Mobile Wallet? Because it is a good example of a wallet that supports NFTs and leaks your metadata for you to see in this educational example NFT.
                        </Subtext>
                        <Button
                            hopr
                            onClick={connectWallet}
                        >
                            Connect Wallet
                        </Button>
                    </>
                ) }
            </MinterContainer>
        </Section>
    );
}

export default function () {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
    	<Section2_Minter />
    </Web3ReactProvider>
  );

}
