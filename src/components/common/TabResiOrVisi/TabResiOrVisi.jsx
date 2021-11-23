import React from 'react'
import {Tabs, Box, Tab} from '@mui/material';

function TabResiOrVisi(props) {
   const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
     <Box sx={{ width: '100%', bgcolor: 'background.main' }}>
      <Tabs value={value} onChange={handleChange} textColor='text.primary' centered fullwidth>
        <Tab label="Item One" sx={{color:"text.other"}} />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
      </Tabs>
    </Box>
  )
}

export default TabResiOrVisi
