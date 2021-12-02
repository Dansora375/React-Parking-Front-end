import * as React from 'react';
import './Residentes.css';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/system';
import InputUnstyled from '@mui/core/InputUnstyled';
import CrearResidente from '../../components/Residentes/CrearResidente';
import ObtenerResidente from '../../components/Residentes/ObtenerResidente';
import {useDispatch, useSelector} from 'react-redux';
import { GetResidentsAction } from '../../redux/Ducks/residenteDuck';




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



 
export function Residentes() {

    const dispatch = useDispatch();
    const Residentes = useSelector(store => store.residentes.residentes);

    // const info = {
    //   IdNeighborhood:"619cc7d78011c2969719fedd"
    // }
    const userData = useSelector(state => state.authentication.userData)
    React.useEffect (() => {
      if(userData)
        dispatch(GetResidentsAction({IdNeighborhood: userData.neighborhood}))
    },[])

    const contenido =   <Box component="main" sx={{ flexGrow: 1, p: 1 }}>
                            <Box sx={{ flexGrow: 1, p: 2 }}>
                                <Grid container justifyContent="flex-end"alignItems="flex-end"spacing={0}>
                                    
                                    <Grid item xs={8.8} className="">
                                        <CrearResidente/>
                                    </Grid>
                                    <Grid item xs={2} sx={{textAlign: "right"}}>
                                    <CustomInput id="standard-basic" aria-label="Demo input" variant ="standard" placeholder="Buscar Residente..." />
                                </Grid>
                                <Grid item xs={1}>
                                    <SearchIcon fontSize="large" sx={{color: "#14FFEC"}}/>
                                </Grid>
                                    
                                </Grid>
                            </Box>
                                
                            
                            <Grid item xs={12} className="titulo">
                                <b><br/>RESIDENTES</b>
                            </Grid>
                          <div>

                            {Residentes.map((res) => (

                              <ObtenerResidente name={res.  name} residentData={res}/>

                            ))}
                          </div>
                           </Box>

    return (

        contenido

        
    );

}