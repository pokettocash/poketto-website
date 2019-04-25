import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import 'tachyons/css/tachyons.min.css'
import '../type/fonts.css'
import styled from 'styled-components'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description', content: 'Poketto is the simplest xDai wallet for your day-to-day transactions.'
            },
            {
              name: 'keywords', content: 'xdai, xdai wallet, xdai ios, dai, ethereum, xdai wallet, wallet ios, dai wallet, web3.0'
            },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"></link>
        <Background>
          {children}
        </Background>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const Background = styled.main.attrs({
  className: 'vh-100 w-100 dt',
})`
  /* background: linear-gradient(120deg, #FFFFFF 0%, #FFFFFF 100%); */
  background-color: light-grey;
  background-repeat: no-repeat;
  background-attachment: fixed;
`

export default Layout