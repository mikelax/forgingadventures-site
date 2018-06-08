import React from 'react'
import styled from 'styled-components'
import Theme from '../../utils/Theme'

const FeaturesSection = styled.section`
  padding-top: 40px;
  padding-bottom: 40px;
  padding-left: 48px;
  padding-right: 48px;
  background: #FFFFFF;

  h2 {
    font-size: ${Theme.sizes.h2}rem;
  }
`
const FeatureList = styled.ul`
  display: flex;
  img {
    height: 190px;
  }

  h3.title {
    text-transform: uppercase;
    font-weight: ${Theme.weights.bold}
  }
`

const Feature = styled.li`
  padding: 32px;
  text-align: center;
  width: 33%;
  display: list-item;
`

const Features = () => (
  <FeaturesSection>
    <h2>Features for the Player & GM</h2>

    <FeatureList>
      <Feature>
        <img src="//images.ctfassets.net/h6vh38q7qvzk/XHOXxYXbq0cSeeU6A4qms/80d41d3a542cc62524b65cbf30122075/dashboard.png" title="Modern Dashboard" alt="Modern Dashboard" />
        <h3 className="title">MODERN Editor</h3>
        <h3>Our lightning fast and flexible log dashboard allows you to solve problems faster.</h3>
      </Feature>
      <Feature>
        <img src="//images.ctfassets.net/h6vh38q7qvzk/XHOXxYXbq0cSeeU6A4qms/80d41d3a542cc62524b65cbf30122075/dashboard.png" title="Modern Dashboard" alt="Modern Dashboard" />
        <h3 className="title">Quick Character Builder</h3>
        <h3>Our lightning fast and flexible log dashboard allows you to solve problems faster.</h3>
      </Feature>
      <Feature>
        <img src="//images.ctfassets.net/h6vh38q7qvzk/XHOXxYXbq0cSeeU6A4qms/80d41d3a542cc62524b65cbf30122075/dashboard.png" title="Modern Dashboard" alt="Modern Dashboard" />
        <h3 className="title">Delightful Editor and Messages</h3>
        <h3>Our lightning fast and flexible log dashboard allows you to solve problems faster.</h3>
      </Feature>
    </FeatureList>
  </FeaturesSection>
)

export default Features
