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
  position: relative;
`

const Animation = styled.div`
  max-width: 400px;
  max-height: 400px;
  width: 50%;
  position: absolute;
  bottom: 0;
  right: 0;
  overflow: hidden;
`

const Subtext = styled(Typography)`
  max-width: 640px;
`

function Section1(props) {

    let animationLoaded = false;
    useEffect(() => {
        // check to prevent double animation load on page remount
        if (!animationLoaded) {
            lottie.loadAnimation({
                container: document.querySelector(`#derp-animation`),
                animationData: derpAnimation,
            });
        }
        //eslint-disable-next-line react-hooks/exhaustive-deps
        animationLoaded = true;
    }, []);

    return (
        <SSection
            id={'Section1'}
            gradient
            center
        >
            <ImageContainer >
                <HoprBall/>
                {/*<Image*/}
                {/*    alt="Hopr logo"*/}
                {/*    src={'/images/derp_top-header.png'}*/}
                {/*/>*/}
                <Animation id='derp-animation' />
            </ImageContainer>

            <Typography type="h2" center>
                non-private NFT Minter
            </Typography>

            <Subtext center>
                Text about minter
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
