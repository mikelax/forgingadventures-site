import React, { Component } from 'react'
import { Link } from 'react-static'
import styled from 'styled-components'
import Theme from 'utils/Theme'

const FooterStyles = styled.div`
  position: relative;
  z-index: 1;
  padding: 20px;
  background: ${Theme.colors.primary};
  color: white;
  box-shadow: 0 -10px 20px -10px rgba(0, 0, 0, .3);
  .copyright {
    text-align: center;
    margin-bottom: 20px;
  }
`

export default class Footer extends Component {
  render () {
    return (
      <FooterStyles>
        <div className="copyright">
          &copy; {`20${new Date().getYear() - 100}`} Forging Adventures
        </div>
        <div>
          <Link to="/privacy">Privacy Policy</Link> | <Link to="/terms">Terms of Use</Link>
        </div>
      </FooterStyles>
    )
  }
}
