import { FlexBoxProps } from '@xylabs/sdk-react'
import React from 'react'

import { FooterLink } from './Link'
import { FooterLinks } from './Links'

export const XyoTokens: React.FC<FlexBoxProps> = (props) => (
  <FooterLinks title="XYO Tokens" {...props}>
    <FooterLink href="https://xyo.network/token">About</FooterLink>
    <FooterLink href="https://xyo.network/token/exchange">Exchanges</FooterLink>
    <FooterLink href="https://xyo.network/token/price">Prices</FooterLink>
    <FooterLink href="https://xyo.network/token/wallet">Wallets</FooterLink>
    <FooterLink href="https://etherscan.io/address/0x55296f69f40ea6d20e478533c15a6b08b654e758">Contract</FooterLink>
  </FooterLinks>
)