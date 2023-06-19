import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Container = styled.div`
    width: 500px;
    height: 700px;
    padding: 20px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    hr{
        width: 80%;
    }
    .SignupGuide {
        span{
            font-weight: 600;
        }
        margin: 20px 0;
    }
`
export const ContainerHeder = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: center;
    .MainLogo{
        height: 100%;
    }
`
export const ContainerMain = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ContainerFooter = styled.div`
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const InputBox = styled.input`
    width: 80%;
    height: 70px;
    font-size: 20px;
    margin-bottom: 20px;
    padding: 10px;
`

export const SubBar = styled.div`
    width: 80%;
    height: 50px;
    display: flex;
    justify-content: space-between;
`

export const LoginButton = styled.button`
    font-size: 30px;
    width: 80%;
    height: 70px;
    border: none;
    border-radius: 20px;
    background-color: #0CDCBF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    color: white;
`

export const SocialButton = styled.button`
    width: 70px;
    height: 70px;
    border-radius: 50%;
    margin: 0 10px 30px;
`