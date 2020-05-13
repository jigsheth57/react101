import React, { useState } from 'react';
import Calculator from './Calculator';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    'display': 'flex',
    'flexWrap': 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(50),
      height: theme.spacing(30),
    },
  },
}));

export default function App({ initialData }) {
  const classes = useStyles();
  const [total, setTotal] = useState(0);
  const updateTotal = (runningTotal) => {
    setTotal(runningTotal);
  };
  return (
    <div className={classes.root}>
      <Paper elevation={3}>
        <div className="header">{initialData.appName}</div>
        <div className="result">Total: {total}</div>
        <Calculator onSubmit={updateTotal} />
      </Paper>
    </div>
  );
}
