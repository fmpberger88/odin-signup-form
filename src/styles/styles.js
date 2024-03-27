import styled from '@emotion/styled'

export const MainContainer = styled.main`
    display: flex;
    height: 100vh;
`

export const AsideContainer = styled.aside`
    background-image: url("/images/yoga.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    min-width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const SignupContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background-color: #F9FAFB;
    & p {
        font-size: 1.125rem;
        margin: 0 30px;
    }
    & form {
        display: flex;
        flex-wrap: wrap;
        padding: 30px;
        gap: 30px;
        background-color: white;
        & div {
            display: flex;
            flex-direction: column;
            width: 40%;
            
            & label {
                font-size: 0.75rem;
            }
            
            & input {
                border: 1px lightgray solid;
                border-radius: 5px;
                outline: none;
                &:focus {
                    border: 2px #9EADD0 solid;
                    box-shadow: 0px 2px 8px #9EADD0; // Schatten in Taubenblau
                }
            }
            
            & button {
                padding: 5px;
                border: 1px #701C14 solid;
                border-radius: 10px;
                background-color: #701C14;
                font-weight: bold;
                color: white;
            }
        }
    }
    
    & .linkContainer {
        align-self: flex-start;
        justify-self: flex-start;
    }
}
    
    & .link-to-login {
        font-weight: bold;
`