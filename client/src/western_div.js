import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableSortLabel from '@mui/material/TableSortLabel';

const headCells = [
  { id: 'name', numeric: false, disablePadding: true, label: 'Team' },
  { id: 'games', numeric: true, disablePadding: false, label: 'Games Played' },
  { id: 'w', numeric: true, disablePadding: false, label: 'Wins' },
  { id: 'l', numeric: true, disablePadding: false, label: 'Losses' },
  { id: 'ol', numeric: true, disablePadding: false, label: 'Overtime Losses' },
  { id: 'pts', numeric: true, disablePadding: false, label: 'Points' },
  { id: 'ptsper', numeric: true, disablePadding: false, label: 'Points %' },
  { id: 'gf', numeric: true, disablePadding: false, label: 'Goals For' },
  { id: 'ga', numeric: true, disablePadding: false, label: 'Goals Against' },
  { id: 'srs', numeric: true, disablePadding: false, label: 'SRS' },
  { id: 'sos', numeric: true, disablePadding: false, label: 'SOS' },
  { id: 'rpt', numeric: true, disablePadding: false, label: 'RPt %' },
  { id: 'rw', numeric: true, disablePadding: false, label: 'RW' }
];

function WesternDivision({ rows }) {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('name');

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const sortedRows = React.useMemo(() => {
    const comparator = (a, b) => {
      if (order === 'asc') {
        return a[orderBy] < b[orderBy] ? -1 : 1;
      } else {
        return a[orderBy] > b[orderBy] ? -1 : 1;
      }
    };
    return [...rows].sort(comparator);
  }, [rows, order, orderBy]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {headCells.map((headCell) => (
              <TableCell
                key={headCell.id}
                align={headCell.numeric ? 'right' : 'left'}
              >
                <TableSortLabel
                  active={orderBy === headCell.id}
                  direction={orderBy === headCell.id ? order : 'asc'}
                  onClick={() => handleRequestSort(headCell.id)}
                >
                  {headCell.label}
                </TableSortLabel>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedRows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.games}</TableCell>
              <TableCell align="right">{row.w}</TableCell>
              <TableCell align="right">{row.l}</TableCell>
              <TableCell align="right">{row.ol}</TableCell>
              <TableCell align="right">{row.pts}</TableCell>
              <TableCell align="right">{row.ptsper}</TableCell>
              <TableCell align="right">{row.gf}</TableCell>
              <TableCell align="right">{row.ga}</TableCell>
              <TableCell align="right">{row.srs}</TableCell>
              <TableCell align="right">{row.sos}</TableCell>
              <TableCell align="right">{row.rpt}</TableCell>
              <TableCell align="right">{row.rw}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default WesternDivision;