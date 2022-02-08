import { Table, TableBody, TableCell, TableHead, TableProps, TableRow, Typography } from '@mui/material'
import { XyoBoundWitness } from '@xyo-network/sdk-xyo-client-js'

import { BlockTableRow } from './TableRow'

export interface BlockTableProps extends TableProps {
  validate?: boolean
  blocks?: XyoBoundWitness[] | null
  onRowClick?: (value: XyoBoundWitness) => void
}

export const BlockTable: React.FC<BlockTableProps> = ({ validate = false, onRowClick, blocks, ...props }) => {
  return (
    <Table {...props}>
      <TableHead>
        <TableRow>
          <TableCell>
            <Typography variant="caption">Hash</Typography>
          </TableCell>
          <TableCell align="center">
            <Typography variant="caption">Archive</Typography>
          </TableCell>
          <TableCell align="center">
            <Typography variant="caption">Client</Typography>
          </TableCell>
          <TableCell align="center">
            <Typography variant="caption">Date</Typography>
          </TableCell>
          <TableCell align="center">
            <Typography variant="caption">Time</Typography>
          </TableCell>
          <TableCell align="center">
            <Typography variant="caption">Payloads</Typography>
          </TableCell>
          {validate && (
            <TableCell align="center">
              <Typography variant="caption">Valid</Typography>
            </TableCell>
          )}
        </TableRow>
      </TableHead>
      <TableBody>
        {blocks?.map((block, index) => (
          <BlockTableRow
            validate={validate}
            key={index}
            block={block}
            onClick={
              onRowClick
                ? () => {
                    onRowClick(block)
                  }
                : undefined
            }
          />
        ))}
      </TableBody>
    </Table>
  )
}