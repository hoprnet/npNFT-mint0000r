import React from "react";
import Layout from './future-hopr-lib-components/Layout'
import typingBotAnimation from './assets/typing-bot-animation.json';

// Sections
import Banner from './future-hopr-lib-components/Banner'
import Section1_Hero from './sections/Section1_Hero'
import Section2_Minter from './sections/Section2_Minter'
import Section3_Content from './sections/Section3_Content'
import EncourageSection from "./future-hopr-lib-components/EncourageSection";

// Web3 Imports
import Web3 from 'web3';
import { useWeb3React, Web3ReactHooks, Web3ReactProvider } from '@web3-react/core'
import { providers, Web3Provider } from 'ethers'
import { InjectedConnector } from '@web3-react/injected-connector'

// Web3 Functions
function getLibrary(provider, connector) {
    return new providers.Web3Provider(provider)
}

export function App() {
    const { active, activate, deactivate, account, library, connector, error } = useWeb3React()

    const injected = new InjectedConnector(
        {
            supportedChainIds:[1, 100]
        }
    )

    const connectWallet = async () => {
        try {
            await activate(injected);
        } catch (err) {
            console.error(err)
        }
    }

    const disconnectWallet = async () => {
        try {
            deactivate(injected);
        } catch (err) {
            console.error(err)
        }
    }

    const mintNpNFT = async () => {
        let minterABI = [
            {
                "inputs": [],
                "name": "mintNft",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            }
        ]
        let minterAddress="0xFA1B9250465939452D34fad1C8a15148DD136904"
        console.log(library)
        let web3 = new Web3(library.provider)
        let minterInstance = new web3.eth.Contract(minterABI, minterAddress)
        console.log(minterInstance)
        minterInstance.methods.mintNft().send( { from: account } )
        console.log("minting not implemented yet")
    }


    return (
        <Layout>
            <Banner
                text='EthCC contest will end on Wednesday, July 20th, 11:59 pm CEST'
            />
            <Section1_Hero/>
            <Section2_Minter
                active={active}
                account={account}
                mintNpNFT={mintNpNFT}
                connectWallet={connectWallet}
            />
            <Section3_Content
                active={active}
                mintNpNFT={mintNpNFT}
                connectWallet={connectWallet}
            />
            <EncourageSection
                title='BE PART OF THE HOPR ECOSYSTEM'
                text='HOPR is building the transport layer privacy needed to make web3 work. Work with us to build dApps that change data privacy for good.'
                animationData={typingBotAnimation}
            />
        </Layout>
    );
}

export default function () {
    return (
        <Web3ReactProvider getLibrary={getLibrary}>
            <App />
        </Web3ReactProvider>
    );

}
