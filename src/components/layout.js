import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import 'tachyons/css/tachyons.css'
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
            name: 'description', content: 'Poketto is the simplest xDai wallet for your day-to-day transactions. Our goal with Poketto is to make it easy to send money to friends and pay for everyday items. It is your pocket wallet inside your phone with secure and near instant transactions.'
          },
          {
            name: 'keywords', content: 'xdai, xdai wallet, xdai ios, dai, ethereum, xdai wallet, wallet ios, dai wallet, web3.0'
          },
          {
            name: 'og:type', content: 'website'
          },
          {
            name: 'og:url', content: 'https://poketto.cash'
          },
          {
            name: 'og:title', content: 'Poketto — xDai Wallet for iOS'
          },
          {
            name: 'og:description', content: 'Poketto is the simplest xDai wallet for your day-to-day transactions. Our goal with Poketto is to make it easy to send money to friends and pay for everyday items. It is your pocket wallet inside your phone with secure and near instant transactions.'
          },
          {
            name: 'og:image', content: 'https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png'
          },
          {
            name: 'twitter:card', content: 'summary_large_image'
          },
          {
            name: 'twitter:url', content: 'https://poketto.cash'
          },
          {
            name: 'twitter:title', content: 'Poketto — xDai Wallet for iOS'
          },
          {
            name: 'twitter:description', content: 'Poketto is the simplest xDai wallet for your day-to-day transactions. Our goal with Poketto is to make it easy to send money to friends and pay for everyday items. It is your pocket wallet inside your phone with secure and near instant transactions.'
          },
          {
            name: 'twitter:image', content: 'https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png'
          },
          ]}
          >
          <html lang="en" />
        </Helmet>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css"></link>
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