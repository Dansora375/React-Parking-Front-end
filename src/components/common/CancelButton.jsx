import React from 'react'
import styled  from 'styled-components';
import ButtonUnstyled, { buttonUnstyledClasses } from '@mui/core/ButtonUnstyled';


const ButtonCancel = styled.button`
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

`

function CancelButton(props) {
  const {text}=props
  return (
    <>
      <ButtonCancel>{text}</ButtonCancel>
    </>
  )
}

export default CancelButton
