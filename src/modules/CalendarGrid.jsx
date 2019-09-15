import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: '20px',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width: '100px',
    lineHeight: '100px',
    fontFamily: 'Work Sans',
    fontWeight: '600',
    fontSize: '25px',
    border: '2px solid #C4C4C4',
    boxSizing: 'borderBox',
    borderRadius: '9px',
    boxShadow: 'none'
  },
  rowItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  day_heading: {
    fontFamily: 'Work Sans',
    color: 'black',
    width: '100px',
    fontWeight: '600',
    backgroundColor: 'transparent',
    boxShadow: 'none'
  }
}));

const days = ['SUN', 'MON', 'TUES', 'WED', 'THURS', 'FRI', 'SAT'];

export default function CalendarGrid() {
  const classes = useStyles();

  function RenderDays() {
    let weekItems = [];
    for (let i = 0; i < days.length; i++) {
      weekItems.push(
        <Grid className={classes.rowItem} item xs={1.7}>
          <Paper className={classes.day_heading}>{days[i]}</Paper>
        </Grid>
      )
    }
    return (
      <Grid container item xs={12} spacing={3}>
        {weekItems}
      </Grid>
    )
  }

  function FormRowItems() {
    let rowItems = [];
    for (let i = 0; i < 30; i++) {
      rowItems.push(
        <Grid key={i} className={classes.rowItem} item xs={1.7}>
          <Paper key={i} className={classes.paper}>{i + 1}</Paper>
        </Grid>
      );
    }
    return rowItems;
  }

  function renderRows(num) {
    const rowItems = FormRowItems();
    let index = 0;
    let rows = [];
    rows.push(RenderDays());
    for (let i = 0; i < num; i++) {
      let curRow = [];
      for (let q = 0; q < 7; q++) {
        curRow.push(rowItems[index]);
        index++;
      }
      rows.push(
        <Grid container item xs={12} spacing={3}>
          {curRow}
        </Grid>
      )
      curRow = [];
    }
    return rows;
  }

  return (
    <div className={classes.root}>
      <Grid container item xs={12} spacing={1}>
        {renderRows(5)}
      </Grid>
    </div>
  );
}