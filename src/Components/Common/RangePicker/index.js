import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  thumb: {
    color: 'rgb(50, 84, 255)',
  },
  rail: {
    color: `rgba(50, 84, 255, 0.65)`,
  },
  track: {
    color: 'rgb(50, 84, 255)',
  },
});

const RangePicker = ({ value, changedPrice }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Slider
        value={value}
        onChange={changedPrice}
        valueLabelDisplay="auto"
        min={15}
        step={5}
        max={100}
        classes={{
          thumb: classes.thumb,
          rail: classes.rail,
          track: classes.track,
        }}
      />
    </div>
  );
};

export default RangePicker;