import React from 'react'
import styled from 'styled-components'
import Theme from '../../utils/Theme'

const SignupSection = styled.section`
  background-color: ${Theme.colors.primaryLighter};
  padding-top: 40px;
  padding-bottom: 40px;
`

const Signup = () => (
  <SignupSection>
    Here is the Mailchimp signup form.
  </SignupSection>
)

export default Signup
