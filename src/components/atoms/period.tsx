// modules
import React, { useContext } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import DialogContent from '@material-ui/core/DialogContent';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

// context
import { ctx } from '../pages/top';

interface PeriodType {
  value: string,
  label: string,
  year: number,
  month: number,
  isDiary: boolean
}

const fetchResult: number[] = [
  12019,
  32019,
  52019,
  12020,
  22020,
  32020
]; // fetch via API

const checkIsDiary = (targetValue: number): boolean => {
  return fetchResult.some((value) => {
    return value === targetValue;
  });
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'inline-flex',
      flexWrap: 'wrap',
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 200,
    },
  }),
);

export const Period = () => {
  const classes = useStyles();
  const { displayPeriod, setDisplayPeriod, thisYear, thisMonth } = useContext(ctx);
  const { displayMonth, displayYear } = displayPeriod;

  let targetMonth = displayMonth;
  const initialMonth = displayMonth;
  let targetYear = displayYear;
  const initialYear = displayYear;
  let reverse = false;
  let periods: PeriodType[] = [];
  for (let i = 0; i < 12; i++) {
    periods.push({
      value: `${targetMonth}-${targetYear}`,
      label: `${targetMonth} / ${targetYear}`,
      month: targetMonth,
      year: targetYear,
      isDiary: checkIsDiary(Number(`${targetMonth}${targetYear}`))
    });

    if (
      reverse === false && (
        (targetYear === thisYear && targetMonth === thisMonth)
        || i === 5
      )
    ) {
      reverse = true;
      targetMonth = initialMonth;
      targetYear = initialYear;
    }

    if (!reverse) {
      targetMonth++;
      if (targetMonth === 13) {
        targetMonth = 1;
        targetYear++;
      }
    } else {
      targetMonth--;
      if (targetMonth === 0) {
        targetMonth = 12;
        targetYear--;
      }
    }
  }

  periods.sort((a: PeriodType, b: PeriodType): number => {
    if (a.year > b.year) return 1;
    else if (a.year < b.year) return -1;
    else if (a.month > b.month) return 1;
    else if (a.month < b.month) return -1;
    else return 0;
  });

  const handleValue = (value: any) => {
    const { year, month }: any = periods.find(period => period.value === value);
    setDisplayPeriod({
      displayMonth: month,
      displayYear: year
    });
  }

  return (
    <DialogContent>
      <form className={classes.container}>
        <FormControl className={classes.formControl}>
          <InputLabel id="period-label">Period</InputLabel>
          <Select
            id="period-select"
            labelId="period-label"
            value={`${displayMonth}-${displayYear}`}
            onChange={e => handleValue(e.target.value)}
          >
            {
              periods.map((period, i) => {
                return (
                  <MenuItem key={i} value={period.value}>{period.label}</MenuItem>
                )
              })
            }
          </Select>
        </FormControl>
      </form>
    </DialogContent>
  );
};