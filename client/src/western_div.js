import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableSortLabel from '@mui/material/TableSortLabel';
import Box from '@mui/material/Box';

function createData(name, games, w, l, ol, pts, ptsper, gf, ga, srs, sos, rpt, rw) {
  return { name, games, w, l, ol, pts, ptsper, gf, ga, srs, sos, rpt, rw};
}

const rows = [
  createData("Dallas Stars",82,52,21,9,113,.689,298,234,0.74,-0.04,.622,40),
  createData("Winnipeg Jets",82,52,24,6,110,.671,259,199,0.69,-0.04,.640,46),
  createData("Colorado Avalanche",82,50,25,7,107,.652,304,254,0.57,-0.05,.610,42),
  createData("Nashville Predators",82,47,30,5,99,.604,269,248,0.23,-0.02,.555,38),
  createData("St. Louis Blues",82,43,33,6,92,.561,239,250,-0.14,-0.01,.506,31),
  createData("Minnesota Wild",82,39,34,9,87,.530,251,263,-0.14,0.01,.476,32),
  createData("Arizona Coyotes",82,36,41,5,77,.470,256,274,-0.21,0.01,.427,28),
  createData("Chicago Blackhawks",82,23,53,6,52,.317,179,290,-1.29,0.06,.280,17)
];

const headCells = [
    {
      id: 'name',
      numeric: false,
      disablePadding: true,
      label: 'Team',
    },
    {
      id: 'games',
      numeric: true,
      disablePadding: false,
      label: 'Games Played',
    },
    {
      id: 'w',
      numeric: true,
      disablePadding: false,
      label: 'Wins',
    },
    {
      id: 'l',
      numeric: true,
      disablePadding: false,
      label: 'Losses',
    },
    {
      id: 'ol',
      numeric: true,
      disablePadding: false,
      label: 'Overtime Losses',
    },
    {
      id: 'pts',
      numeric: true,
      disablePadding: false,
      label: 'Points',
    },
    {
      id: 'ptsper',
      numeric: true,
      disablePadding: false,
      label: 'Points %',
    },
    {
      id: 'gf',
      numeric: true,
      disablePadding: false,
      label: 'Goals For',
    },
    {
      id: 'ga',
      numeric: true,
      disablePadding: false,
      label: 'Goals Against',
    },
    {
      id: 'srs',
      numeric: true,
      disablePadding: false,
      label: 'SRS',
    },
    {
      id: 'sos',
      numeric: true,
      disablePadding: false,
      label: 'SOS',
    },
    {
      id: 'rpt',
      numeric: true,
      disablePadding: false,
      label: 'RPt %',
    },
    {
      id: 'rw',
      numeric: true,
      disablePadding: false,
      label: 'RW',
    },
  ];

export default function WesternDivision() {
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
                <TableCell align="right">{row.rgrec}</TableCell>
                <TableCell align="right">{row.rgptsper}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }