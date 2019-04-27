import React from 'react'
import Anime from 'react-anime';

import 'tachyons/css/tachyons.css'
import styled from 'styled-components'

import Layout from '../components/layout'
import Image from '../components/image'

import AppIcon from '../svgs/icon.svg'
import IosIcon from '../svgs/ios.svg'
import XdaiIcon from '../svgs/xdai.svg'
import LogoText from '../svgs/text.svg'

const IndexPage = () => (
  <Layout>
    <div class="dtc v-mid bg-white-90">
      <div class="flex items-center">
        <div class="w-50">
          <PhoneBackground>
            <Anime
            opacity={[0, 1]}
            translateX={'3em'}
            easing={'easeInCubic'}
            delay={(e, i) => i * 1000}>
              <div class="w-60 mw6 nl5">
                <Image />
              </div>
            </Anime>
          </PhoneBackground>
        </div>
        <Anime
          opacity={[0, 1]}
          easing={'easeInCubic'}
          delay={(e, i) => i * 1000}>
        <div class="w-50 v-mid ph5">
          <div class="flex">
            <div class="">
              <LogoText />
            </div>
            <div class="ml3">
              <AppIcon />
            </div>
          </div>
          <div class="mw8">
            <p class="mt4 mw6 f5 lh-copy gt-walsheim">Poketto is a xDai pocket wallet for your day-to-day transactions. The simplest, most secure and near instant way to send money to friends and pay for your every day items.</p>
            <div class="flex-column">
              <a href="https://testflight.com" target="_blank" rel="noopener noreferrer" class="black no-underline">
              <div class="flex">
                <div class="mt3 flex items-center justify-center link dim ph4 dib bg-lightest-blue ba bw1 br3 b--lightest-blue pointer w-75">
                  <IosIcon />
                  <p class="ml3 f5 black no-underline gt-walsheim-medium">Test it now with Testflight</p>
                </div>
              </div>
              </a>
              <a href="https://medium.com/@jaredstauffer/how-to-get-xdai-how-to-convert-dai-to-xdai-eth-dai-xdai-30a60e4b6641" target="_blank" rel="noopener noreferrer" class="black no-underline">
                <div class="flex">
                  <div class="mt3 flex items-center justify-center link dim ph4 dib bg-near-white ba bw1 br3 b--near-white pointer w-75">
                    <XdaiIcon />
                    <p class="ml3 f5 gt-walsheim-medium">Convert Ethereum to xDai</p>
                  </div>
                </div>
              </a>
            </div>
            <div class="mt3 pt4 pt3 flex justify-start o-90">
              <a href="https://www.twitter.com/pokettocash" target="_blank" rel="noopener noreferrer" class="mr3 f5 black no-underline underline-hover hover-orange link pointer gt-walsheim">Twitter</a>
              <a href="https://discord.gg/kMTUpME" target="_blank" rel="noopener noreferrer" class="mr3 f5 black no-underline underline-hover hover-orange link pointer gt-walsheim">Discord</a>
              <a href="https://github.com/pokettocash" target="_blank" rel="noopener noreferrer" class="f5 black no-underline underline-hover hover-orange link pointer gt-walsheim">Github</a>
            </div>
            <div class="mt2">
              <p class="f5 o-90 gt-walsheim">Contribute at <a href="https://www.donesunday.com/" target="_blank" rel="noopener noreferrer" class="link gold hover-orange pointer gt-walsheim-medium">Done Sunday <span>🌞</span></a></p>
            </div>
          </div>
        </div>
        </Anime>
      </div>
    </div>
  </Layout>
)

const PhoneBackground = styled.main.attrs({
  className: 'vh-100 w-100 flex items-center justify-center',
})`
  background: linear-gradient(to bottom left, rgba(240,170,139,1), rgba(255,208,52,0));
  background-repeat: no-repeat;
  background-attachment: fixed;
`

export default IndexPage
