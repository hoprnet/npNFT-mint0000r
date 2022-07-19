import React from "react";
import styled from "@emotion/styled";
import Section from '../future-hopr-lib-components/Section/index.jsx'
import Typography from '../future-hopr-lib-components/Typography/index.jsx'
import Brick from '../future-hopr-lib-components/Brick/index.jsx'
import Button from '../future-hopr-lib-components/Button/index.jsx'
import TwitterButton from '../future-hopr-lib-components/Button/twitter.jsx'


//Components
const SSection = styled(Section)`
  padding-bottom: 120px;
  padding-top: 120px;
`
const Subtext = styled(Typography)`
  max-width: 960px;
`

const ImageContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-bottom: 24px;
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

const TwitterButtonImage = styled.img`
    width: 32px;
    margin-right: 8px;
`

function Section3_Content() {
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
                <Image src="https://non-private-nft.hoprnet.org/ethcc-2022-nft-demo.jpg" alt="Non Private NFT by HOPR - EthCC 5 2022 Paris" />
            </ImageContainer>

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
