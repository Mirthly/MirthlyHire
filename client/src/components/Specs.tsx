import React from 'react';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function valuetext(value: number) {
  return `${value}°C`;
}
export const Specs = () => {
  const [value, setValue] = React.useState<number[]>([1, 100000]);
  const handleChange = (_event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };
  return (
    <>
      <div className='flex'>
        <div className='w-[20%] flex p-20  '>
          Designer
          <div className='ml-20 border-r-2 '>
            <ArrowDropDownIcon />
          </div>
        </div>
        <div className='w-[20%] lg:flex p-20'>
          Work Location
          <div className='ml-20 border-r-2 '>
            <ArrowDropDownIcon />
          </div>
        </div>
        <div className='w-[20%] flex p-20'>
          Experience
          <div className='ml-20 border-r-2 '>
            <ArrowDropDownIcon />
          </div>
        </div>
        <div className='w-[20%] flex p-20'>
          Per Month
          <div className='ml-20 border-r-2 '>
            <ArrowDropDownIcon />
          </div>
        </div>
        <div className='w-[20%]  mt-20 mr-20'>
          <div className='flex'>
            <p>Salary range</p>
          </div>
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
