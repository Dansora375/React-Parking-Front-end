import React from 'react'
import {Grid, Box} from '@mui/material';
import ItemParking from '../../components/Parking/ItemParking'
import SearchAndAdd from '../../components/common/SearchAndAdd/SearchAndAdd'
import TabResiOrVisi from '../../components/common/TabResiOrVisi/TabResiOrVisi'


function Parking() {
  return (
    <>  
      <SearchAndAdd></SearchAndAdd>
      <TabResiOrVisi></TabResiOrVisi>
      <ItemParking>
      </ItemParking>
    </>
  )
}

export default Parking
