import { WithChildren } from '@xylabs/react-shared'
import { XyoWalletBase } from '@xyo-network/wallet'
import { useState } from 'react'

import { AccountContext } from '../Account'
import { WalletContext } from './Context'
import { useWallet } from './use'

export interface WalletProviderProps {
  defaultWallet?: XyoWalletBase
  defaultActiveAccountIndex?: number
}

const AccountWalletProvider: React.FC<WithChildren> = (props) => {
  const { wallet, activeAccountIndex = 0 } = useWallet()

  return <AccountContext.Provider value={{ account: wallet?.getAccount(activeAccountIndex), provided: true }} {...props} />
}

export const WalletProvider: React.FC<WithChildren<WalletProviderProps>> = ({ defaultWallet, defaultActiveAccountIndex = 0, children, ...props }) => {
  const [wallet, setWallet] = useState<XyoWalletBase | undefined>(defaultWallet)
  const [activeAccountIndex, setActiveAccountIndex] = useState(defaultActiveAccountIndex)

  return (
    <WalletContext.Provider
      value={{
        activeAccountIndex,
        provided: true,
        setActiveAccountIndex,
        setWallet,
        wallet,
      }}
      {...props}
    >
      <AccountWalletProvider>{children}</AccountWalletProvider>
    </WalletContext.Provider>
  )
}
