import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Typography from '@mui/material/Typography';

function createData(name, number, pos, age, ht, wt, SC, Exp, bday, draft, summary) {
  return {
    name,
    number,
    pos,
    age,
    ht,
    wt,
    SC,
    Exp,
    bday,
    draft,
    summary,
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
            <Link to={`/player/${encodeURIComponent(row.name)}`}>{row.name}</Link>
        </TableCell>
        <TableCell align="right">{row.number}</TableCell>
        <TableCell align="right">{row.pos}</TableCell>
        <TableCell align="right">{row.age}</TableCell>
        <TableCell align="right">{row.ht}</TableCell>
        <TableCell align="right">{row.wt}</TableCell>
        <TableCell align="right">{row.SC}</TableCell>
        <TableCell align="right">{row.Exp}</TableCell>
        <TableCell align="right">{row.bday}</TableCell>
        <TableCell align="right">{row.draft}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={11}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom>
                Regular Season Summary
              </Typography>
              <Typography variant="body2" gutterBottom component="div">
                {row.summary}
              </Typography>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
    pos: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    ht: PropTypes.string.isRequired,
    wt: PropTypes.number.isRequired,
    SC: PropTypes.string.isRequired,
    Exp: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    bday: PropTypes.string.isRequired,
    draft: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
  }).isRequired,
};

const rows = [
    createData('Jamie Benn', 14, 'F', 34, '6-2', 205, 'L', 14, 'July 18 1989', '2007 DAL 5th (129)', '21 G 39 A 60 P'),
    createData('Lian Bichsel', 6, 'D', 19, '6-5', 216, 'L', 'R', 'May 18 2004', '2022 DAL 1st (18)', ''),
    createData('Matej Blumel', 25, 'F', 23, '6-0', 200, 'L', 1, 'May 31 2000', '2019 EDM 4th (100)', ''),
    createData('Mavrik Bourque', 22, 'F', 22, '5-10', 191, 'R', 'R', 'January 8 2002', '2020 DAL 1st (30)', '0 G 0 A 0 P'),
    createData('Evgenii Dadonov', 63, 'F', 34, '5-11', 189, 'L', 9, 'March 12 1989', '2007 FLA 3rd (71)', '12 G 11 A 23 P'),
    createData('Matt Duchene', 95, 'F', 33, '5-11', 195, 'L', 14, 'January 16 1991', '2009 COL 1st (3)', '25 G 40 A 65 P'),
    createData('Radek Faksa', 12, 'F', 30, '6-3', 225, 'L', 8, 'January 9 1994', '2012 DAL 1st (13)', '7 G 12 A 19 P'),
    createData('Jani Hakanpaa', 2, 'D', 31, '6-6', 225, 'R', 4, 'March 31 1992', '2010 STL 4th (104)', '2 G 10 A 12 P'),
    createData('Thomas Harley', 55, 'D', 22, '6-3', 205, 'L', 2, 'August 19 2001', '2019 DAL 1st (18)', '15 G 32 A 47 P'),
    createData('Miro Heiskanen', 4, 'D', 24, '6-1', 195, 'L', 5, 'July 18 1999', '2017 DAL 1st (3)', '9 G 45 A 54 P'),
    createData('Roope Hintz', 24, 'F', 27, '6-3', 215, 'L', 5, 'November 17 1996', '2015 DAL 2nd (49)', '30 G 35 A 65 P'),
    createData('Wyatt Johnston', 53, 'F', 20, '6-1', 185, 'R', 1, 'May 14 2003', '2021 DAL 1st (23)', '32 G 33 A 65 P'),
    createData('Fredrik Karlstrom', 51, 'F', 26, '6-3', 195, 'L', 2, 'January 12 1998', '2016 DAL 3rd (90)', ''),
    createData('Esa Lindell', 23, 'D', 29, '6-3', 220, 'L', 8, 'May 23 1994', '2012 DAL 3rd (74)', '5 G 21 A 26 P'),
    createData('Nils Lundkvist', 5, 'D', 23, '5-11', 190, 'R', 2, 'July 27 2000', '2018 NYR 1st (28)', '2 G 17 A 19 P'),
    createData('Mason Marchment', 27, 'F', 28, '6-4', 210, 'L', 4, 'June 18 1995', '', '22 G 31 A 53 P'),
    createData('Matt Murray', 32, 'G', 25, '6-1', 196, '-', 1, 'February 2 1998', '', '1-0-0 0.00 GAA'),
    createData('Jake Oettinger', 29, 'G', 25, '6-5', 220, '-', 3, 'December 18 1998', '2017 DAL 1st (26)', '35-14-4 2.72 GAA'),
    createData('Alexander Petrovic', 28, 'D', 31, '6-5', 208, 'R', 7, 'March 3 1992', '2010 FLA 2nd (36)', '0 G 0 A 0 P'),
    createData('Remi Poirier', 31, 'G', 22, '6-2', 210, '-', 'R', 'October 6 2001', '2020 DAL 6th (185)', ''),
    createData('Jason Robertson', 21, 'F', 24, '6-3', 200, 'L', 4, 'July 22 1999', '2017 DAL 2nd (39)', '29 G 51 A 80 P'),
    createData('Tyler Seguin', 91, 'F', 32, '6-1', 205, 'R', 13, 'January 31 1992', '2010 BOS 1st (2)', '25 G 27 A 52 P'),
    createData('Craig Smith', 15, 'F', 34, '6-0', 204, 'R', 12, 'September 5 1989', '2009 NSH 4th (98)', '11 G 9 A 20 P'),
    createData('Logan Stankoven', 11, 'F', 20, '5-8', 171, 'R', 'R', 'February 26 2003', '2021 DAL 2nd (47)', '6 G 8 A 14 P'),
    createData('Scott Wedgewood', 41, 'G', 31, '6-2', 205, '-', 5, 'August 14 1992', '2010 NJD 3rd (84)', '16-7-5 2.85 GAA')
];

export default function CollapsibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Name</TableCell>
            <TableCell align="right">Number</TableCell>
            <TableCell align="right">Position</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">Height</TableCell>
            <TableCell align="right">Weight</TableCell>
            <TableCell align="right">SC</TableCell>
            <TableCell align="right">Experience</TableCell>
            <TableCell align="right">Birthday</TableCell>
            <TableCell align="right">Draft</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}