import styled from 'styled-components';

export const Conteudo = styled.div`
    position: relative;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;

`

export const Img = styled.img`
    height: 92dvh;

`

export const Info = styled.div`
    width: 60%;
    margin-right: 90px;
    margin-top: 40px;
    Color: #ffffff;
`

export const ConteudoInfo = styled.div`
    display: flex;

    `


export const Input = styled.input`
    border: 1px solid #999999;
    border-radius: 22px;
    min-width: 250px;
    width: 80%;
    color: #ffffff;
    margin-right: 12px;
    background: transparent;
    font-size: 18px;
    padding: 10px;
    outline: none;

    `

export const Button = styled.button`
    border: 1px solid #999999;
    border-radius: 22px;
    min-width: 50px;
    color: #ffffff;
    margin-right: 12px;
    background: #2D333B;
    font-size: 18px;
    padding: 10px;
    cursor: pointer;
`

export const Profile = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    margin-top: 40px;
`

export const ImgProfile = styled.img`    
    border-radius: 50%;
    width: 100px;
    height: 100px;
    min-width: 100px;
    margin-right: 20px;
    border: 1px solid #999999;

`

export const Div = styled.div`
    display: flex;
    flex-direction: column;
`

export const H1 = styled.h1`
    font-family: 'Inter, Roboto, Arial';    
    font-size: 24px;
    color: #ffffff;
    `

export const P = styled.p`
    font-family: 'Inter, Roboto, Arial';    
    font-size: 18px;
    color: ${({ color }) => color || '#ffffff'};
    margin-top: ${({marginTop})=> marginTop || '0px'};
    `

export const Repositorios = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: start;
    margin-top: 40px;
`