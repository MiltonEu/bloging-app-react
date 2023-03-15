import React from 'react'
import { StyledContainer, StyledInput } from '../../styled-components/styled-components'

const EditArticle = () => {
  return (
    <StyledContainer padding="2em 1em">
        <StyledContainer>
            <StyledInput placeholder='Titre' border="none" className='placeholder-large'/>
        </StyledContainer>
        <StyledContainer>
            <StyledInput placeholder='Inspirez nous...' border="none"/>
        </StyledContainer>
    </StyledContainer>
  )
}

export default EditArticle