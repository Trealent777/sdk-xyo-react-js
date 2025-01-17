import { ListProps } from '@mui/material'

import { useAuthSets } from '../contexts'
import { ManageAuthSetsList } from './ManageAuthSetsList'

export const ManageAuthSetsDataList: React.FC<ListProps> = (props) => {
  const { authSets, activeAuthSet, removeAuthSet, reAuthIssuer } = useAuthSets()
  return <ManageAuthSetsList authSets={authSets} activeAuthSet={activeAuthSet} removeAuthSet={removeAuthSet} reAuthIssuer={reAuthIssuer} {...props} />
}
