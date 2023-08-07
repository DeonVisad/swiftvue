import * as React from 'react'

import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

import {createTheme} from '@mui/material/styles';
import { lime } from '@mui/material/colors';
import { ThemeProvider } from '@emotion/react';


const theme = createTheme({
    palette: {
      primary: {
        main: lime.A400,
      },
      secondary: {
        main: '#f44336',
      },
    },
  });


const marks = [
  {
    value: 0,
    label: '$0-25k',
  },
  {
    value: 25,
    label: '$26-50k',
  },
  {
    value: 50,
    label: '$51-75k',
  },
  {
    value: 75,
    label: '$76-100k',
  },
  {
    value: 100,
    label: '$100k+',
  },
];

function valuetext(value) {
  return `$ ${value}`;
}

export default function RangeSlider() {
  return (
    <ThemeProvider theme={theme}>
    <Box sx={{ width: 250 }} className='-z-5'>
      <Slider
        aria-label="Custom marks"
        defaultValue={0}
        getAriaValueText={valuetext}
        step={25}
        valueLabelDisplay="auto"
        marks={marks}
        color='primary'
      />
    </Box>
    </ThemeProvider>
  );
}