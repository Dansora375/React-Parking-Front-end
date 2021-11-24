import React from 'react'
import { connect } from 'react-redux'
import '../../views/Residentes/Residentes.css'
import Grid from '@mui/material/Grid';
import PersonOutline from '@mui/icons-material/PersonOutline'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ButtonUnstyled, { buttonUnstyledClasses } from '@mui/core/ButtonUnstyled';
import { styled } from '@mui/system';
import { Popover } from '@mui/material';
import { ButtonGroup } from '@mui/material';

const BotonCustom = styled('button')`
  background-color: #0D7377;
  padding: 6px 16px;
  border-radius: 4px;
  color: #BCFFFA;
  font-weight: 600;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 1rem;
  transition: all 200ms ease;
  cursor: pointer;
  box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 0 rgba(0, 127, 255, 0);
  border: none;
  border-top: solid 1px;
  line-height: 1.5;
  &:hover {
    background-color: #14FFEC;
    color: #323232;
  }
  &.${buttonUnstyledClasses.active} {
    background-color: #0D7377;
    color: #BCFFFA;
  }
  &.${buttonUnstyledClasses.focusVisible} {
    box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5);
    outline: none;
  }
  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
    box-shadow: 0 0 0 0 rgba(0, 127, 255, 0);
  }
`;

function CustomButton(props) {
  return <ButtonUnstyled {...props} component={BotonCustom} />;
}


const buttons = [
  <CustomButton key="info">Mas informacion</CustomButton>,
  <CustomButton key="editar">Modificar Residente</CustomButton>,
  <CustomButton key="eliminar">Eliminar Residente</CustomButton>
];

export default function ObtenerResidente  () {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
      setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (

        <div className="residente"   >
          
         <PersonOutline sx={{ fontSize: 100, "&:hover":{color: "#14FFEC"}}} onClick={handleClick}/>                    
        <div>Ricardo</div>
        <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
                }}
            >
                <ButtonGroup
                    orientation="vertical"
                    aria-label="vertical contained button group"
                    variant="contained"
                    sx={{border: "solid 1px", borderColor:"#BCFFFA"}}
                >
                    {buttons}
                </ButtonGroup>
            </Popover>

      </div>
    )
}

