import React from 'react';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';

function valuetext(value: number) {
  return `${value}°C`;
}
export const Specs = () => {
  const [value, setValue] = React.useState<number[]>([20, 37]);
  const handleChange = (_event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };
  return (
    <>
      <div className='flex p-20'>
        <div>Designer</div>
        <div className='float-right mt-20 mr-20'>
          <Box sx={{ width: 300 }}>
            <Slider
              getAriaLabel={() => 'Temperature range'}
              value={value}
              onChange={handleChange}
              valueLabelDisplay='auto'
              getAriaValueText={valuetext}
            />
          </Box>
        </div>
      </div>
    </>
  );
};

export default Specs;
