import * as React from 'react';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import { FormHelperText } from '@mui/material';

export default function BasicDatePicker() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer sx={{paddingTop:0}} components={['DatePicker']}>
        <DemoItem>
          <DatePicker defaultValue={dayjs("2023-02-29")} />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  );
}