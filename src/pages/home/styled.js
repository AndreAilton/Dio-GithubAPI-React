import styled from 'styled-components';

export const Conteudo = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Img = styled.img`
  height: 92dvh;

  @media only screen and (max-width: 768px) {
    position: absolute;
    height: 100dvh;
    width: 100%;
  }
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 768px) {
    align-items: center;
  }
`;

export const H1 = styled.h1`
  font-family: 'Inter, Roboto, Arial';    
  font-size: 24px;
  color: #ffffff;

  @media only screen and (max-width: 768px) {
    font-size: 18px;
  }
`;

export const Info = styled.div`
  width: 60%;
  margin-right: 90px;
  margin-top: 40px;
  Color: #ffffff;

  @media only screen and (max-width: 768px) {
    width: 100%;
    margin-right: 0;
    margin-top: 20px;
  }
`;

export const ConteudoInfo = styled.div`
  display: flex;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

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

  @media only screen and (max-width: 768px) {
    width: 100%;
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

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

  @media only screen and (max-width: 768px) {
    width: 100%;
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  margin-top: 40px;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ImgProfile = styled.img`    
  border-radius: 50%;
  width: 100px;
  height: 100px;
  min-width: 100px;

  @media only screen and (max-width: 768px) {
    width: 50px;
    height: 50px;
    min-width: 50px;
  }
`;

export const P = styled.p`
  font-family: 'Inter, Roboto, Arial';    
  font-size: 18px;
  color: ${({ color }) => color || '#ffffff'};
  margin-top: ${({marginTop})=> marginTop || '0px'};

  @media only screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

export const Repositorios = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: start;
  margin-top: 40px;

  @media only screen and (max-width: 768px) {
    margin-top: 20px;
  }
`;