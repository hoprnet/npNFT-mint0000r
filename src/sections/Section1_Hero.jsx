import React, {useEffect, useRef} from "react";
import styled from "@emotion/styled";

import Section from '../future-hopr-lib-components/Section/index.jsx'
import Typography from '../future-hopr-lib-components/Typography/index.jsx'

import { ReactComponent as HoprBall } from '../assets/hopr-ball.svg';
import mintAnimation from '../assets/mint-animation.json'
import lottie from "lottie-web";
import TwitterButton from "../future-hopr-lib-components/Button/twitter";

const SSection = styled(Section)`
  padding-top: 0;
  padding-bottom: 0;
`

const ImageContainer = styled.div`
  max-width: 780px;
  width: 100%;
  min-height: 100px;
  position: relative;
  display: flex;
  justify-content: center;
`

const SHoprBall = styled(HoprBall)`
  width: 100%;
`

const Animation = styled.div`
  width: 34vw;
  max-width: 300px;
  position: absolute;
  top: 10px;
`

const Image = styled.img`
  max-width: 400px;
  max-height: 90%;
  position: absolute;
  top: 10px;
`

const Subtext = styled(Typography)`
  max-width: 640px;
`

function Section1(props) {
    const animationLoaded = useRef(false);

    useEffect(() => {
        if (!animationLoaded.current) {
            lottie.loadAnimation({
                container: document.querySelector(`#mint-animation`),
                animationData: mintAnimation,
            });
        }
        animationLoaded.current = true;
    }, []);

    return (
        <SSection
            id={'Section1'}
            gradient
            center
        >
            <ImageContainer >
                <SHoprBall/>
                {/*<Image*/}
                {/*    alt="Hopr Minter"*/}
                {/*    src={'/images/HOPR_Mint.svg'}*/}
                {/*/>*/}
                <Animation id='mint-animation' />
            </ImageContainer>

            <Typography type="h2" center>
                Non-Private NFT Minter
            </Typography>

            <Subtext center>
                NFTs are funny JPGs, right? But what if your NFT is watching YOU?! This educational project by HOPR makes the metadata visible that typically centralized webservers collect when your wallet loads your NFT.
            </Subtext>

            {/*<Button*/}
            {/*    hopr*/}
            {/*    onClick={props.setShowSetup}*/}
            {/*>*/}
            {/*    SETUP*/}
            {/*</Button>*/}

{/*            <TwitterButton*/}
{/*                text={`*/}
{/*https://mint.hoprnet.org/*/}
{/*@hoprnet #npNFT`*/}
{/*                }*/}
{/*            />*/}


        </SSection>
    );
}

export default Section1;
