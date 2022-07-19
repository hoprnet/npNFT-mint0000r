import React from "react";
import styled from "@emotion/styled";
import Section from '../future-hopr-lib-components/Section/index.jsx'
import Typography from '../future-hopr-lib-components/Typography/index.jsx'
import Button from '../future-hopr-lib-components/Button/index.jsx'

const SSection = styled(Section)`
  padding-top: 0;
`

const MinterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Address = styled.b`
  overflow-wrap: anywhere;
`

export default function Section2_Minter(props) {
    const { active, account, mintNpNFT, connectWallet } = props;

    return (
        <>
            <SSection
                id={'Section2A'}
                center
            >
                { active ? (
                    <>
                        <Button
                            hopr
                            onClick={mintNpNFT}
                        >
                            Mint Non-Private NFT
                        </Button>
                    </>
                ) : (
                    <>
                        <Button
                            hopr
                            onClick={connectWallet}
                        >
                            Connect Wallet
                        </Button>
                    </>
                ) }
            </SSection>
            <Section
                id={'Section2B'}
                yellow
                center
            >
                <MinterContainer>
                    { active ? (
                        <>
                            <Typography center className='mb0'>
                                Connected address <Address> { account } </Address>
                            </Typography>
                        </>
                    ) : (
                        <>
                            <Typography center>
                                No wallet connected.
                            </Typography>
                            <Typography center>
                                We recommend that you open this page in your <a href="https://coinbase-wallet.onelink.me/q5Sx/fdb9b250" target="_blank">Coinbase Mobile Wallet</a> to mint your NFT.
                            </Typography>
                            <Typography center>
                                Why Coinbase Mobile Wallet? Because it is a good example of a wallet that supports NFTs and leaks your metadata for you to see in this educational example NFT.
                            </Typography>
                        </>
                    ) }
                </MinterContainer>
            </Section>
        </>
    );
}

