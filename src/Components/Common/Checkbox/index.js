import React from 'react'
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import { FormControlLabel } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    '&$checked': {
      color: 'rgb(50, 84, 255)',
    },
  },
  checked: {},
  wrap: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 0,
  },
  label: {
    fontSize: '.8rem',
    fontFamily: `'Montserrat', sans-serif`,
  },
});

const CheckBox = ({ changeChecked, type }) => {
  const classes = useStyles();
  const {checked, label, id} = type;
  return (
    <div>
      <FormControlLabel
        classes={{
          label:classes.label,
          root:classes.wrap
        }}
        control={
          <Checkbox 
          classes={{
            checked: classes.checked,
            root: classes.root,
          }}
          size="small"
          checked={checked}
          onChange={()=>changeChecked(id)}
          inputProps={{ 'aria-label': 'checkbox with small size' }}
          />
        }
        label={label}
      />
    </div>
  )
}

export default CheckBox