import React, {useEffect} from "react";
import styled from "@emotion/styled";

import Section from '../future-hopr-lib-components/Section/index.jsx'
import Typography from '../future-hopr-lib-components/Typography/index.jsx'
import Button from '../future-hopr-lib-components/Button/index.jsx'

import { ReactComponent as HoprBall } from '../assets/hopr-ball.svg';
import derpAnimation from '../assets/derp-animation.json'
import lottie from "lottie-web";

const SSection = styled(Section)`
  padding-bottom: 80px;
  padding-top: 0;
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

// const Animation = styled.div`
//   max-width: 400px;
//   max-height: 400px;
//   width: 50%;
//   position: absolute;
//   bottom: 0;
//   right: 0;
//   overflow: hidden;
// `

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

    // let animationLoaded = false;
    // useEffect(() => {
    //     // check to prevent double animation load on page remount
    //     if (!animationLoaded) {
    //         lottie.loadAnimation({
    //             container: document.querySelector(`#derp-animation`),
    //             animationData: derpAnimation,
    //         });
    //     }
    //     //eslint-disable-next-line react-hooks/exhaustive-deps
    //     animationLoaded = true;
    // }, []);

    return (
        <SSection
            id={'Section1'}
            gradient
            center
        >
            <ImageContainer >
                <SHoprBall/>
                <Image
                    alt="Hopr Minter"
                    src={'/images/HOPR_Mint.svg'}
                />
                {/*<Animation id='derp-animation' />*/}
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


        </SSection>
    );
}

export default Section1;
