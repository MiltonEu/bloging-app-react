import React, { useContext } from 'react'
import { StyledButton, StyledContainer, StyledH1, StyledImg } from '../styled-components/styled-components'
import googleLogo from '../assets/google-icon.svg';
import { signInWithPopup } from 'firebase/auth';
import { auth } from '../auth/google_auth';
import { provider } from '../auth/auth_google_provider';
import { UserContext } from '../App';

const Login = ({onClose}) => {
    const context = useContext(UserContext);
    
    const handleGoogleAuthClick = async () => {
    const authInfos = await signInWithPopup(auth, provider);
    console.log(authInfos.user.stsTokenManager); 
    const token = await authInfos.user.getIdToken()
    const user = {
        uid : authInfos.user.uid,
        token : token,
        avatar : authInfos.user.photoURL ? authInfos.user.photoURL : "",
        mail : authInfos.user.email,
        displayname : authInfos.user.displayName,
    }
    context.setUser(user);
    localStorage.setItem('session', JSON.stringify(user))
    onClose();
    }
  return (
    <StyledContainer>
        <StyledContainer>
            <StyledH1>Rejoignez nous.</StyledH1>
        </StyledContainer>
        <StyledContainer margin="3em 0 0 0">
            <StyledContainer position="relative">
                <StyledImg position="absolute" src={googleLogo} padding="1em" width="16px"></StyledImg>
            <StyledButton 
            border="0.5px solid rgb(168, 168, 168)" 
            borderRadius="25px" 
            backgroundColor="white"     
            padding= "1em"
            width="60%" className='btn' onClick={handleGoogleAuthClick}>Se connecter avec Google</StyledButton> 

            </StyledContainer>
        </StyledContainer>
    </StyledContainer>
  )
}

export default Login