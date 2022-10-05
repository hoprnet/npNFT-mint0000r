import React from "react";
import styled from "@emotion/styled";
import Section from '../future-hopr-lib-components/Section/index.jsx'
import Typography from '../future-hopr-lib-components/Typography/index.jsx'
import Button from '../future-hopr-lib-components/Button/index.jsx'
import TwitterButton from '../future-hopr-lib-components/Button/twitter.jsx'


//Components
const SSection = styled(Section)`
  padding-bottom: 70px;
`

const ImageContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-bottom: 64px;
`

const ImagePlaceholder = styled.img`
  width: 100%;
  max-width: 600px;
`

const Image = styled.img`
  width: calc( 100% - 32px );
  max-width: 600px;
  z-index: 1;
  position: absolute;
`



function Section3_Content(props) {
    const { active, mintNpNFT, connectWallet } = props;

    return (
        <SSection
            id={'Section3'}
            darkGradient
            center
        >
            <Typography type="h2" className='typography--white typography--center'>
                NON-PRIVATE NFT PREVIEW!
            </Typography>
            <Typography  className='typography--white typography--center'>
                The picture below is an example of a non-private NFT picture. Just like other elements on this website it is loaded via a centralized webserver and that webserver learns more about you than most of us think.
            </Typography>
            <Typography  className='typography--white typography--center'>
                Disregarding if the picture is loaded in your NFT wallet or on this website, the picture will show you what metadata the webserver could find about you. This includes the location of your internet service provider and device settings that data harvesting institutions can use to build a coherent picture of your digital and metaverse life.
            </Typography>
            <Typography  className='typography--white typography--center'>
                Now mint your own non-private NFT and see what your NFT wallet discloses about you.
            </Typography>
            <ImageContainer>
                <ImagePlaceholder src="./images/ethcc-2022-nft-empty.jpg" alt="Non Private NFT by HOPR - EthCC 5 2022 Paris Placeholder" />
                <Image src="https://non-private-nft.hoprnet.org/demo-nft.jpg" alt="Non Private NFT by HOPR - demonstration" />
            </ImageContainer>

            { active ? (
                <>
                    <Button
                        hopr
                        gray
                        onClick={mintNpNFT}
                    >
                        Mint Non-Private NFT
                    </Button>
                </>
            ) : (
                <>
                    <Button
                        hopr
                        gray
                        onClick={connectWallet}
                    >
                        Connect Wallet
                    </Button>
                </>
            ) }

{/*            <TwitterButton*/}
{/*                text={`*/}
{/*https://mint.hoprnet.org/*/}
{/*@hoprnet #npNFT`*/}
{/*            }*/}
{/*            />*/}

        </SSection>
    );
}

export default Section3_Content;
