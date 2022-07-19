import React from "react";
import Layout from './future-hopr-lib-components/Layout'

import typingBotAnimation from './assets/typing-bot-animation.json';

// Sections
import Banner from './future-hopr-lib-components/Banner'
import Section1_Hero from './sections/Section1_Hero'
import Section2_Minter from './sections/Section2_Minter'
import Section3_Content from './sections/Section3_Content'
import EncourageSection from "./future-hopr-lib-components/EncourageSection";

export default function App() {
	return (
        <Layout>
            <Banner
                text='EthCC contest will end on Wednesday, July 20th, 11:59 pm CEST'
            />
            <Section1_Hero/>
            <Section2_Minter/>
            <Section3_Content/>
            <EncourageSection
                title='BE PART OF THE HOPR ECOSYSTEM'
                text='HOPR is building the transport layer privacy needed to make web3 work. Work with us to build dApps that change data privacy for good.'
                animationData={typingBotAnimation}
            />
        </Layout>
    );
}
