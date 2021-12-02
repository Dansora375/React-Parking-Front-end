import React from 'react'
import styled  from 'styled-components';


const ButtonConfirm = styled.button`
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


`
function ConfirmButton(props) {
  
  const {text}=props
  return (
          
      <ButtonConfirm> {text} </ButtonConfirm>
    
  )
}

export default ConfirmButton
