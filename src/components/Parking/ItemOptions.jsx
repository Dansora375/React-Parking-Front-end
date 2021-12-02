import React from 'react'
import {Grid, Box, IconButton, MenuItem, Menu} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MoreInfo from './MoreInfoParking';
import ConfirmButton  from '../common/ConfirmButton'; 
import CancelButton  from '../common/CancelButton'; 

import { faEllipsisV } from '@fortawesome/free-solid-svg-icons/faEllipsisV';
import EmptyOrFillParking from './EmptyOrFillParking';

function ItemOptions(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const {ParkingType, idParking,vehicleType}=props
  
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

 
  const TextButtonCancel='Cancelar'
  const TextButtonAceptFill='Si, llenar'
  const TextButtonAceptEmpty='Si, vaciar'
 
  const optionNameFill='Llenar parqueadero'
  const optionNameEmpty='Vaciar parqueadero'
  return (
    <>
      <IconButton aria-label="Example" size='large' onClick={handleClick}>
          <FontAwesomeIcon icon={faEllipsisV} color='#14FFEC' />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}>
        <MenuItem  variant='initialOption' >
          <MoreInfo ParkingType={ParkingType} idParking={idParking} vehicleType={vehicleType}>
            <CancelButton text={TextButtonCancel} />
          </MoreInfo>
        </MenuItem>
        <MenuItem  variant='intermedialOptions'>
          <EmptyOrFillParking optionName={optionNameFill} idParking={idParking} ParkingType={ParkingType}>
          <ConfirmButton text={TextButtonAceptFill}/>
          <CancelButton text={TextButtonCancel} />
          </EmptyOrFillParking>
        </MenuItem>
        <MenuItem variant='finalOption'>
        <EmptyOrFillParking optionName={optionNameEmpty} ParkingType={ParkingType} idParking={idParking}>
          <ConfirmButton text={TextButtonAceptEmpty}/>
          <CancelButton text={TextButtonCancel} />
          </EmptyOrFillParking>
        </MenuItem>
      </Menu>
    </>
  )
}

export default ItemOptions
