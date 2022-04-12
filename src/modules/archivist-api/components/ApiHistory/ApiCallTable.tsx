import { Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import { FlexBoxProps, FlexRow, WithChildren } from '@xylabs/sdk-react'

const ApiCallTable: React.FC<WithChildren<FlexBoxProps>> = ({ children, ...props }) => {
  return (
    <FlexRow flexGrow={1} {...props}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>
              <Typography variant="caption">HTTP Method</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="caption">Status</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="caption">URL</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{children}</TableBody>
      </Table>
    </FlexRow>
  )
}

export { ApiCallTable }
