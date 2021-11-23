import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';



// importando los iconos personalizados
import EntradasIcon from './icons/Entradas'
import ParqueaderoIcon from './icons/Parqueadero'
import ResidenteIcon from './icons/Residentes'
import VehiculosIcon from './icons/Vehiculos'
import HomeIcon from './icons/Home'

import { Link, Switch, Route } from 'react-router-dom';

import {Hogares} from "../views/Hogares/Hogares"
import Usuario from '../views/Entrada/Usuario';

import { Link } from 'react-router-dom';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));


const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer( { contenido } ) {

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }} >
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar sx={{backgroundColor:"#323232", color:"#14ffec"}}>
          <IconButton
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: '36px',
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon sx={{color:"#14ffec"}}/>
          </IconButton>
          <Typography variant="h6" noWrap component="div" >
            REACTPARKING
          </Typography>
          <Usuario />
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open} PaperProps={{
          sx: {
          backgroundColor: "#323232",
          color:"#14ffec",
          } 
        }}>
        <DrawerHeader >
          <IconButton onClick={handleDrawerClose} >
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon sx={{color:"#14ffec"}}/>}
          </IconButton>
        </DrawerHeader>
        <List disablePadding>
          <ListItem button component={Link} to={"/hogares"}>
            <ListItemIcon>
              <HomeIcon viewBox="0 -20 130 120" width="80" height="80"></HomeIcon>
            </ListItemIcon>
            <ListItemText primary={"Hogares"}/>
          </ListItem>
        </List>

        <List disablePadding>
          <ListItem  button component={Link} to={"/entradas"}>
            <ListItemIcon >
              <EntradasIcon stroke="#BCFFFA"  viewBox="0 -20 130 120" width="80" height="80" ></EntradasIcon>
            </ListItemIcon>
            <ListItemText primary={"Entradas"}/>
          </ListItem>
        </List>

        <List disablePadding>
          <ListItem  button component={Link} to={"/parqueadero"}>
            <ListItemIcon >
              <ParqueaderoIcon stroke="#BCFFFA"  viewBox="0 -20 130 120" width="80" height="80" ></ParqueaderoIcon>
            </ListItemIcon>
            <ListItemText primary={"Parqueadero"}/>
          </ListItem>
        </List>

        <List disablePadding>
          <ListItem  button component={Link} to={"/residentes"}>
            <ListItemIcon >
              <ResidenteIcon stroke="#BCFFFA"  viewBox="0 -20 130 120" width="80" height="80" ></ResidenteIcon>
            </ListItemIcon>
            <ListItemText primary={"Residentes"}/>
          </ListItem>
        </List>

        <List disablePadding>
          <ListItem  button component={Link} to={"/vehiculos"}>
            <ListItemIcon >
              <VehiculosIcon stroke="#BCFFFA"  viewBox="0 -20 130 120" width="80" height="80" ></VehiculosIcon>
            </ListItemIcon>
            <ListItemText primary={"Vehiculos"}/>
          </ListItem>
        </List>
        
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3, backgroundColor: "#323232", color: "#BCFFFA" }}>
        <DrawerHeader />
        {contenido}
      </Box>
    </Box>
  );
}
