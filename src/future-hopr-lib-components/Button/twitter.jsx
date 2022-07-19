import React from "react";
import styled from "@emotion/styled";
import Button from './index.jsx'

const TwitterButtonImage = styled.img`
    width: 32px;
    margin-right: 8px;
`

function TwitterButton(props) {
    return (
            <Button
                hopr
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(props.text)}`}
                target="_blank"

            >
                <TwitterButtonImage src='./social-networks/twitter-filled.svg'/>
                Tweet
            </Button>
    );
}

export default TwitterButton;
