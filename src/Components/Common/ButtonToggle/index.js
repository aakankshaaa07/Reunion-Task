import React from 'react'
import ToggleButton from '@material-ui/lab/ToggleButton'
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
    justifyContent: 'space-between',
  },
  toggle: {
    fontFamily: `'Montserrat', sans-serif`,
    fontSize: '.8rem',
    border: '1px solid rgba(50, 84, 255, 0.65)',
    borderRadius: '10px',
    '&.MuiToggleButtonGroup-groupedHorizontal:not(:last-child)': {
      borderRadius: '10px',
    },
    '&.MuiToggleButtonGroup-groupedHorizontal:not(:first-child)': {
      borderRadius: '10px',
      border: '1px solid rgba(50, 84, 255, 0.65)',
    },
    '&.Mui-selected': {
      borderRadius: '10px',
      background: 'rgb(50, 84, 255)',
      color: '#fff',
    },
    '&.MuiToggleButton-root': {
      '&:hover': {
        background: 'rgb(50, 84, 255)',
        color: '#fff',
      },
    },
  },
});

const ButtonToggle = ({options, value, selectToggle}) => {
  const classes = useStyles();
  return (
    <ToggleButtonGroup
    value={value}
    onChange={selectToggle}
    className={classes.root}
    exclusive
    >
    {options.map(({label, id, value})=> (
      <ToggleButton className={classes.toggle} key={id} value={value}>
        {label}
      </ToggleButton>
      ))}
    </ToggleButtonGroup>
  )
}

export default ButtonToggle