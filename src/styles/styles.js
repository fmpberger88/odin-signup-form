import styled from '@emotion/styled'

export const MainContainer = styled.main`
    display: flex;
    height: 100vh;
    
    // Media Query for screens less than 768px
    @media (max-width: 768px) {
        flex-direction: column;
        height: auto;
    }
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
    
    & div {
        display: flex;
        background-color: rgba(0, 0, 0, 0.5);
        color: white;
        width: 100%;
        justify-content: center;
        align-items: center;
        padding: 20px;
        gap: 5px;

        & h1 {
            font-weight: bold;
            font-family: Norse-Bold, sans-serif;
            font-size: clamp(3rem, 6vw, 6rem);
        }
    }
    
    @media screen and (max-width: 768px){
        height: 400px;
    }
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
        
        @media screen and (max-width: 768px) {
            margin-top: 20px;
            margin-bottom: 20px;
        }
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
                width: 50%;
            }
        }
    }

    
    @media screen and (max-width: 768px) {
        & form {
            justify-content: center;
            & div {
                width: 60%;
                
                & label {
                    font-size: 1rem;
                }
                
                & input {
                    padding: 5px 0;
                }
            }
        n
    }
`

export const LoginDiv = styled.div`
    align-self: flex-start;
    
    @media screen and (max-width: 768px) {
        align-self: center;
    }
`