import { Meta } from '@storybook/react'
import { CryptoAssetRenderPlugin } from '@xyo-network/react-aggregate-price-plugin'
import { UniswapPairsRenderPlugin } from '@xyo-network/react-crypto-market-uniswap-plugin'

import { Template, xyoEmbedStoryBase } from './shared.stories'

const AggregatePricePointer = 'https://api.archivist.xyo.network/1948bf4eedf90ee2b8a1f63216b7c6b3b18d7bc2834330d85bcd6ab3d6428a20'
const UniswapPairPointer = 'https://beta.api.archivist.xyo.network/e36602006239d86b6e08412f7879372b2c622d74f4d6bc508a08a46fa8ad6523'

// eslint-disable-next-line import/no-default-export
export default {
  ...xyoEmbedStoryBase,
  title: 'embed/XyoEmbedPlugin/examples',
} as Meta

const AggregatePriceExample = Template.bind({})
AggregatePriceExample.args = {
  huriPayload: AggregatePricePointer,
  plugins: [CryptoAssetRenderPlugin],
}

const UniswapPairsExample = Template.bind({})
UniswapPairsExample.args = {
  huriPayload: UniswapPairPointer,
  plugins: [UniswapPairsRenderPlugin],
}

export { AggregatePriceExample, UniswapPairsExample }
