import { Facebook, Instagram, LinkedIn, Reddit, Telegram, Twitter, YouTube } from '@mui/icons-material'
import { FlexBoxProps, FlexRow } from '@xylabs/react-flexbox'
import { FaDiscord } from 'react-icons/fa'

import { FooterLink } from '../Link'
import { FooterLinks } from '../Links'

export const XyoSocialLinks: React.FC<FlexBoxProps> = (props) => {
  return (
    <FooterLinks title="XYO Socials" {...props}>
      <FlexRow flexWrap="wrap" justifyContent="flex-start">
        <FooterLink href="https://business.facebook.com/OfficialXYO/">
          <Facebook />
        </FooterLink>
        <FooterLink href="https://twitter.com/OfficialXYO">
          <Twitter />
        </FooterLink>
        <FooterLink href="https://www.instagram.com/officialxyo/">
          <Instagram />
        </FooterLink>
        <FooterLink href="https://t.me/xyonetwork">
          <Telegram />
        </FooterLink>
        <FooterLink href="https://www.reddit.com/r/XYONetwork/">
          <Reddit />
        </FooterLink>
        <FooterLink href="https://www.youtube.com/channel/UCyZDqb9pgntVHJVt1pxXtsw">
          <YouTube />
        </FooterLink>
        <FooterLink href="https://www.linkedin.com/company/officialxyo/">
          <LinkedIn />
        </FooterLink>
        <FooterLink href="https://discord.com/channels/935586624392298547/935586625101103227">
          <FaDiscord />
        </FooterLink>
      </FlexRow>
    </FooterLinks>
  )
}
