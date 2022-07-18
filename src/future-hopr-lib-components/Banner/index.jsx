import React from 'react';
import styled from "@emotion/styled";
import GrayButton from '../Button/gray.jsx'

const SBanner = styled.section`
  background: linear-gradient(#000050,#0000b4);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 8px;
  @media (max-width: 600px) {
    button {
      font-size: 14px;
    }
  }
  @media (max-width: 440px) {
    flex-direction: column;
    gap: 5px;
  }
`

const Text = styled.div`
    font-family: 'Source Code Pro';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 1.75;
    letter-spacing: 0.25px;
    color: #FFFFFF;
    text-align: center;
      @media (max-width: 768px) {
        font-size: 16px;
        button {
          font-size: 14px;
        }
      }
     @media (max-width: 330px) {
       font-size: 14px;
     }
`

const Banner = (props) =>
    <SBanner>
        <Text>{props.text}</Text>
    </SBanner>

export default Banner;
