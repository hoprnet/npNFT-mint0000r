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

const Image = styled.img`
  width: 100%;
  max-width: 600px;
  
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
                NFT might be watching you!
            </Typography>
            <Typography  className='typography--white typography--center'>
                The HOPR Non-Private NFT! This NFT tool will show you how easy it is to expose your IP address and maybe even your whole identity with many of today`s crypto services.
            </Typography>
            <ImageContainer>
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
