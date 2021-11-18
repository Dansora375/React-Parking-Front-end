import * as React from 'react';
import styled from 'styled-components';
import ButtonUnstyled, { buttonUnstyledClasses } from '@mui/core/ButtonUnstyled';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';


const Overlay = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px;

`;

const ModalContainer = styled.div`
    width: 450px;
    min-height: 100px;
    background: #323232;
    position: relative;
    border-radius: 4px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    padding: 20px;
    text-align: center;
    border: 1px solid;
    border-color: white;
`;

const BotonCancelar = styled('button')`
  background-color: #323232;
  padding: 6px 16px;
  border-radius: 4px;
  color: #BCFFFA;
  font-weight: 600;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 1rem;
  transition: all 200ms ease;
  cursor: pointer;
  box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 0 rgba(0, 127, 255, 0);
  border: 1px solid;
  border-color: #BCFFFA;
  line-height: 1.5;

  &:hover {
    background-color: #BCFFFA;
    color: #323232;
  }

  &.${buttonUnstyledClasses.active} {
    background-color: #323232;
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

function CancelButton(props) {
    return <ButtonUnstyled {...props} component={BotonCancelar} />;
  }

const BotonConfirmar = styled('button')`
  background-color: #BCFFFA;
  padding: 6px 16px;
  border-radius: 4px;
  color: #323232;
  font-weight: 600;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 1rem;
  transition: all 200ms ease;
  cursor: pointer;
  box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 0 rgba(0, 127, 255, 0);
  border: none;
  line-height: 1.5;

  &:hover {
    background-color: #0D7377;
    color: #BCFFFA;
  }

  &.${buttonUnstyledClasses.active} {
    background-color: #BCFFFA;
    color: #323232;
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

function ConfirmButton(props) {
    return <ButtonUnstyled {...props} component={BotonConfirmar} />;
  }

export default function Modal1({children, estado, cambiarEstado}) {
    return (
        <>
            {estado &&
                <Overlay>
                    <ModalContainer>
                        {children}
                        <Box sx={{ flexGrow: 1, p: 3 }}>
                            <Grid container spacing={2}>  
                                <Grid item xs={6} sx={{textAlign: 'center'}}>
                                    <CancelButton
                                    onClick={() => cambiarEstado(false)}> 
                                    Cancelar 
                                    </CancelButton>
                                </Grid>
                                <Grid item xs={6} sx={{textAlign: 'center'}}>
                                    <ConfirmButton> Confirmar </ConfirmButton>
                                </Grid>
                            </Grid>
                        </Box>
                    </ModalContainer>
                </Overlay>}
        </>
    )
}
