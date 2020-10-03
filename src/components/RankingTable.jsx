import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {styles} from "./RankingTable.styles.js";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

// const useStyles = makeStyles({
//   table: {
//     minWidth: 650,
//   },
// });

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const RankingTable = (props) => {
  const classes = styles();

  const {rankings} = props;

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Record</TableCell>
            <TableCell align="right">Kos</TableCell>
            <TableCell align="right">Alias</TableCell>
            <TableCell align="right">Nationality</TableCell>
            <TableCell align="right">Debut</TableCell>
            <TableCell align="right">Division</TableCell>
            <TableCell align="right">Stance</TableCell>
            <TableCell align="right">Height</TableCell>
            <TableCell align="right">Reach</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rankings.data && rankings.data.map((ranking) => (
            <TableRow key={ranking.name}>
              <TableCell component="th" scope="row">
                {ranking.name}
                <img styles={{height: "50px !important"}} src={ranking.image}></img>
              </TableCell>
              <TableCell align="right">{ranking.record}</TableCell>
              <TableCell align="right">{ranking.kos}</TableCell>
              <TableCell align="right">{ranking.alias}</TableCell>
              <TableCell align="right">{ranking.nationality}</TableCell>
              <TableCell align="right">{ranking.debut}</TableCell>
              <TableCell align="right">{ranking.division}</TableCell>
              <TableCell align="right">{ranking.stance}</TableCell>
              <TableCell align="right">{ranking.height}</TableCell>
              <TableCell align="right">{ranking.reach}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default (withStyles(styles, {withTheme: false})(RankingTable))