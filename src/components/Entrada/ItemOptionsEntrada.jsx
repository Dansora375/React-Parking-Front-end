import React from 'react'
import {Grid, Box, IconButton, MenuItem, Menu} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MoreInfoEntrada from './MoreInfoEntrada';
import ConfirmButton  from '../common/CancelButton'; 
import CancelButton  from '../common/CancelButton'; 

import { faEllipsisV } from '@fortawesome/free-solid-svg-icons/faEllipsisV';

function ItemOptionsEntrada() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const TextCreatePkngButtonConf='Confirmar'
  const TextCreatePkngButtonCan='Cancelar'
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
        <MenuItem  variant='initialOption'>
          <MoreInfoEntrada>
            <CancelButton text={TextCreatePkngButtonCan} />
            <ConfirmButton text={TextCreatePkngButtonConf} />
          </MoreInfoEntrada>
        </MenuItem>
        <MenuItem onClick={handleClose} variant='finalOption'>
          Terminar parqueadero
        </MenuItem>
      </Menu>
    </>
  )
}

export default ItemOptionsEntrada
