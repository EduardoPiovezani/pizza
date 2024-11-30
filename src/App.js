import React from "react";
import PizzaForm from "./PizzaForm";
import styled from "styled-components";


const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f8f8f8;
  font-family: Arial, sans-serif;
`;

const App = () => {
  return (
    <AppContainer>
      <PizzaForm/>
    </AppContainer>
  );
};

export default App;
