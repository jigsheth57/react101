import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function Calculator(props) {
  const [userInput, setUserInput] = useState('');
  const [runningTotal, setRunningTotal] = useState(0);
  const classes = useStyles();
  const handleSubmit = (event) => {
    event.preventDefault();
    let x = 0;
    switch (event.currentTarget.value) {
      case '+':
        x = Number(runningTotal) + Number(userInput);
        setRunningTotal(x);
        props.onSubmit(x);
        break;
      case '-':
        x = Number(runningTotal) - Number(userInput);
        setRunningTotal(x);
        props.onSubmit(x);
        break;
      case '*':
        x = Number(runningTotal) * Number(userInput);
        setRunningTotal(x);
        props.onSubmit(x);
        break;
      case '/':
        x = Number(runningTotal) / Number(userInput);
        setRunningTotal(x);
        props.onSubmit(x);
        break;
      default:
        runningTotal;
    }
    setUserInput('');
  };
  return (
    <Container maxWidth="sm">
      <Typography
        component="div"
        style={{ backgroundColor: '#ebebeb' }}
      >
        <form className={classes.root} noValidate autoComplete="off">
          <Input
            type="number"
            value={userInput}
            onChange={(event) => setUserInput(event.currentTarget.value)}
            placeholder=""
            variant="filled"
            color="primary"
            inputProps={{ 'aria-label': 'description' }}
            required
          />
          <br />
          <Button
            variant="contained"
            size="medium"
            color="primary"
            className={classes.margin}
            value="+"
            onClick={(event) => handleSubmit(event)}
          >
            +
          </Button>
          <Button
            variant="outlined"
            size="medium"
            color="secondary"
            className={classes.margin}
            value="-"
            onClick={(event) => handleSubmit(event)}
          >
            -
          </Button>
          <Button
            variant="contained"
            size="medium"
            color="primary"
            className={classes.margin}
            value="*"
            onClick={(event) => handleSubmit(event)}
          >
            *
          </Button>
          <Button
            variant="outlined"
            size="medium"
            color="secondary"
            className={classes.margin}
            value="/"
            onClick={(event) => handleSubmit(event)}
          >
            /
          </Button>
        </form>
      </Typography>
    </Container>
  );
}
