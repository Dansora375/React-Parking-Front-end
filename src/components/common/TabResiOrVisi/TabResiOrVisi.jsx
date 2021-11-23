import React from 'react'
import {Tabs, Box, Tab} from '@mui/material';

function TabResiOrVisi(props) {
   const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabWidth = "24%"

  return (
     <Box sx={{ width: '100%', bgcolor: 'background.main',my:3 }}>
      <Tabs value={value} indicatorColor="primary" onChange={handleChange} textColor='primary' centered fullwidth sx={{borderBottom:1, borderColor:"tertiary.main"}}>
        <Tab label="Residentes" sx={{color:"tertiary.main", px:tabWidth, borderColor:"tertiary.main", fontWeight: 'Bold'}} />
        <Tab label="Visitantes" sx={{color:"tertiary.main",  px:tabWidth,fontWeight: 'Bold' }} />

      </Tabs>
    </Box>
  )
}

export default TabResiOrVisi
