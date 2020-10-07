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




const BoxingRankingTable = (props) => {
  
    const classes = styles();
    const {rankings} = props;
   
    // rankings.data[0].map((division)=>{
    //   console.log(division.name)
    // })
    console.log(rankings.data[0])
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
              </TableCell>
              {/* <TableCell align="right">{ranking.data[1].record}</TableCell>
              <TableCell align="right">{ranking.data[1].kos}</TableCell>
              <TableCell align="right">{ranking.data[1].alias}</TableCell>
              <TableCell align="right">{ranking.data[1].nationality}</TableCell>
              <TableCell align="right">{ranking.data[1].debut}</TableCell>
              <TableCell align="right">{ranking.data[1].division}</TableCell>
              <TableCell align="right">{ranking.data[1].stance}</TableCell>
              <TableCell align="right">{ranking.data[1].height}</TableCell>
              <TableCell align="right">{ranking.data[1].reach}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default (withStyles(styles, {withTheme: false})(BoxingRankingTable))