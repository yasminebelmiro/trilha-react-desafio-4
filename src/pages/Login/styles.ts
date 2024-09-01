import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  position: relative;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  font-family: "Crimson Text", serif;
`;

export const ContainerCadastro = styled.div`
  width: 500px;
  height: 470px;
  background-color: #023047;
  border-radius: 40px;

  position: relative;
  z-index: 2; 
  margin-right: -65px; 

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img{
    width: 250px;
  }
`;

export const ContainerLogin = styled.div`
  width: 500px;
  height: 470px;
  background-color: #ffb703;
  border-radius: 40px;
 
  position: relative; 
  
  z-index: 1; 

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h2`
  color: #FFFFFF;
  font-size: 34px;
`;

export const EsqueceuText = styled.p`
  color: #FFFFFF;
  font-size: 14px;
`;
