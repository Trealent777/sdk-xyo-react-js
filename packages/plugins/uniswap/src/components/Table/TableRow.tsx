import SwapHorizRoundedIcon from '@mui/icons-material/SwapHorizRounded'
import { TableCell, TableRow } from '@mui/material'
import { FlexRow } from '@xylabs/react-flexbox'
import { useGetTokenData } from '@xyo-network/react-shared'
import { XyoUniswapCryptoPair } from '@xyo-network/uniswap-crypto-market-payload-plugin'

export interface TableRowProps {
  tokenPair: XyoUniswapCryptoPair
}

export const UniswapTableRowRender: React.FC<TableRowProps> = ({ tokenPair }) => {
  const [token0, token1] = tokenPair.tokens

  const [tokenInfo0, tokenInfo1] = useGetTokenData([token0.symbol, token1.symbol])
  return (
    <TableRow hover role="checkbox" tabIndex={-1}>
      <TableCell align="center">
        <FlexRow columnGap={2}>
          <img src={tokenInfo0.icon} height="25px" />
          <SwapHorizRoundedIcon />
          <img src={tokenInfo1.icon} height="25px" />
        </FlexRow>
      </TableCell>
      <TableCell align="right">{tokenInfo0.readableName}</TableCell>
      <TableCell align="right">{token0.value}</TableCell>
      <TableCell align="right">{tokenInfo1.readableName}</TableCell>
      <TableCell align="right">{token1.value}</TableCell>
    </TableRow>
  )
}
