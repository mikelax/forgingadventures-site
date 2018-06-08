import React from 'react'
import { Link } from 'react-static'
import styled from 'styled-components'
import Theme from '../../utils/Theme'

import logo from './logo.png'

const HeroSection = styled.section`
  background-color: ${Theme.colors.primaryLighter};
  height: 320px;
  padding: 20px;
  color: black;

  h1 {
    font-size: ${Theme.sizes.h1}rem;
    margin-bottom: 24px;
  }

  .App-logo {
    animation: App-logo-spin infinite 20s linear;
    height: 120px;
  }

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`

const HeroButton = styled.a`
  background-color: rgb(95, 87, 173);
  border-color: rgb(95, 87, 173);
  border-radius: 99px;
  font-size: 0.875rem;
  color: ${Theme.colors.white};
  padding-left: 32px;
  padding-right: 32px;
  padding-top: 16px;
  padding-bottom: 16px;
  margin: 0px 0.75rem;
  transition-property: all;
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
  transition-delay: 0s;
`

const Hero = () => (
  <HeroSection>
    <img src={logo} className="App-logo" alt="logo" />
    <h1>
      Welcome to Forging Adventures.<br />
      A new way to play old-school RPGs online
    </h1>

    <Link to="/#signup">
      <HeroButton>
        TRY IT OUT
      </HeroButton>
    </Link>{' '}
    <Link to="/#features">
      <HeroButton>
        How does it work?
      </HeroButton>
    </Link>
  </HeroSection>
)

export default Hero
