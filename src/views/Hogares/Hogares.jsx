import * as React from 'react';
import './Hogares.css';
import Grid from '@mui/material/Grid';
import MiniDrawer from '../../components/Drawer';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons/faEllipsisV';
import ButtonUnstyled, { buttonUnstyledClasses } from '@mui/core/ButtonUnstyled';
import { styled } from '@mui/system';
import InputUnstyled from '@mui/core/InputUnstyled';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import CrearTorre from '../../components/Hogares/CrearTorre';
import CrearHogarApartamento from '../../components/Hogares/CrearHogarApartamento';

const BotonNav = styled('button')`
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

const StyledInputElement = styled('input')`
  width: 55%;
  font-size: 1rem;
  font-family: IBM Plex Sans, sans-serif;
  font-weight: 400;
  line-height: 1.4375em;
  background: #BCFFFA;
  border: 1px solid #e5e8ec;
  border-radius: 10px;
  padding: 6px 10px;
  color: #20262d;
  transition: width 300ms ease;

  &:hover {
    opacity: 80%;
    border-color: #e5e8ec;
  }

  &:focus {
    outline: none;
    width: 60%;
    transition: width 200ms ease-out;
  }
`;

const CustomInput = React.forwardRef(function CustomInput(props, ref) {
  return (
    <InputUnstyled components={{ Input: StyledInputElement }} {...props} ref={ref} />
  );
});

const options = [
    'TORRE A',
    'TORRE B',
    'TORRE C',
    'TORRE D',
    'TORRE E',
    'TORRE F',
    'TORRE G',
    'TORRE H',
    'TORRE I',
    'TORRE J',
    'TORRE K'
  ];
  
  const ITEM_HEIGHT = 48;

  

function NavButton(props) {
    return <ButtonUnstyled {...props} component={BotonNav} />;
  }

export function Hogares() {

    //const [Torre, setTorre] = React.useState(options[0]);

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const contenido =   <Box component="main" sx={{ flexGrow: 1, p: 1 }}>
                            <Box sx={{ flexGrow: 1, p: 3 }}>
                                <Grid container spacing={2}>
                                    
                                    <Grid item xs={1} className="plus">
                                        <CrearTorre/>
                                    </Grid>
                                    <Grid item xs={5}>
                                        <b className="texto-creacion">Crear Torre</b>
                                    </Grid>
                                    <Grid item xs={1} className="plus">
                                        <CrearHogarApartamento/>
                                    </Grid>
                                    <Grid item xs={5}>
                                        <b className="texto-creacion">Crear Hogar</b>
                                    </Grid>
                                    
                                </Grid>
                            </Box>
                                
                            {/* Barra de opciones */}
                            <Box sx={{ flexGrow: 1, p: 1, border:'1px solid #14FFEC'}}>
                            <Grid container spacing={2} >
                                <Grid item xs={3}>
                                    <NavButton>Asignar Parqueadero</NavButton>
                                </Grid>
                                <Grid item xs={3}>
                                    <NavButton aria-label="more"
                                        id="long-button"
                                        aria-controls="long-menu"
                                        aria-expanded={open ? 'true' : undefined}
                                        aria-haspopup="true"
                                        onClick={handleClick}>
                                            TORRE A &nbsp;&nbsp;
                                        <FontAwesomeIcon icon={faEllipsisV} />
                                        </NavButton>
                                        <Menu
                                            id="long-menu"
                                            MenuListProps={{
                                            'aria-labelledby': 'long-button',
                                            }}
                                            anchorEl={anchorEl}
                                            open={open}
                                            onClose={handleClose}
                                            PaperProps={{
                                            style: {
                                                maxHeight: ITEM_HEIGHT * 4.5,
                                                width: '15ch',
                                                backgroundColor: '#0D7377',
                                                color: '#BCFFFA',
                                            },
                                            }}
                                        >
                                            {options.map((option) => (
                                            <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                                                {option}
                                            </MenuItem>
                                            ))}
                                        </Menu>
                                </Grid>
                                <Grid item xs={5} sx={{textAlign: "right"}}>
                                    <CustomInput aria-label="Demo input" placeholder="Buscar apartamento..." />
                                </Grid>
                                <Grid item xs={1}>
                                    <SearchIcon fontSize="large" sx={{color: "#14FFEC"}}/>
                                </Grid>
                            </Grid>
                            </Box>
                            <Grid item xs={12} className="titulo">
                                <b><br/>TORRE A</b>
                            </Grid>
                            <p id="info">En este momento no hay apartamentos</p>
                        </Box>

    return (

        contenido

        
    );

}